import React from 'react';
import { generalMovie } from '@/api/getMovie';
import { Results } from '@/models/Results'
import { URLIMG } from '@/models/UrlMovie';

interface id {
  id:string
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {
  
  const [movie, setMovie] = React.useState<Results>({
  });

     React.useEffect(() => {
         const data = async () => {
           const { status, data } = await generalMovie(id);
           status === 200 ? setMovie(data) : console.log('error');
         };
         data();
     }, [id]);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <img src={`${URLIMG.URL}${movie.backdrop_path}`} alt="" />
      <h3 className="font-semibold text-2xl">{movie.title}</h3>
      <p>{movie.vote_average}</p>
      <p>{movie.release_date}</p>
      <h3 className="font-semibold text-xl">Description</h3>
      <p className="text-justify text-gray-500 m-4">{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;