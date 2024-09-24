import ApiManager from './ApiManager';

import { User } from '../interfaces/user';

export const signin = async ( user: User ) => {
  try {
    const response = await ApiManager.post('/auth/login/', {
      "username": user.userName,
      "password": user.password
    });

    return response.data;
  } catch ( error ) {
    throw error;
  }
};
