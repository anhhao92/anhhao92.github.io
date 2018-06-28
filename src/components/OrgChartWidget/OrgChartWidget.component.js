import React from 'react';
import { connect } from 'react-redux';
import { fetchDataSource } from '../../actions/dataSource.action';
import OrgChart from '../../library/chart.bundle';

import '../../library/chart.css';

class OrgChartWidget extends React.PureComponent {
  renderOrgChart() {
    const contacts = this.props.data['contacts'];
    if (contacts && !this.chart) {
      this.chart = new OrgChart(contacts);
      this.chart.initEmployeeTree('tree');
    }
  }

  componentWillMount() {
    if (!this.props.data['contacts']) {
      this.props.dispatch(fetchDataSource(this.props.configs.dataSource));
    }
  }

  componentWillUnmount() {
    this.chart = null;
  }

  componentDidUpdate() {
    this.renderOrgChart();
  }

  componentDidMount() {
    this.renderOrgChart();
  }

  render() {
    return <div id="tree" className="tree" />;
  }
}

const mapStateToProps = state => ({
  data: state.dataSource
});

export default connect(mapStateToProps)(OrgChartWidget);
