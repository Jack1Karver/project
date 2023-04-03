import api from '../http/connect';
import { ICoincidence } from '../interfaces/coincidens.interface';
import { IExchangeUser } from '../interfaces/exchange.interface';

export const saveExchangeList = (coincidence: ICoincidence) => {
  api.post('/exchange', { coincidence });
};

export const getActiveExchanges = async (idUser: number) => {
  const res = await api.get(`/exchange?idUser=${idUser}&active=true`);
  return (res.data as IExchangeUser[]) ?? [];
};

export const submitExchangeRequest = async (id: number)=>{
  await api.post('/exchange/submit', {id})
}

export const saveTrackNumberRequest = async (idOffer: number, track: string)=>{
  await api.post('/exchange/track', {idOffer, track})
}

export const setReceivingRequest = async (idOffer: number)=>{
  await api.post('/exchange/receiving', {idOffer})
}