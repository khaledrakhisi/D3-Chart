import React from "react";

import { IUser, TUserContext } from "../@types/user";
import { liqidUser } from "../data/mock-user";

export const UserContext = React.createContext<TUserContext | null>(null);

interface IAuthProviderProps {
  children?: React.ReactNode;
}
const AuthProvider: React.FunctionComponent<IAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<IUser | null>(liqidUser);
  return (
    <UserContext.Provider
      value={{
        loggedinUser: user!,
        login: setUser,
        logoff: () => {
          setUser(null);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
