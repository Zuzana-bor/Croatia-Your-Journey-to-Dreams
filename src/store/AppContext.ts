import { createContext } from 'react';
import {
  FormAnswersCalculator,
  User,
  initialFormAnswersCalculator,
  initialUser,
} from '../config';

export type AppState = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  formAnswersCalculator: FormAnswersCalculator;
  setFormAnswersCalculator: React.Dispatch<
    React.SetStateAction<FormAnswersCalculator>
  >;
};

export const initialState: AppState = {
  user: initialUser,
  setUser: () => undefined,
  formAnswersCalculator: initialFormAnswersCalculator,
  setFormAnswersCalculator: () => undefined,
};

export const AppContext = createContext(initialState);
