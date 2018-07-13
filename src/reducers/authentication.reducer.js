import { AuthenticationAction } from '../actions/auth.action';

export const auth = (state = {}, action) => {
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
        error: action.payload
      };
    case AuthenticationAction.LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        user: null
      };
    case AuthenticationAction.SAVE_RETURN_URL:
      return {
        ...state,
        returnUrl: action.payload
      };
    default:
      return state;
  }
};
