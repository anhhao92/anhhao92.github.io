import { reportsRef } from '../configs/firebase';

export const SimpleChartAction = {
  FETCH_REPORT: 'FETCH_REPORT'
};

export const SimpleChartActionCreator = {
  fetchDataReport: (dataField, dataType, data) => {
    return {
      type: SimpleChartAction.FETCH_REPORT,
      payload: { dataField, dataType, data }
    };
  }
};

export const fetchDataReport = (source, field) => dispatch => {
  const dataType = source.toLowerCase();
  const dataField = field.toLowerCase();
  reportsRef.child(dataField).on('value', snapshot => {
    dispatch({
      type: 'FETCH_REPORT',
      meta: { dataType, dataField },
      payload: snapshot.val()
    });
  });
};
