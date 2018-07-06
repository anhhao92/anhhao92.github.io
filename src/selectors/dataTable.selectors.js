import { createSelector } from 'reselect';

export const getSampleData = (state, props) => {
  const data = state.dataSource;
  const dataType = props.configs.dataSource;
  const sampleData = data && data[dataType];
  return sampleData ? sampleData : null;
};

export const getColumns = (state, props) => {
  const displayColumns = [];
  props.configs.selectedColumns.forEach(col => {
    displayColumns.push({
      dataField: col,
      text: col
    });
  });
  return displayColumns;
};

export const getSelectedColumns = (state, props) =>
  props.configs.selectedColumns;

export const getDataSource = createSelector([getSampleData], data => data);

export const getDisplayedColumns = createSelector([getColumns], cols => cols);

export const getAvailableColumns = createSelector(
  [getSampleData, getSelectedColumns],
  (data, selectedColumns) =>
    data && data.length
      ? Object.keys(data[0]).filter(s => !selectedColumns.includes(s))
      : []
);
