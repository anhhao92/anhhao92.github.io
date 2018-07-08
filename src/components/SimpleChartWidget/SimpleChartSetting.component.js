import React from 'react';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { getAllFieldsFromDataSource } from '../../selectors/simpleChart.selectors';
import { SimpleChartSettingView } from './SimpleChartSetting.view';

class SimpleChartSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartType: this.props.configs.chartType || 'pie',
      dataSource: this.props.configs.dataSource || 'contacts',
      groupBy: this.props.configs.groupBy || 'title'
    };
  }

  setChartType = type => () => {
    this.setState({
      chartType: type
    });
  };

  setDataSource = e => {
    this.setState({
      dataSource: e.target.value
    });
  };

  setGroupByProperty = e => {
    this.setState({
      groupBy: e.target.value
    });
  };

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    dispatch(DashboardActionCreator.updateConfig(widgetId, this.state));
  }

  render() {
    const mergedProps = {
      ...this.props,
      configs: this.state
    };
    return (
      <SimpleChartSettingView
        {...mergedProps}
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
