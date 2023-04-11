import { FC, ReactElement } from 'react';
import { Results } from '@/models/Results';

const IMG: string = 'https://image.tmdb.org/t/p/w300';

interface Props {
  movie:Results
}

const MovieGeneral:FC<Props> = ({movie}): ReactElement => {
  return (
    <div className="relative shadow-lg shadow-slate-600 rounded-2xl mb-4">
      <img
        className="object-cover h-72 w-full rounded-2xl"
        src={`${IMG}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className=" text-white w-full">
        <h5 className="absolute font-bold text-3xl text-center top-4 left-3">{movie.title}</h5>
        <p className="hidden mt-4 text-justify">{movie.overview}</p>
        <div className="absolute flex justify-center items-center rounded-full w-16 h-16 right-1 bottom-1 border-b-4">
          <p className="rounded-full flex justify-center items-center  bg-white w-12 h-12 text-black font-extrabold">
            <span>{ movie.vote_average.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </div>
  );
 }

export default MovieGeneral;
