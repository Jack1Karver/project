import { makeAutoObservable } from 'mobx';
import { IExchangeUser } from '../interfaces/exchange.interface';
import { getActiveExchanges } from '../requests/exchange.requests';


class ExchangeStore{

  exchanges: IExchangeUser[] = []; 

  constructor(active: boolean, idUser: number){
    makeAutoObservable(this);
    this.setActiveExchanges(idUser);
  }

  setActiveExchanges = async(idUser: number)=>{
    this.exchanges = await getActiveExchanges(idUser);
  };

}

export default ExchangeStore;