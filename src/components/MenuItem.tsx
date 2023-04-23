import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';

import AcompanhamentoImage from '@/assets/images/acompanhamento.png';
import EntradaImage from '@/assets/images/entrada.png';
import GuarnicaoImage from '@/assets/images/guarnicao.png';
import OpacaoImage from '@/assets/images/opcao.png';
import ProteicoImage from '@/assets/images/proteico.png';
import SobremesaImage from '@/assets/images/sobremesa.png';

const imagesPath = {
  entrada: EntradaImage,
  acompanhamento: AcompanhamentoImage,
  guarnicao: GuarnicaoImage,
  opcao: OpacaoImage,
  proteico: ProteicoImage,
  sobremesa: SobremesaImage,
};

type MenuItemProps = {
  image: keyof typeof imagesPath;
  title: string;
  description: string;
};

export default function MenuItem({ image, title, description }: MenuItemProps) {
  return (
    <View className="flex-row items-center rounded border border-gray-200 bg-tertiary p-3 shadow">
      <Image className="mr-2 h-10 w-10" source={imagesPath[image]} />
      <View>
        <Text className="text-base font-bold">{title}</Text>
        <Text className="text-xs text-gray-500">{description}</Text>
      </View>
    </View>
  );
}
