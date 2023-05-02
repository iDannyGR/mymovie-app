import React from 'react';
import { URLIMG } from '@/models/UrlMovie';
import { useGetMovie } from './hook/useGetMovie';
import GoBack from '../GoBack';

interface id {
  id:string
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {
  
  const { movie } = useGetMovie(id);

  return (
    <div className="relative w-full h-[100vh] overflow-x-hidden">
      <p className="z-20 absolute w-36 h-7 top-6 -right-8 bg-white text-lg font-extrabold text-center rotate-45 shadow-inner shadow-black">
        {movie.vote_average.toFixed(1)}
      </p>
      <img
        src={`${URLIMG.URLXL}${movie.backdrop_path}`}
        alt=""
        className="-z-10 w-full h-[450px] object-cover shadow-xl"
      />
      <div className="absolute z-20 -mt-10 flex flex-col items-center rounded-t-3xl bg-white">
        <h3 className="font-semibold text-2xl text-center">{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <h3 className="font-semibold text-xl mt-3">Description</h3>
        <p className="text-justify text-gray-500 m-4">{movie.overview}</p>
      </div>
      <GoBack />
    </div>
  );
}

export default MovieDetail;