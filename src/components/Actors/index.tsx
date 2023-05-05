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
    <div className='flex items-center w-full mt-64'>
      { crew.map((actor) => (
        <img 
        src={`${URLIMG.URL}${actor.profile_path}`} 
        alt= {actor.name} 
        className='h-24 cursor-pointer rounded-full ml-1 '
        key={actor.credit_id}
        /> 
        <p>{actor.name}</p> 
         ))}
    </div>
  )
}

export default Actors;