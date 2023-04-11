import { ReactElement, useEffect, useState } from 'react'

import { Search } from '@/components/Search'
import { getMovies } from '@/api/getMovie';
import { MovieDetail } from '@/components/MovieDetail';
import { MovieResult } from '@/models/MovieResult';


const Home = ():ReactElement => {

  const [movies, setMovies] = useState<MovieResult>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  });
  
  useEffect(() => {
    const data = async () => {
      const allMovies = await getMovies();
      allMovies.status === 200 ?
      setMovies(allMovies.data):
      console.log('error')
      };
    data();
  }, []);
return (
  <>
    <Search />
    { movies.results.map(movie =>  <MovieDetail movie={movie} key={movie.id} />)}
  </>
);
}

export default Home