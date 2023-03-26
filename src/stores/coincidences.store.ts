import { makeAutoObservable } from "mobx";
import { ICoincidences } from "../interfaces/coincidens.interface";
import { getCoincidences } from "../requests/get-coincidenses";


export class CoincidencesStore{
    
    coincidences: ICoincidences|null = null

    constructor(idUser?: number){
        makeAutoObservable(this);
        if(idUser){
        this.setCoencidences(idUser)
        }
    }

    setCoencidences = async (idUser: number)=>{
        this.coincidences = await getCoincidences(idUser)
    }
}