import { create } from 'zustand';

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

const useUserStore = create<State & Action>( (set) => ({
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
    user: undefined
  }))
}));

export default useUserStore;
