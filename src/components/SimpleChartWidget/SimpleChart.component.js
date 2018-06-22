import React from 'react';
import { connect } from 'react-redux';
import { fetchDataReport } from '../../actions/simpleChart.action';
import Highcharts from 'highcharts';

class SimpleChartWidget extends React.PureComponent {
    
    componentWillMount(){
        const {dataSource, groupBy} = this.props.configs;
        if(!this.props.dataReport.length){
            this.props.dispatch(fetchDataReport(dataSource, groupBy))
        }
    }

    componentDidUpdate(){
        const chartOptions = {
            chart: { type: 'pie', height: 300 },
            title: { text: null },
            plotOptions: {
                pie: {
                    cursor: 'pointer',
                    dataLabels: { enabled: false },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Total',
                data: this.props.dataReport
            }]
        }
        Highcharts.chart('container', chartOptions);
    }

    render(){
        return (<div id="container" />)
    }
}
const mapStateToProps = state => ({
    dataReport: state.dataReport
})

export default connect(mapStateToProps)(SimpleChartWidget)