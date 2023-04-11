import { ReactElement, useEffect, useState } from 'react'

import { Search } from '@/components/Search'
import { getMovies } from '@/api/getMovie';
import { MovieGeneral } from '@/components/MovieGeneral';
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
  <div className='m-4'>
    <Search />
    {movies.results.map((movie) => (
      <MovieGeneral movie={movie} key={movie.id} />
    ))}
  </div>
);
}

export default Home