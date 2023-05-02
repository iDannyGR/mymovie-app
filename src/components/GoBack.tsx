import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@heroicons/react/20/solid/ArrowLeftIcon';


const GoBack = ():React.ReactElement =>{ 
    const navigate = useNavigate();
  return (
    <button
      className="absolute w-10 h-10 top-2 left-3 rounded-xl bg-green-500 bg-opacity-80 text-white"
      onClick={() => navigate(-1)}
    >
      <ArrowLeftIcon />
    </button>
  );
}
export default GoBack