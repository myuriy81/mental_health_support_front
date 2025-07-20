import { createContext, useContext, useState, ReactNode } from 'react';

// Определим типы для каждой страницы отдельно
export type Diagnosis = 'депресія' | 'тривога' | 'синдром' | 'птср' | 'суїцид' | '';

interface AnswersContextType {
  answers: string[]; // Массив ответов с одной страницы — Page21, Page22 или Page3
  diagnosis: Diagnosis;
  prompt: string;
  setAnswers: (newAnswers: string[]) => void;
  setDiagnosis: (newDiagnosis: Diagnosis) => void;
  setPrompt: (newPrompt: string) => void;
  resetAll: () => void;
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined);

export const AnswersProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswersState] = useState<string[]>([]);
  const [diagnosis, setDiagnosisState] = useState<Diagnosis>('');
  const [prompt, setPromptState] = useState('');

  const setAnswers = (newAnswers: string[]) => setAnswersState(newAnswers);
  const setDiagnosis = (newDiagnosis: Diagnosis) => setDiagnosisState(newDiagnosis);
  const setPrompt = (newPrompt: string) => setPromptState(newPrompt);

  const resetAll = () => {
    setAnswersState([]);
    setDiagnosisState('');
    setPromptState('');
  };

  return (
    <AnswersContext.Provider
      value={{ answers, diagnosis, prompt, setAnswers, setDiagnosis, setPrompt, resetAll }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export const useAnswers = (): AnswersContextType => {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error('useAnswers must be used within an AnswersProvider');
  }
  return context;
};
