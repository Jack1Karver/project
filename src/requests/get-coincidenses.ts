import api from '../http/connect';
import { ICoincidences } from '../interfaces/coincidens.interface';


export const getCoincidences = async(userId: number) => {
  try{
    const res = await api.get(`/offer/coincidences?idUser=${userId}`);
    delete res.data.userGiver;
    return (res.data as ICoincidences) ?? null;
  }
  catch (err: any) {
    console.log(err);
    throw { err, status: err?.status ?? err.response?.status };
  }
};
