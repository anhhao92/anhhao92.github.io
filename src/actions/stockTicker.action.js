import { CALL_API } from 'redux-api-middleware';
// import Socket from 'socket.io-client'

// const socket = Socket('/');
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

// export const disconnectWebSocker = () =>{
//     socket.disconnect();
// }

export const fetchInitStock = () => {
  // fetch(`api/stocks`)
  // .then(res => res && res.json())
  // .then(result => {
  //     // const result = data.filter(m => stocks.includes(m.code));
  //     dispatch(StockTickerActionCreator.loadInitStock(result));
  //     // register for all stocks
  //     // result.forEach(element => {
  //     //     socket.on(`stocks:${element.code}:_realtime`, newStock => {
  //     //         dispatch(StockTickerActionCreator.updateStockPrice(newStock));
  //     //     });
  //     // });

  // },
  // error => console.log(error));
  return {
    [CALL_API]: {
      endpoint: `/api/stocks`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: ['REQUEST', 'LOAD_INIT_STOCK', 'FAILED']
    }
  };
};
