import React from 'react';
import { URLIMG } from '@/models/UrlMovie';
import { useGetMovie } from './hook/useGetMovie';

interface id {
  id:string
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {
  
  const { movie } = useGetMovie(id);

  return (
    <div className="w-full h-[100vh]">
      <img
        src={`${URLIMG.URLXL}${movie.backdrop_path}`}
        alt=""
        className="-z-0 w-full h-[400px] object-cover shadow-xl rounded-b-3xl"
      />
      <p className="border absolute w-36 h-7 top-5 -right-11 bg-white text-lg font-extrabold text-center rotate-45">
        {movie.vote_average.toFixed(1)}
      </p>
      <div className="relative z-20 flex flex-col h-[400px] items-center mt-5">
        <h3 className="font-semibold text-2xl text-center">{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <h3 className="font-semibold text-xl mt-3">Description</h3>
        <p className="text-justify text-gray-500 m-4">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;