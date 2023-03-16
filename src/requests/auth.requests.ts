import api from '../http/connect';
import { ILoginUser, IUser } from '../models/user.model';

export const signIn = async (user: IUser) => {
  try {
    const res = await api.post('/auth/signin', user);
    return res.data;
  } catch (err: any) {
    return { err, status: err?.status ?? err.response?.status };
  }
};

export const loginRequest = async(data: ILoginUser):Promise<{token: string}|null>=>{
    const res = await api.post('/auth/login', data);

    return res.data as {token: string} ?? null
}
