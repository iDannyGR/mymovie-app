import MovieDetail from '@/components/MovieDetail';
import React from 'react'
import { useParams } from 'react-router-dom'
  
type id ={
  id:string 
}

const Movie = () => {

   const { id } = useParams<id>();

    return (
      <div>
        <MovieDetail id={ id ?? "0" }/>
      </div>
    );
}

export default Movie