import {useState, useEffect} from 'react';
import { Movies } from '@/store/movieStore';
import { generalMovie, searchMovies } from '@/api/getMovie';

export const useSearch = () =>{

const [search, setSearch] = useState<string>('');
const setMovies = Movies((state) => state.setMovies);

      const data = async () => {
          const {status, data} = search.length>1 ? await searchMovies(search) : await  generalMovie()
          status === 200 ? setMovies(data.results) : console.log('error');
      };

      useEffect(() => {
        data();
      }, [search])


     return { setSearch }; 
}

