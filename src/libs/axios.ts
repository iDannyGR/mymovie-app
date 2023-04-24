import axios from 'axios';

const API = 'c378e61dad694db6110bd4e337a3fbeb';
const UrlApi: Array<string> = [
   "https://api.themoviedb.org/3/",
   "https://reqres.in/api"];


const getMovieData =  axios.create({
        baseURL:UrlApi[0],
    params: {
    api_key:API
  }
})

const getUserData = axios.create({
  baseURL: UrlApi[1]
});

export { getMovieData, getUserData }


// 'c378e61dad694db6110bd4e337a3fbeb'