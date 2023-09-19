import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { saveStudent } from '@/services/studentService';
import { useForms } from '@/store/useForms/useForms';
import colors from '@/styles/colors';

import storage from '../../storage';

export default function SubmitPage() {
  const form = useForms();

  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  useEffect(() => {
    submitData();
  }, []);

  const submitData = async () => {
    try {
      setLoading(true);
      const data = await saveStudent(form);
      const id = data.student._id;
      const token = data.auth.token;

      storage.setItem('id', id);
      storage.setItem('token', token);
      setLoading(false);
      router.push('(tabs)');
    } catch (e) {
      setLoading(false);
      Alert.alert('Atenção', e.response.data.error, [
        { text: 'Ok', onPress: router.back },
      ]);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return <View />;
}
