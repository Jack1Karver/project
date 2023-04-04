import jwtDecode from 'jwt-decode';
import { makeAutoObservable } from 'mobx';
import { IUserExtended } from '../models/user.model';
import { getAuthorizedUserRequest } from '../requests/user.request';

class UserStore {
  userAuthorized: IUserExtended | null = null;

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== 'undefined') {
      this.getAuthorizedUser();
    }
  }

  getAuthorizedUser = async () => {
    const token = localStorage.getItem('Authorization')?.slice(7);
    if (token) {
      const tokenDecoded = jwtDecode(token) as {userName: string};
      const user = await getAuthorizedUserRequest(tokenDecoded.userName);
      if(user){
        this.setUserAuthorized(user);
      }
    }
  };

  setUserAuthorized = (user: IUserExtended) => {
    this.userAuthorized = user;
  };

  logout = ()=>{
    localStorage.removeItem('Authorization');
    this.userAuthorized = null;
  };
}

export default UserStore;
