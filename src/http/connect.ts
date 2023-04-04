import axios from 'axios';
import AuthorizationStore from '../stores/authentication.store';

const { getToken } = new AuthorizationStore();

const api = axios.create({
  baseURL: 'http://localhost:4001'
});

if(typeof window !== 'undefined'){
  api.defaults.headers.common['Authorization'] = getToken(); 
}


export default api;