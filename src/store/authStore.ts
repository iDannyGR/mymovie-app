import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface State{
    token: string,
    email:string
}

interface Actions {
    setToken: ( token:State['token'], email:State['email'] ) => void,
    deleteToken: () => void
}

export const authStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      email: '',
      setToken: (token, email) => set({token,email}),
      deleteToken: () => set({ token: '' })
    }),
    { name: 'token' }
  )
);
    

    