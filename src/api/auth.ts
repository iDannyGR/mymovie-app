import axios from 'axios';
// import { authStore } from '@/store/authStore';


export const loginRequest = async(email:string, password:string) =>{
  return axios.post('https://reqres.in/api/login', {
    email,
    password
  });
} 



// export const UrlApi: string = 'https://api.themoviedb.org/3/';
// export const api = axios.create({
//   baseURL: UrlApi,
//   params: {
//     api_key: 'c378e61dad694db6110bd4e337a3fbeb'
//   }
// });
