export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: {
      id: user.uid,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      postalCode: user.postalCode
    },
  };
};

export const clearUser = () => {
  return {
    type: 'CLEAR_USER',
  };
};
