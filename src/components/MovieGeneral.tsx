import React from 'react';
import { Link } from 'react-router-dom';
import { Results } from '@/models/Results';
import { URLIMG } from '@/models/UrlMovie';
import {HeartIcon}  from '@heroicons/react/24/solid';



interface Props {
  movie:Results
}

const MovieGeneral:React.FC<Props> = ({movie}): React.ReactElement => {
    
  const [liked, setLiked] = React.useState<boolean>(false);

  return (
    <div className="relative shadow-lg shadow-slate-600 rounded-2xl mb-4 top-20">
      <Link to={`/movie/${movie.id}`}>
        <img
          className="object-cover h-72 w-full rounded-2xl"
          src={`${URLIMG.URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className=" text-white w-full">
        <h5 className="absolute font-bold text-3xl text-center top-4 left-3">{movie.title}</h5>
        <p className="hidden mt-4 text-justify">{movie.overview}</p>
          <p className="absolute flex justify-center items-center rounded-2xl  bg-white w-10 h-10 right-2 bottom-3 text-black font-extrabold shadow inset">
            <span>{movie.vote_average.toFixed(1)}</span>
          </p>
        <div
          className="absolute right-4 bottom-16"
          onClick={() => {
            setLiked(!liked);
          }}
        >
          <HeartIcon className={`${liked ? 'text-white' : 'text-black'}`} />
        </div>
      </div>
    </div>
  );
 }

export default MovieGeneral;
