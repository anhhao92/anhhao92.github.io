import { CALL_API } from 'redux-api-middleware';

export const fetchDataSource = type => {
  let dataType = 'contacts';
  switch (type) {
    case 'contacts':
      dataType = 'contacts';
      break;
    default:
      dataType = 'contacts';
      break;
  }

  return {
    [CALL_API]: {
      endpoint: `/api/${dataType}/`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'REQUEST',
        {
          type: 'FETCH_DATA_SOURCE',
          meta: dataType
        },
        'FAILED'
      ]
    }
  };
};
