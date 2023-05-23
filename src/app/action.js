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
    },
  };
};

export const clearUser = () => {
  return {
    type: 'CLEAR_USER',
  };
};
