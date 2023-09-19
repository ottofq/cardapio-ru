import { create } from 'zustand';

import { initialState } from './formState';
import type { Form } from './formTypes';

type FormActions = {
  addStepData: (stepData: Partial<Form>) => void;
  addAvaliacaoData: (stepData: Partial<Form>) => void;
};

type FormState = {
  data: Form;
  actions: FormActions;
};

const useFormsStore = create<FormState>((set) => ({
  data: initialState,
  actions: {
    addStepData: (stepData) => {
      if (stepData?.avaliacao_RU) {
        set((state) => ({
          data: {
            ...state.data,
            avaliacao_RU: {
              ...state.data.avaliacao_RU,
              ...stepData.avaliacao_RU,
            },
          },
        }));
      } else {
        set((state) => ({ data: { ...state.data, ...stepData } }));
      }
    },
    addAvaliacaoData: (stepData) => {
      set((state) => ({
        data: {
          ...state.data,
          melhorias_RU: {
            ...state.data.melhorias_RU,
            ...stepData.melhorias_RU,
          },
          avaliacao_RU: {
            ...state.data.avaliacao_RU,
            ...stepData.avaliacao_RU,
          },
        },
      }));
    },
  },
}));

export const useForms = () => useFormsStore((state) => state.data);

export const useFormsActions = () => useFormsStore((state) => state.actions);
