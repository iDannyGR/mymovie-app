import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { Results } from '@/models/Results'

interface State{
    token: string,
    email:string,
    itAuth: boolean,
    favoriteMovies: Results[]
}

interface Actions {
  setToken: (token: State['token'], email: State['email']) => void;
  deleteToken: () => void;
  setFavoriteMovies: (movie:Results)=>void;
  deleteFavoriteMovie: (id:Results["id"])=>void;
}

export const authStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      email: '',
      itAuth: false,
      favoriteMovies: [],
      setToken: (token, email) => set({ token, email, itAuth: true }),
      deleteToken: () => set({ token: '' }),
      setFavoriteMovies: movie => set( state =>({
        favoriteMovies: [...state.favoriteMovies, movie]
      })) ,
      deleteFavoriteMovie: id => set(state =>({ 
        favoriteMovies : state.favoriteMovies.filter(movie => movie.id !== id) 
      })),
    }),
    { name: 'token' }
  )
);
    

    