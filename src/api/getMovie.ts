import {  getMovieData } from '@/libs/axios';
import { moviesURL } from '@/models/UrlMovie'


 const generalMovie = async (id?: number) => {
  const getdata = id ? `/movie/${id}` : moviesURL.moviesDay;
  const response = await getMovieData.get(getdata);
  return response;
  
};

 const searchMovies = async (query:string) => {
   const response = await getMovieData.get(moviesURL.searchMovies, { params:{query} });
   return response;
 };

 const actorsCredits = async (id:number) => {
  const getdata =`${moviesURL.movie}${id}/credits`;
   const response = await getMovieData.get(getdata);
   return response;
 };

export {generalMovie, searchMovies, actorsCredits}
