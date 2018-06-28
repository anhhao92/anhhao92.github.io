import React from 'react';
import BaseSetting from '../WidgetSetting/BaseSetting.component';
import dragula from 'dragula';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { getAvailableColumns } from '../../selectors/dataTable.selectors';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import './tableSetting.css';

class TableSetting extends React.PureComponent {
  componentDidMount() {
    this.drake = dragula([
      document.getElementById('left-side'),
      document.getElementById('right-side')
    ]);
  }

  componentWillUnmount() {
    const { dispatch, widgetId, configs } = this.props;
    const selectedColumns = [];
    const selectedElements = document.querySelectorAll(
      '#right-side .column-items'
    );
    selectedElements.forEach(el => {
      selectedColumns.push(el.textContent);
    });
    this.drake.destroy();
    configs.selectedColumns = selectedColumns;
    dispatch(DashboardActionCreator.updateConfig(widgetId, configs));
  }

  render() {
    const { availableColumns, configs } = this.props;
    return (
      <BaseSetting {...this.props}>
        <div className="col-6">
          <Label for="title">Data source</Label>
          <Input type="select" name="select">
            <option value="contacts">Contacts</option>
            <option value="accounts">Users</option>
          </Input>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <Label>Columns:</Label>
              <ul id="left-side" className="columns">
                {availableColumns.map(col => (
                  <li key={col} className="column-items">
                    {col}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6">
              <Label>Selected Columns:</Label>
              <ul id="right-side" className="columns">
                {configs.selectedColumns.map(col => (
                  <li key={col} className="column-items">
                    {col}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </BaseSetting>
    );
  }
}

const mapStateToProps = (state, props) => ({
  availableColumns: getAvailableColumns(state, props)
});

export default connect(mapStateToProps)(TableSetting);
