import { CALL_API } from 'redux-api-middleware';
import { contactsRef } from '../configs/firebase';

export const fetchDataSource = type => dispatch => {
  let dataType = 'contacts';
  switch (type) {
    case 'contacts':
      dataType = 'contacts';
      break;
    default:
      dataType = 'contacts';
      break;
  }
  contactsRef.on('value', snapshot => {
    dispatch({
      type: 'FETCH_DATA_SOURCE',
      meta: dataType,
      payload: snapshot.val()
    });
  });
  // return {
  //   [CALL_API]: {
  //     endpoint: `/api/${dataType}/`,
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     types: [
  //       'REQUEST',
  //       {
  //         type: 'FETCH_DATA_SOURCE',
  //         meta: dataType
  //       },
  //       'FAILED'
  //     ],
  //     bailout: state => {
  //       return state.dataSource[dataType] === undefined ? false : true;
  //     }
  //   }
  // };
};
