import * as actionType from '../constants/ActionTypes';

export const changeLanguague = value => dispatch => {
  dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: value
  });
};

export const fetchExchangeRate = () => dispatch => {
  return fetch(
    'https://us-central1-dashboard-64a35.cloudfunctions.net/getExchanceRate'
  )
    .then(res => res.json())
    .then(payload => {
      dispatch({
        type: actionType.GET_EXCHANGE_RATE,
        payload
      });
    });
};
