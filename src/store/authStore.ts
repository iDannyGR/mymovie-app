import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { Results } from '@/models/Results'

interface State{
    token: string,
    email:string,
    itAuth: boolean,
    favoriteMovie?: Results[]
}

interface Actions {
  setToken: (token: State['token'], email: State['email']) => void;
  deleteToken: () => void;
  setFavoriteMovie: (movie:Results)=>void;
}

export const authStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      email: '',
      itAuth: false,
      favoriteMovies: [],
      setToken: (token, email) => set({token,email, itAuth: true, favoriteMovie:[]}),
      deleteToken: () => set({ token: '' }),
      setFavoriteMovie: (movie) => set({ favoriteMovies: [...favoriteMovies, movie] }),
    }),
    { name: 'token' }
  )
);
    

    