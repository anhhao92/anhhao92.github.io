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
};
