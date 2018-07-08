export const stockTicker = (state = { stocks: [] }, action) => {
  const { type, data } = action;
  switch (type) {
    case 'FETCHING_STOCKS':
      return {
        isFetching: true,
        ...state
      };
    case 'LOAD_INIT_STOCK':
      return {
        isFetching: false,
        stocks: action.payload
      };
    case 'UPDATE_PRICE':
      return {
        ...state,
        stocks: state.stocks.map(
          stock => (stock.id === data.id ? { ...data } : stock)
        )
      };
    default:
      return state;
  }
};
