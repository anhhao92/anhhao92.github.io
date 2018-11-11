import * as actionType from '../constants/ActionTypes';

const initState = {};

export const exchangeRate = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.GET_EXCHANGE_RATE:
      return {
        ...state,
        exchangeRates: payload
      };
    default:
      return state;
  }
};
