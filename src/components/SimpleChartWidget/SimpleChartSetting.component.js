import React from 'react';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { getAllFieldsFromDataSource } from '../../selectors/simpleChart.selectors';
import { SimpleChartSettingView } from './SimpleChartSetting.view';

class SimpleChartSetting extends React.PureComponent {
  setChartType = type => () => {
    const { dispatch, widgetId, configs } = this.props;
    configs.chartType = type;
    dispatch(DashboardActionCreator.updateConfig(widgetId, configs));
  };

  setDataSource = e => {
    const { dispatch, widgetId, configs } = this.props;
    configs.dataSource = e.target.value;
    dispatch(DashboardActionCreator.updateConfig(widgetId, configs));
  };

  setGroupByProperty = e => {
    const { dispatch, widgetId, configs } = this.props;
    configs.groupBy = e.target.value;
    dispatch(DashboardActionCreator.updateConfig(widgetId, configs));
  };

  render() {
    return (
      <SimpleChartSettingView
        {...this.props}
        setChartType={this.setChartType}
        setDataSource={this.setDataSource}
        setGroupByProperty={this.setGroupByProperty}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  groups: getAllFieldsFromDataSource(state, props)
});

export default connect(mapStateToProps)(SimpleChartSetting);
