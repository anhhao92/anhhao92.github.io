export const dataReport = (state = [], action) => {
  const { type, meta, payload } = action;
  switch (type) {
    case 'FETCH_REPORT':
      return {
        ...state,
        [meta.dataType]: {
          ...state[meta.dataType],
          [meta.dataField]: Object.keys(payload).map(key => ({
            name: key,
            y: payload[key]
          }))
        }
      };
    default:
      return state;
  }
};
