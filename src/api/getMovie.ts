import { UrlApi, getData } from '@/libs/axios';
const API = 'c378e61dad694db6110bd4e337a3fbeb';
const petition = getData(UrlApi[0], API);

 const generalMovie = async (id?: string) => {
  const getdata = id ? `/movie/${id}` : '/trending/movie/day';
  const response = await petition.get(getdata);
  return response;
  
};

 const searchMovies = async (search:string) => {
   const response = await petition.get(query:search);
   return response;
 };

export {generalMovie, searchMovies}
