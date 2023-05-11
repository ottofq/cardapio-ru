import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const acessData: Array<AcessData> = [
  {
    usuario: 'Estudantes 100%',
    valorPagar: '0,00',
    identificacaoCompraTicket: '-',
    identificacaoAcesso: 'Cartão do Benefício + Doc Oficial c/ foto',
  },
  {
    usuario: 'Estudantes (Resolução ad referendum - Processo 011458/2009-01)*',
    valorPagar: '5,00',
    identificacaoCompraTicket: 'Carteira de Estudante + Doc Oficial c/ foto',
    identificacaoAcesso: 'Carteira de Estudante + Doc Oficial c/ foto',
  },
  {
    usuario: 'Servidores da UFES (Resolução 27/2016)',
    valorPagar: '9,50',
    identificacaoCompraTicket:
      'Identidade funcional ou Contracheque do último mês + Doc Oficial c/ foto',
    identificacaoAcesso:
      'Identidade funcional ou Contracheque do último mês + Doc Oficial c/ foto',
  },
  {
    usuario: 'Usuários especiais (Resolução 27/2016)',
    valorPagar: '9,50',
    identificacaoCompraTicket:
      'Contracheque do último mês + Doc Oficial c/ foto',
    identificacaoAcesso:
      'Contracheque do último mês + Doc Oficial c/ foto + ticket do RU',
  },
  {
    usuario: 'Visitante (Resolução 27/2016)',
    valorPagar: '9,50',
    identificacaoCompraTicket: '-',
    identificacaoAcesso: 'Ticket do RU',
  },
];

type AcessData = {
  usuario: string;
  valorPagar: string;
  identificacaoCompraTicket: string;
  identificacaoAcesso: string;
};

export default function Info() {
  return (
    <ScrollView
      className="bg-tertiary"
      contentContainerStyle={{ padding: 16, rowGap: 12 }}
    >
      <View>
        <Text variant="headlineMedium">Horário de funcionamento</Text>
        <Text variant="bodyLarge">
          Dias de De 2ª a 6ª feira, exceto feriados, paralisações e recessos
          acadêmicos.
        </Text>
      </View>

      <View>
        <Text variant="headlineSmall">Alegre</Text>
        <Text>Almoço - 11h00min às 13h30min</Text>
        <Text>Jantar - 17h30min às 19h00min</Text>
      </View>

      <View>
        <Text variant="headlineSmall">Jerônimo Monteiro</Text>
        <Text>Almoço - 11h30min às 13h00min</Text>
      </View>

      <Text variant="headlineMedium">Valores e Identificação para Acesso</Text>

      <Text>
        As Informações abaixo apresenta os valores a serem pagos e a
        identificação para aquisição dos tickets e acesso ao refeitório de
        acordo com as categorias de usuários:
      </Text>

      {acessData.map((item) => (
        <View key={item.usuario} className="mb-4 gap-1">
          <Text className="font-bold" variant="bodyLarge">
            {item.usuario}
          </Text>

          <Text>
            Valor a Pagar: <Text className="font-bold">{item.valorPagar}</Text>
          </Text>
          <Text>
            Identificação para compra de ticket:{' '}
            <Text className="font-bold">{item.identificacaoCompraTicket} </Text>
          </Text>
          <Text>
            Identificação para acessar o restaurante:{' '}
            <Text className="font-bold">{item.identificacaoAcesso}</Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
