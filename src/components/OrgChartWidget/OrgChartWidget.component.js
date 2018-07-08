import React from 'react';
import { connect } from 'react-redux';
import { fetchDataSource } from '../../actions/dataSource.action';
import OrgChart from '../../library/chart.bundle';
import '../../library/chart.css';

class OrgChartWidget extends React.PureComponent {
  renderOrgChart() {
    const { configs, contacts, widgetId } = this.props;
    if (contacts && configs.rootEmployeeId) {
      this.chart = new OrgChart(contacts, configs.rootEmployeeId);
      this.chart.initEmployeeTree('tree_' + widgetId);
    }
  }

  componentWillMount() {
    if (!this.props.contacts) {
      this.props.dispatch(fetchDataSource());
    }
  }

  componentDidUpdate() {
    this.renderOrgChart();
  }

  componentDidMount() {
    this.renderOrgChart();
  }

  render() {
    const { widgetId, isScale } = this.props;
    return (
      <div
        id={'tree_' + widgetId}
        className={isScale ? 'no-scale tree' : 'scale tree'}
      />
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.dataSource.contacts
});

export default connect(mapStateToProps)(OrgChartWidget);
