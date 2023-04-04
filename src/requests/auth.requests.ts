import api from '../http/connect';
import { IUserAddress } from '../models/user-address.model';
import { ILoginUser, IUser } from '../models/user.model';

export const signIn = async (user: IUser, address: IUserAddress) => {
  try {
    const res = await api.post('/auth/signin', { user: user, address: address });
    return res.data;
  } catch (err: any) {
    return { err, status: err?.status ?? err.response?.status };
  }
};

export const loginRequest = async (data: ILoginUser) => {
  try {
    const res = await api.post('/auth/login', data);
    return { err: null, ...res.data };
  } catch (err: any) {
    return { err, status: err?.status ?? err.response?.status, data: null };
  }
};
