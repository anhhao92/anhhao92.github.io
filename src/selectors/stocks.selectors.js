import { createSelector } from 'reselect';

const getVisibleStocks = (state, props) => {
  const visibleStocks = props.configs.codes;
  const stocks = state.stockTicker.stocks;
  return stocks
    ? stocks.filter(stock => visibleStocks.includes(stock.code))
    : [];
};

export const getStocksTickerState = createSelector(
  [getVisibleStocks],
  stocks => stocks
);
