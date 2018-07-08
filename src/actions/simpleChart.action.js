import { CALL_API } from 'redux-api-middleware';

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

export const fetchDataReport = (source, field) => {
  const dataType = source.toLowerCase();
  const dataField = field.toLowerCase();
  return {
    [CALL_API]: {
      endpoint: `/api/reports/_countby/${dataType}/${dataField}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'REQUEST',
        {
          type: 'FETCH_REPORT',
          meta: { dataType, dataField }
        },
        'FAILED'
      ]
    }
  };
};
