import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

import { useMenu } from '@/hooks/menu';
import { formatDate } from '@/utils/dateFormat';

import MenuItem from './MenuItem';
import HomeSkeleton from './Skeleton';

export default function Home() {
  const { data, isLoading, error } = useMenu();

  function _formatDate(date: string) {
    const dateFormated = formatDate(date);
    return dateFormated;
  }

  if (isLoading) {
    return <HomeSkeleton />;
  }

  if (!data) {
    return <Text>Vazio</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.gap}
      className="flex flex-1 bg-gray-50 p-4"
    >
      <Text className="text-center text-base">{_formatDate(data.data)}</Text>
      <MenuItem image="entrada" title={data.entrada} description="Entrada" />
      <MenuItem
        image="proteico"
        title={data.pratoProteico}
        description="Prato proteico"
      />
      <MenuItem image="opcao" title={data.opcao} description="Opção" />
      <MenuItem
        image="acompanhamento"
        title={data.acompanhamento}
        description="Acompanhamento"
      />
      <MenuItem
        image="guarnicao"
        title={data.guarnicao}
        description="Guarnicao"
      />
      <MenuItem
        image="sobremesa"
        title={data.sobremesa}
        description="Sobremesa"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gap: {
    rowGap: 8,
  },
});
