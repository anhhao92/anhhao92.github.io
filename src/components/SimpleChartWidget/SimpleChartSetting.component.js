import React from 'react';
import BaseSetting from '../WidgetSetting/BaseSetting.component';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { Input, Label } from 'reactstrap';
import { FaPieChart, FaLineChart, FaBarChart } from 'react-icons/lib/fa';
import { getAllFieldsFromDataSource } from '../../selectors/simpleChart.selectors';

import './simpleChart.css';

class SimpleChartSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartType: props.configs.chartType,
      dataSource: props.configs.dataSource,
      groupBy: props.configs.groupBy
    };
  }

  setChartType = type => () => {
    this.setState({
      ...this.state,
      chartType: type
    });
  };

  setDataSource = e => {
    this.setState({
      ...this.state,
      dataSource: e.target.value
    });
  };

  setGroupByProperty = e => {
    this.setState({
      ...this.state,
      groupBy: e.target.value
    });
  };

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    console.log(this.state);
    dispatch(DashboardActionCreator.updateConfig(widgetId, this.state));
  }

  render() {
    console.log(this.props);

    return (
      <BaseSetting {...this.props}>
        <div className="col-12 d-flex justify-content-center">
          <span
            onClick={this.setChartType('pie')}
            className={
              this.state.chartType === 'pie'
                ? 'chart-type active'
                : 'chart-type'
            }
          >
            <FaPieChart size={40} />
          </span>
          <span
            onClick={this.setChartType('line')}
            className={
              this.state.chartType === 'line'
                ? 'chart-type active'
                : 'chart-type'
            }
          >
            <FaLineChart size={40} />
          </span>
          <span
            onClick={this.setChartType('bar')}
            className={
              this.state.chartType === 'bar'
                ? 'chart-type active'
                : 'chart-type'
            }
          >
            <FaBarChart size={40} />
          </span>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <Label>Data source</Label>
              <Input
                type="select"
                name="select"
                defaultValue={this.state.dataSource}
                onChange={this.setDataSource}
              >
                <option value="contacts">Contacts</option>
                <option value="accounts">Users</option>
              </Input>
            </div>
            <div className="col-6">
              <Label>Group by</Label>
              <Input
                type="select"
                name="select"
                defaultValue={this.state.groupBy}
                onChange={this.setGroupByProperty}
              >
                {this.props.groups.map(e => (
                  <option key={e.value} value={e.value}>
                    {e.name}
                  </option>
                ))}
              </Input>
            </div>
          </div>
        </div>
      </BaseSetting>
    );
  }
}

const mapStateToProps = (state, props) => ({
  groups: getAllFieldsFromDataSource(state, props)
});

export default connect(mapStateToProps)(SimpleChartSetting);

//getAllFieldsFromDataSource
