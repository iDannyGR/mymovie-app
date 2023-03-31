import { UrlApi, getData} from '@/libs/axios'

const  get = getData(UrlApi[1]);
console.log(get)
export const loginRequest = async (email:string, password:string) => {
  const response = await get.post('/login',{
      email, password
    })
console.log(response)
const { data:{token}, status } = response;
return {token, status}
}



// export const UrlApi: string = 'https://api.themoviedb.org/3/';
// export const api = axios.create({
//   baseURL: UrlApi,
//   params: {
//     api_key: 'c378e61dad694db6110bd4e337a3fbeb'
//   }
// });
