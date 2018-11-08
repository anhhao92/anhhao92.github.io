import { stocksRef } from '../configs/firebase';

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
};
