import { AuthenticationAction } from '../actions/auth.action';

export const auth = (
  state = {
    isAuthenticated: localStorage.getItem('token') ? true : false
  },
  action
) => {
  switch (action.type) {
    case AuthenticationAction.LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        error: null
      };
    case AuthenticationAction.LOGIN_SUCCEED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    case AuthenticationAction.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
