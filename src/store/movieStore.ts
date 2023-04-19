import { create } from 'zustand';
import { Results } from '@/models/Results'

interface State {
    allMovies: Results[] 
}
interface Actions {
    setMovies : (movies:Results[]) => void
}

export const Movies = create<State & Actions>((set) => ({
  allMovies: [],
  setMovies: (movies) => set({ allMovies: movies })
}));
    