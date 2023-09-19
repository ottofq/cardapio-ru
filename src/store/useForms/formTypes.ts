export type Form = {
  _id: string;
  nome: string;
  email: string;
  matricula: string;
  data_nascimento: string;
  curso: string;
  ano_ingresso: string;
  sexo: string;
  bolsista: string;
  frequencia_RU: string;
  tipo_refeicao_RU: string;
  nivel_fisico: string;
  peso_ideal: boolean;
  alergias: Alergias;
  vegano_vegetariano: string;
  adiciona_sal: boolean;
  utiliza_oleo_composto: boolean;
  consome_bebida_alcoolica: string;
  tabagista: boolean;
  patologias: Patologias;
  patologias_familia: PatologiasFamilia;
  medicamento_continuo: string;
  avaliacao_RU: AvaliacaoRU;
  melhorias_RU: MelhoriasRU;
};

export type Alergias = {
  alergia_gluten: boolean;
  intolerancia_lactose: boolean;
  proteina_leite_vaca: boolean;
  outras_alergias: string;
};

export type AvaliacaoRU = {
  aroma: Rating;
  coloracao_cardapio: Rating;
  textura_preparacao: Rating;
  sabor_preparacao: Rating;
  avaliacao_geral: Rating;
};

export type MelhoriasRU = {
  cardapio: boolean;
  melhoria_sabor_preparacao: boolean;
  opcao_vegetariana: boolean;
  estrutura_fisica: boolean;
  tempo_fila: boolean;
  preco_ticket: boolean;
  melhoria_outros: string;
};

export type Patologias = {
  doenca_cardiovascular: boolean;
  hipertensao_arterial: boolean;
  obesidade: boolean;
  dislipidemias: boolean;
  doenca_arterial_coronariana: boolean;
  diabetes: boolean;
  outras_patologias: string;
};

export type PatologiasFamilia = {
  fam_doenca_cardiovascular: boolean;
  fam_hipertensao: boolean;
  fam_obesidade: boolean;
  fam_dislipidemias: boolean;
  fam_doenca_arterial_coronariana: boolean;
  fam_diabetes: boolean;
  patologias_familia_outras: string;
};

export type Rating = 'Bom' | 'Muito bom' | 'Regular' | 'Ruim' | 'Muito ruim';
