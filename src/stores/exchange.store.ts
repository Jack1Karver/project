import { makeAutoObservable } from "mobx";
import { IExchangeList } from "../models/exchange-list.model";
import { IExchangeUser } from "../interfaces/exchange.interface";
import { getActiveExchanges } from "../requests/exchange.requests";


class ExchangeStore{

    active: IExchangeUser[] = [] 

    constructor(active: boolean, idUser: number){
        makeAutoObservable(this)
        this.setActiveExchanges(idUser)
    }

    setActiveExchanges = async(idUser: number)=>{
        this.active = await getActiveExchanges(idUser)
    }

}

export default ExchangeStore