import ApiManager from './ApiManager';

export const signin = async data => {
  try {
    const response = await ApiManager('/auth/login/', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      data: data
    });

    return response;
  } catch ( error ) {
    throw new Error;
  }
};
