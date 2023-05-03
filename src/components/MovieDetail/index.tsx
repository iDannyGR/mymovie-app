import React from 'react';
import { URLIMG } from '@/models/UrlMovie';
import { useGetMovie } from './hook/useGetMovie';
import GoBack from '../GoBack';
import {CalendarIcon} from '@heroicons/react/20/solid'

interface id {
  id:string
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {
  
  const { movie } = useGetMovie(id);

  return (
    <div className="relative w-full h-[100vh] overflow-x-hidden">
      <GoBack />
      <p className="z-20 absolute w-36 h-7 top-6 -right-8 bg-white text-lg font-extrabold text-center rotate-45 shadow-inner shadow-black">
        {movie.vote_average.toFixed(1)}
      </p>
      <img
        src={`${URLIMG.URLXL}${movie.backdrop_path}`}
        alt=""
        className="-z-10 w-full h-[450px] object-cover shadow-xl"
      />
      <div className="absolute z-20 -mt-10 rounded-t-3xl bg-white p-4">
        <h3 className="font-semibold text-2xl text-center mt-5">{movie.title}</h3>
        <div className='flex items-center'>
          <CalendarIcon className=" text-lime-500 h-6 w-6 m-4"/>
          <p className="">{movie.release_date}</p>
        </div>
        <p className="text-justify text-gray-500">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;