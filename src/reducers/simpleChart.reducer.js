export const dataReport = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_REPORT':
      return {
        ...state,
        [payload.dataType]: {
          ...state[payload.dataType],
          [payload.dataField]: payload.data
        }
      };
    default:
      return state;
  }
};
