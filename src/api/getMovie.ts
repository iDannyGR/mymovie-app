import { UrlApi, getData } from '@/libs/axios';
import { MovieResult } from '@/models/MovieResult'

const API = 'c378e61dad694db6110bd4e337a3fbeb';

const petition = getData(UrlApi[0], API);

export const getMovies = async (id?: string) => {

  const getdata = id ? `/movie/${id}` : '/trending/movie/day';
  const response = await petition.get(getdata);
  return response;
  
};