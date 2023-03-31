import axios from 'axios';


const UrlApi: Array<string> = [
   "https://api.themoviedb.org/3/",
   "https://reqres.in/api"];

const getData = (baseURL:string, api_key?:string) => {
    return axios.create({
        baseURL,
    params: {
    api_key 
  }
})
};

export {getData, UrlApi}


// 'c378e61dad694db6110bd4e337a3fbeb'