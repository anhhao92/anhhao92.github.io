import React from 'react';
import { connect } from 'react-redux';
import { fetchDataReport } from '../../actions/simpleChart.action';
import Highcharts from 'highcharts';

class SimpleChartWidget extends React.PureComponent {
  renderChart() {
    if (this.props.dataReport.length) {
      const chartOptions = {
        chart: { type: 'pie', height: this.props.isScale ? 'auto' : 300 },
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
  }

  componentWillMount() {
    const { dataSource, groupBy } = this.props.configs;
    if (!this.props.dataReport.length) {
      this.props.dispatch(fetchDataReport(dataSource, groupBy));
    }
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    return <div id="container" className="d-block mx-auto" />;
  }
}
const mapStateToProps = state => ({
  dataReport: state.dataReport
});

export default connect(mapStateToProps)(SimpleChartWidget);
