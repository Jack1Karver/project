export interface ILoginUser {
  id?: number;
  email: string;
  password: string;
}

export interface IUser extends ILoginUser {
  name: string;
  lastName: string;
  secondName?: string;
  avatar?: string;
  userName: string;
}

export interface IUserExtended extends IUser {
  isStaff: boolean;
  isSuperUser: boolean;
  enabled: boolean;
  rating: number;
  createdAt: string;
}

