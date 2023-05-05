import React from 'react';
import { generalMovie } from '@/api/getMovie';
import { Results } from '@/models/Results';

export const useGetMovie = (id:number) =>{

const [movie, setMovie] = React.useState<Results>({
  adult: false,
  backdrop_path: '',
  belongs_to_collection: '',
  budget: 0,
  genres: [],
  homepage:'',
  id: 0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path:'',
  production_companies: [],
  production_countries: [],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  tagline: '',
  title: '',
  video: true,
  vote_average: 0,
  vote_count: 0,
});

React.useEffect(() => {
  const data = async () => {
    const { status, data } = await generalMovie(id);
    status === 200 ? setMovie(data) : console.log('error');
  };
  data();
}, [id]);

return { movie };
}
