import React from 'react';
import { URLIMG } from '@/models/UrlMovie';
import { useGetMovie } from './hook/useGetMovie';
import GoBack from '../GoBack';
import { CalendarIcon } from '@heroicons/react/20/solid'; 
import { ClockIcon } from '@heroicons/react/20/solid'; 
import { Results } from '@/models/Results'; 
import Actors from '../Actors';

interface id {
  id:Results['id']
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {
  
  const { movie } = useGetMovie(id);
  
  return (
    <div className="w-full h-[100vh] overflow-x-hidden">
      <GoBack />
      <p className="z-20 absolute w-36 h-7 top-6 -right-8 bg-white text-lg font-extrabold text-center rotate-45 shadow-inner shadow-black">
        {movie.vote_average.toFixed(1)}
      </p>
      <img
        src={`${URLIMG.URLXL}${movie.backdrop_path}`}
        alt=""
        className="w-full h-[350px] object-cover shadow-xl"
      />
      <div className="absolute -mt-10 rounded-t-3xl bg-white p-4">
        <h3 className="font-semibold text-2xl text-center">{movie.title}</h3>
        <div className="flex items-center mt-3">
          <CalendarIcon className=" text-lime-500 h-6 w-6 mr-3" />
          <p className="">{movie.release_date}</p>
        </div>
        <div className="flex items-center mt-3">
          <ClockIcon className=" h-6 w-6 text-lime-500 mr-3" />
          <p>
            {Math.floor(movie.runtime / 60)} : {movie.runtime % 60} hours
          </p>
        </div>
        <p className="text-justify text-gray-500 mt-6">{movie.overview}</p>
      </div>
      <Actors id={movie.id}/>
    </div>
  );
};

export default MovieDetail;