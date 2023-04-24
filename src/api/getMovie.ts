import {  getMovieData } from '@/libs/axios';
import { moviesURL } from '@/models/UrlMovie'


 const generalMovie = async (id?: string) => {
  const getdata = id ? `/movie/${id}` : moviesURL.moviesDay;
  const response = await getMovieData.get(getdata);
  return response;
  
};

 const searchMovies = async (query:string) => {
   const response = await getMovieData.get(moviesURL.searchMovies, { params:{query} });
   return response;
 };

export {generalMovie, searchMovies}
