import { create } from 'zustand';
import { Results } from '@/models/Results'

interface State {
    searchMovies: Results[] 
}
interface Actions {
    setMovies : (movies:Results[]) => void
}

export const searchMovies = create<State & Actions>((set) => ({
  searchMovies: [],
  setMovies: (movies) => set({ searchMovies: movies })
}));
    