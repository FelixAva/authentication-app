import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { User } from '../interfaces/user';

type State = {
  token: string;
  user: User;
}

type Action = {
  updateToken: ( token: State['token'] ) => void;
  deleteToken: () => void;

  updateUser: ( user: State['user'] ) => void;
  deleteUser: () => void;
}

const useUserStore = create(
  persist<State & Action>(
    (set) => ({
      token: '',
      user: undefined,

      updateToken: ( token ) => set(() => ({
        token: token
      })),
      deleteToken: () => set(() => ({
        token: ''
      })),

      updateUser: ( user ) => set(() => ({
        user: user
      })),
      deleteUser: () => set(() => ({
        token: undefined,
        user: undefined
      }))
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useUserStore;
