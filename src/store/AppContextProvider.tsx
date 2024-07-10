import { ReactNode, useState } from 'react';
import {
  FormAnswersCalculator,
  User,
  initialFormAnswersCalculator,
} from '../config';
import { AppContext } from './AppContext';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [formAnswersCalculator, setFormAnswersCalculator] =
    useState<FormAnswersCalculator>(initialFormAnswersCalculator);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        formAnswersCalculator,
        setFormAnswersCalculator,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
