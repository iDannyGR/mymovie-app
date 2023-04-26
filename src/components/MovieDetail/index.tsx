import React from 'react';
import { generalMovie } from '@/api/getMovie';

interface id {
  id:string
}

const MovieDetail:React.FC<id> = ({id}):React.ReactElement => {

     React.useEffect(() => {
         const data = async () => {
           const [movie, setMovie] = React.useState({});
           const { status, data } = await generalMovie(id);
           status === 200 ? setMovie(data.results) : console.log('error');
         };
         data();
     }, []);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <img src="" alt="" />
      <h3 className="font-semibold text-2xl">{movie.title}</h3>
      <p>7.05</p>
      <p>12/5/1989</p>
      <h3 className="font-semibold text-xl">Description</h3>
      <p className="text-justify text-gray-500 m-4"> c
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  );
}

export default MovieDetail;