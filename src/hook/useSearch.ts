import {useState} from 'react';
import { Movies } from '@/store/movieStore';
import { generalMovie, searchMovies } from '@/api/getMovie';



const [search, setSearch] = useState("");
const setMovies = Movies((state) => state.setMovies);

export const useSearch = () =>{

      const data = async () => {
        let getAllMovies = [];
        
        if (search) {
            getAllMovies = await searchMovies(search);

        } else{

            allMovies.status === 200 ? setMovies(allMovies.data.results) : console.log('error');
        }
      };

      return data;

}