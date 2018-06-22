import React from 'react'
import { DashboardView } from './dashboard.view'
import { connect } from 'react-redux'
import { LAYOUT_TYPES, LAYOUT_STYLES } from '../../constants/LayoutType';

class Dashboard extends React.Component {
    onChangeLayout(type){
        document.querySelectorAll("#widget-wrapper > div").forEach((element, idx) => {
            if(type !== LAYOUT_TYPES.ONE_TWO_ONE_COLUMN){
                idx % 2 === 0
                ? element.className = LAYOUT_STYLES[type].oddClass
                : element.className = LAYOUT_STYLES[type].evenClass
            } else {
                idx % 3 !== 1
                ? element.className = LAYOUT_STYLES[type].oddClass
                : element.className = LAYOUT_STYLES[type].evenClass
            }
        });
    }

    render() {
        return <DashboardView dashboard={this.props.dashboard} onChangeLayout={this.onChangeLayout}/>
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

export default connect(mapStateToProps)(Dashboard)