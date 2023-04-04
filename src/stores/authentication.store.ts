import { makeAutoObservable } from 'mobx';
import { IUser } from '../models/user.model';


class AuthorizationStore {
  user: IUser = {
    email: '',
    secondName: '',
    name: '',
    lastName: '',
    password: '',
    userName: '',
  };

  constructor(){
    makeAutoObservable(this);
  }

  getToken = ()=>{
    if(typeof window !== 'undefined'){
      return localStorage.getItem('Authorization');
    }
  };
}

export default AuthorizationStore;