import {useState} from 'react';
import { Movies } from '@/store/movieStore';
import { generalMovie, searchMovies } from '@/api/getMovie';
import { MovieResult } from '@/models/MovieResult'

export const useSearch = () =>{

const [search, setSearch] = useState('');
const setMovies = Movies((state) => state.setMovies);

      const data = async () => {
        let getAllMovies: MovieResult = [];
        
        if (search) {
            getAllMovies = await searchMovies(search);

        } else{
            const {data, status} = await generalMovie()
            status === 200 ? setMovies(data.results) : console.log('error');
        }
      };

      return data;

}