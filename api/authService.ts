import ApiManager from './ApiManager';

import { User } from '../interfaces/user';

export const signin = async ( user: User ) => {
  try {
    const response = await ApiManager('/auth/login/', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      data: user
    });

    return response.data;
  } catch ( error ) {
    throw error;
  }
};
