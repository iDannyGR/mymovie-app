import axios from 'axios';

const UrlApi: Array<string> = [
  URL1:  "https://api.themoviedb.org/3/",
  URL2:  "https://reqres.in/api/login"];

 const getData = (url:string) => {
    const api = axios.create({
        baseURL: url,
    params: {
    api_key: 'c378e61dad694db6110bd4e337a3fbeb'
  }
})
};

export {getData, UrlApi}