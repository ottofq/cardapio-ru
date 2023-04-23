import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

export default function Info() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text className="mb-2" variant="headlineLarge">
        Informações Gerais
      </Text>
      <Text variant="headlineMedium">Horário de funcionamento</Text>
      <Text variant="bodyLarge">
        Dias de De 2ª a 6ª feira, exceto feriados, paralisações e recessos
        acadêmicos.
      </Text>

      <Text variant="headlineSmall">Alegre</Text>
      <Text variant="bodyLarge">Almoço - 11h00min às 13h30min</Text>
      <Text variant="bodyLarge">Jantar - 17h30min às 19h00min</Text>

      <Text variant="headlineSmall">Jerônimo Monteiro</Text>
      <Text variant="bodyLarge">Almoço - 11h30min às 13h00min</Text>
    </ScrollView>
  );
}
