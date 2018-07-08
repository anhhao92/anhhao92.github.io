import React from 'react';
import dragula from 'dragula';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { getAvailableColumns } from '../../selectors/dataTable.selectors';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import './tableSetting.css';

class TableSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.configs.dataSource || 'contacts'
    };
  }

  setDataSource = e => {
    this.setState({
      dataSource: e.target.value
    });
  };

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
      <div className="row">
        <div className="col-6">
          <Label for="title">Data source</Label>
          <Input
            type="select"
            defaultValue={this.state.dataSource}
            onChange={this.setDataSource}
          >
            <option value="contacts">Contacts</option>
            <option value="accounts">Accounts</option>
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
                {configs.selectedColumns &&
                  configs.selectedColumns.map(col => (
                    <li key={col} className="column-items">
                      {col}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  availableColumns: getAvailableColumns(state, props)
});

export default connect(mapStateToProps)(TableSetting);
