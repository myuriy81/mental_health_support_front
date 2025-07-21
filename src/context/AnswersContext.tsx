import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Тип для диагноза
export type Diagnosis = 'депресія' | 'тривога' | 'синдром' | 'птср' | 'суїцид' | '';

// Тип контекста
type AnswersContextType = {
  answers: string[];
  setAnswers: (a: string[]) => void;
  diagnosis: string;
  setDiagnosis: React.Dispatch<React.SetStateAction<Diagnosis>>;
  promptAnswers: string[];
  setPromptAnswersFromPage: (a: string[]) => void;
  resetAll: () => void;
};

// Создание контекста
const AnswersContext = createContext<AnswersContextType | undefined>(undefined);

// Провайдер
export const AnswersProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswersState] = useState<string[]>([]);
  const [diagnosis, setDiagnosisState] = useState<Diagnosis>('');
  const [promptAnswers, setPromptAnswers] = useState<string[]>([]);

  const setAnswers = (newAnswers: string[]) => setAnswersState(newAnswers);
  const setPromptAnswersFromPage = (a: string[]) => setPromptAnswers(a);

  const resetAll = () => {
    setAnswersState([]);
    setDiagnosisState('');
    setPromptAnswers([]);
  };

  return (
    <AnswersContext.Provider
      value={{
        answers,
        setAnswers,
        diagnosis,
        setDiagnosis: setDiagnosisState,
        promptAnswers,
        setPromptAnswersFromPage,
        resetAll
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

// Хук
export const useAnswers = (): AnswersContextType => {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error('useAnswers must be used within an AnswersProvider');
  }
  return context;
};
