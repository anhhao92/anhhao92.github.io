import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
    // componentWillMount(){
    //     this.props.dispatch(initDashboard(20));
    //     this.props.dispatch(fetchContact());
    // }

    render() {
        console.log(this.props.dashboard)
        return <DashboardView dashboard={this.props.dashboard}/>
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

export default connect(mapStateToProps)(Dashboard)