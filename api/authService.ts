import ApiManager from './ApiManager';

interface User {
  userName: string;
  password: string;
}

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
