import { create } from 'zustand';
import { Results } from '@/models/Results'

interface State {
    allMovies: Results[] 
}
interface Actions {
    setMovies : (movies:Results[]) => void
    searchMovie : (search:string) => Results[]
}

export const Movies = create<State & Actions>((set) => ({
  allMovies: [],
  setMovies: (movies) => set({ allMovies: movies }),
  searchMovie: (search) => allMovies.filter((item:Results) => item.title.includes(search))
}));
    