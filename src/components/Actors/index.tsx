import React from 'react';
import { useGetActors } from './hook/useGetActors';
import { URLIMG } from '@/models/UrlMovie'

interface id {
  id: number;
}

const Actors:React.FC<id> = ({id}):React.ReactElement => {
   console.log(id)
   const dta = useGetActors(id);
   const { crew } = dta.credits;

   return (
    <div className='flex w-full h-[800px] items-center justify-center'>
      { crew.map((actor) => (
        <img 
        src={`${URLIMG.URL}${actor.profile_path}`} 
        alt= {actor.name} 
        className='rounded-full h-20'
        /> ))}
    </div>
  )
}

export default Actors;