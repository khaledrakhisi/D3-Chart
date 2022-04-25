export interface IUserData {
  product: string;
  value: number;
  color?: string;
}
export interface IUser {
  id: number;
  name: string;
  avatar: string;
  data: Array<IUserData>;
}
export type TUserContext = {
  loggedinUser: IUser;
  login: (user: IUser) => void;
  logoff: () => void;
};
