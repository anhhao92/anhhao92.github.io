import React from 'react'
import { connect } from 'react-redux'
import OrgChart from '../../library/chart.bundle'
import '../../library/chart.css'

class OrgChartWidget extends React.PureComponent {
    
    componentDidUpdate(){
        const contacts = this.props.data["contacts"];
        const chart = new OrgChart(contacts);
        chart.initEmployeeTree('tree');
    }

    render(){
        return (<div id="tree" className="tree"></div>)
    }
}

const mapStateToProps = state => ({
    data: state.dataSource
})

export default connect(mapStateToProps)(OrgChartWidget)