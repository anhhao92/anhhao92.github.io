export const changeLanguague = value => dispatch => {
  dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: value
  });
};
