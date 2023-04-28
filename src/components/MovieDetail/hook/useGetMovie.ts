import React from 'react';
import { generalMovie } from '@/api/getMovie';
import { Results } from '@/models/Results';

export const useGetMovie = (id:string) =>{

const [movie, setMovie] = React.useState<Results>({
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  media_type: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0
});

React.useEffect(() => {
  const data = async () => {
    const { status, data } = await generalMovie(id);
    status === 200 ? setMovie(data) : console.log('error');
  };
  data();
}, [movie]);

return { movie };
}
