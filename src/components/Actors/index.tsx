import React from 'react';
import { useGetActors } from './hook/useGetActors';
import { URLIMG } from '@/models/UrlMovie'

interface id {
  id: number;
}

const Actors:React.FC<id> = ({id}):React.ReactElement => {
   
  const dta = useGetActors(id);
   
  const { crew } = dta.credits;

   return (
     <div className="flex items-center w-full mt-64">
       {crew.map((actor) => (
         <div className='ml-5'>
           <img
             src={`${URLIMG.URL}${actor.profile_path}`}
             alt={actor.original_name}
             className="h-20 w-20 cursor-pointer rounded-full"
             key={actor.credit_id}
           />
           <p className='text-center'>{actor.name}</p>
         </div>
       ))}
     </div>
   );
}

export default Actors;