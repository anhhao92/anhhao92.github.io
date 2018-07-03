import React from 'react';
import { connect } from 'react-redux';
import { fetchDataReport } from '../../actions/simpleChart.action';
import { getReports } from '../../selectors/simpleChart.selectors';
import Highcharts from 'highcharts';

class SimpleChartWidget extends React.PureComponent {
  renderChart() {
    const { configs } = this.props;
    const chartOptions = {
      chart: {
        type: configs.chartType,
        height: this.props.isScale ? 'auto' : 300
      },
      title: { text: null },
      plotOptions: {
        pie: {
          cursor: 'pointer',
          dataLabels: { enabled: false },
          showInLegend: true
        }
      },
      series: [
        {
          name: 'Total',
          data: this.props.dataReport
        }
      ]
    };
    this.highChart = Highcharts.chart('container', chartOptions);
  }

  componentWillMount() {
    const { configs, dataReport } = this.props;
    if (!dataReport) {
      this.props.dispatch(fetchDataReport(configs.dataSource, configs.groupBy));
    }
  }

  componentDidMount() {
    const { dataReport } = this.props;
    if (dataReport) {
      this.renderChart();
    }
  }

  componentDidUpdate() {
    const { configs, dataReport, dispatch } = this.props;
    if (!dataReport) {
      dispatch(fetchDataReport(configs.dataSource, configs.groupBy));
    } else {
      this.renderChart();
    }
  }

  render() {
    return <div id="container" className="d-block mx-auto" />;
  }
}
const mapStateToProps = (state, props) => ({
  dataReport: getReports(state, props)
});

export default connect(mapStateToProps)(SimpleChartWidget);
