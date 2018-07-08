export const AuthenticationAction = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCEED: 'LOGIN_SUCCEED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST'
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
  logoutUser: () => {
    localStorage.removeItem('token');
    return {
      type: AuthenticationAction.LOGOUT_REQUEST
    };
  }
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
          localStorage.setItem('token', result.token);
          history.push('/');
        }
      },
      error => console.log(error)
    );
};
