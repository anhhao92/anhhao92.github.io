import { createSelector } from 'reselect';

const getFirstSampleData = (state, props) => {
  const data = state.dataSource;
  const dataType = props.configs.dataSource;
  const sampleData = data && data[dataType];
  return sampleData ? sampleData[0] : {};
};

const getDataReport = (state, props) => {
  const data = state.dataReport;
  const dataType = props.configs.dataSource;
  const dataField = props.configs.groupBy;
  const sampleData = data[dataType] && data[dataType][dataField];
  return sampleData ? sampleData : null;
};

export const getReports = createSelector([getDataReport], data => data);

export const getAllFieldsFromDataSource = createSelector(
  [getFirstSampleData],
  item =>
    Object.keys(item).map(e => {
      return {
        name: e.charAt(0).toUpperCase() + e.slice(1),
        value: e
      };
    })
);
