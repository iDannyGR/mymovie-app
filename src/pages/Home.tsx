import { ReactElement, useEffect } from 'react';
import { Movies } from '@/store/movieStore'

import { Search } from '@/components/Search'
import { getMovies } from '@/api/getMovie';
import { MovieGeneral } from '@/components/MovieGeneral';

const Home = ():ReactElement => {
    
  const setMovies = Movies((state) => state.setMovies);
  const allMovies = Movies((state) => state.allMovies);

  useEffect(() => {
    const data = async () => {
      const allMovies = await getMovies();
      allMovies.status === 200 ?
      setMovies(allMovies.data.results):
      console.log('error')
      };
    data();
  }, []);
return (
  <div className="m-4">
    <Search />\
    {allMovies.map((movie) => (
      <MovieGeneral movie={movie} key={movie.id} />
    ))}
  </div>
);
}

export default Home
