import React from 'react';
import { useGetActors } from './hook/useGetActors';

interface id {
  id: number;
}

const Actors:React.FC<id> = ({id}):React.ReactElement => {
   const dta = useGetActors(id);
   const { cast } = dta.credits;
   return (
    <div>
      <img src={``} alt="" />
    </div>
  )
}

export default Actors;