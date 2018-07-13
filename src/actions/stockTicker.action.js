import { CALL_API } from 'redux-api-middleware';
import { stocksRef } from '../configs/firebase';

import Socket from 'socket.io-client';

export const StockTickerAction = {
  LOAD_INIT_STOCK: 'LOAD_INIT_STOCK',
  UPDATE_PRICE: 'UPDATE_PRICE'
};

export const StockTickerActionCreator = {
  loadInitStock: stocks => {
    return {
      type: StockTickerAction.LOAD_INIT_STOCK,
      data: stocks
    };
  },
  updateStockPrice: stock => {
    return {
      type: StockTickerAction.UPDATE_PRICE,
      data: stock
    };
  }
};

export const fetchInitStock = () => dispatch => {
  stocksRef.on('value', snapshot => {
    dispatch({
      type: 'LOAD_INIT_STOCK',
      payload: snapshot.val()
    });
  });

  // dispatch({
  //   [CALL_API]: {
  //     endpoint: `/api/stocks`,
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     types: [
  //       'FETCHING_STOCKS',
  //       {
  //         type: 'LOAD_INIT_STOCK',
  //         payload: (state, action, res) =>
  //           res.json().then(stocks => {
  //             stocks.forEach(stock => {
  //               socket.on(`stocks:${stock.code}:_realtime`, newStock => {
  //                 dispatch(StockTickerActionCreator.updateStockPrice(newStock));
  //               });
  //             });
  //             return stocks;
  //           })
  //       },
  //       'FAILED'
  //     ],
  //     bailout: state => {
  //       return state.stockTicker.isFetching ||
  //         state.stockTicker.stocks.length !== 0
  //         ? true
  //         : false;
  //     }
  //   }
  // });
};
