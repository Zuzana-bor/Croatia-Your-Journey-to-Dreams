import { createContext } from 'react';
import { User, initialUser } from '../config';

export type AppState = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const initialState: AppState = {
  user: initialUser,
  setUser: () => undefined,
};

export const AppContext = createContext(initialState);
