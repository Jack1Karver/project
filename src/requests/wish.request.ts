import api from '../http/connect';
import { IUserAddress } from '../models/user-address.model';


export const setWish = async (idUser: number, categories: string[], address: IUserAddress, useDefault: boolean) => {
  try{
    await api.post('/wish', { idUser, categories, address, useDefault });
  }catch (err: any) {
    return { err, status: err?.status ?? err.response?.status };
  }
};
