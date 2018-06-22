export const stockTicker = (state = [], action) => {
    const { type, data } = action;
    switch (type) {
        case 'LOAD_INIT_STOCK':
            return data;
        case 'UPDATE_PRICE': 
            return state.map(stock => stock.id === data.id ? { ...data } : stock);
        default:
            return state;
    }
}