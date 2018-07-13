import { firebase, usersRef } from '../configs/firebase';

export const AuthenticationAction = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCEED: 'LOGIN_SUCCEED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  SAVE_RETURN_URL: 'SAVE_RETURN_URL'
};

export const Authentication = {
  requestLogin: user => ({
    type: AuthenticationAction.LOGIN_REQUEST,
    payload: user
  }),
  receivedLogin: auth => ({
    type: AuthenticationAction.LOGIN_SUCCEED,
    payload: auth
  }),
  loginError: error => ({
    type: AuthenticationAction.LOGIN_FAILED,
    payload: error
  }),
  logoutUser: () => ({
    type: AuthenticationAction.LOGOUT_REQUEST
  }),
  returnUrl: url => ({
    type: AuthenticationAction.SAVE_RETURN_URL,
    payload: url
  })
};

export const loginUser = (user, history) => dispatch => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  dispatch(Authentication.requestLogin(user));
  return fetch(`/api/accounts/login`, config)
    .then(res => res && res.json())
    .then(
      result => {
        if (result.error) {
          dispatch(Authentication.loginError(result));
        } else {
          dispatch(Authentication.receivedLogin(result));
        }
      },
      error => console.log(error)
    );
};

export const fetchUserInfo = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(Authentication.receivedLogin(user));
    } else {
      dispatch(Authentication.loginError());
    }
  });
};

export const saveUserInfo = (id, payload) => {
  usersRef.child(id).update({
    credential: payload.credential,
    additionalUserInfo: payload.additionalUserInfo
  });
};
