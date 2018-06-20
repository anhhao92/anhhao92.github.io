export const dataReport = (state = [], action) => {
    const { type, data } = action;
    switch (type) {
        case 'FETCH_REPORT':
            return data;
        default:
            return state;
    }
}