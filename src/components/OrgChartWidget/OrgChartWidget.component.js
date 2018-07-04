import React from 'react';
import { connect } from 'react-redux';
import { fetchDataSource } from '../../actions/dataSource.action';
import OrgChart from '../../library/chart.bundle';
import '../../library/chart.css';

class OrgChartWidget extends React.PureComponent {
  renderOrgChart() {
    const { configs, contacts } = this.props;
    if (contacts && configs.rootEmployeeId) {
      this.chart = new OrgChart(contacts, configs.rootEmployeeId);
      this.chart.initEmployeeTree('tree');
    }
  }

  componentWillMount() {
    if (!this.props.contacts) {
      this.props.dispatch(fetchDataSource(this.props.configs.dataSource));
    }
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
  contacts: state.dataSource.contacts
});

export default connect(mapStateToProps)(OrgChartWidget);
