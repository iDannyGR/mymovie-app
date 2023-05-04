import React from 'react';
import { actorsCredits } from '@/api/getMovie';
import { Credits } from '@/models/Credits';

export const useGetActors = (id: number) => {
  
  const [credits, setCredits] = React.useState<Credits>({
    cast:[],
    crew:[] ,
    id:0
  });

  React.useEffect(() => {
    const data = async () => {
      const { status, data } = await actorsCredits(id);
      status === 200 ? setCredits(data) : console.log('error');
    };
    data();
  }, []);

  return { credits };
};
