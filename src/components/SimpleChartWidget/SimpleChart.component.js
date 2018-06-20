import React from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import HC_map from 'highcharts/modules/map'

HC_map(Highcharts)

export default class SimpleChartWidget extends React.PureComponent {

    render(){
        const options = {
            series: [{
              data: [1, 2, 3]
            }]
          }
        return (
            <HighchartsReact
                highcharts={Highcharts}
                // constructorType={'chart'}
                options={options}
          />
        )
    }
}
