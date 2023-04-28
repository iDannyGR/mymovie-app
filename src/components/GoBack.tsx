import React from 'react';
import { useNavigate } from 'react-router-dom';


const GoBack = ():React.ReactElement =>{ 
    const navigate = useNavigate();
  return (
    <div className='absolute w-10 h-10 rounded-full bg-black text-white'
    onClick={()=> navigate(-1)}>
            
    </div>
  );
}
export default GoBack