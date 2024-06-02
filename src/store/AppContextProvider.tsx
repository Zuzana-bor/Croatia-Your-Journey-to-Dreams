import { ReactNode, useState } from 'react';
import { User } from '../config';
import { AppContext } from './AppContext';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
