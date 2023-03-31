import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface State{
    token: string,
    email:string,
    itAuth: boolean
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
      itAuth: false,
      setToken: (token, email) => set({token,email, itAuth: true}),
      deleteToken: () => set({ token: '' })
    }),
    { name: 'token' }
  )
);
    

    