import { ReactElement } from 'react';
import { MovieGeneral } from '@/components/MovieGeneral';
import { Search } from '@/components/Search';
import { Movies } from '@/store/movieStore'

const Home = ():ReactElement => {
const allMovies = Movies((state) => state.allMovies);

return (
  <div className="m-4">
    <Search />
    {allMovies.map((movie) => (
      <MovieGeneral movie={movie} key={movie.id} />
    ))}
  </div>
);
}

export default Home
