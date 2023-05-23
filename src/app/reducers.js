const initialAuthState = {
  token: null,
  user: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
