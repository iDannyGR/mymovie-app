import React from 'react';
import { generalMovie } from '@/api/getMovie';
import { Results } from '@/models/Results'
import { URLIMG } from '@/models/UrlMovie';

interface id {
  id:string
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {
  
  const [movie, setMovie] = React.useState<Results>({});

     React.useEffect(() => {
         const data = async () => {
           const { status, data } = await generalMovie(id);
           status === 200 ? setMovie(data) : console.log('error');
         };
         data();
     }, [id]);

  return (
    <div className="w-full h-[100vh]">
      <img
        src={`${URLIMG.URLXL}${movie.backdrop_path}`}
        alt=""
        className="-z-0 w-full h-[400px] object-cover shadow-xl rounded-b-3xl"
      />
      <p className="absolute top-0 right-0 w-16 h-10 bg-black text-white">{movie.vote_average}</p>
      <div className="relative z-20 flex flex-col h-[400px] items-center mt-5">
        <h3 className="font-semibold text-2xl text-center">
          {movie.title}
        </h3>
        <p>Release Date: {movie.release_date}</p>
        <h3 className="font-semibold text-xl mt-3">Description</h3>
        <p className="text-justify text-gray-500 m-4">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;