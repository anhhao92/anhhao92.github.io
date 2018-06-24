import React from 'react'
import dragula from 'dragula';
import { connect } from 'react-redux'
import { DashboardView } from './dashboard.view'
import { LAYOUT_TYPES, LAYOUT_STYLES } from '../../constants/LayoutType';
import { DashboardActionCreator } from '../../actions/dashboard.action';

class Dashboard extends React.PureComponent {
    constructor(props){
        super(props);
        this.onChangeLayout = this.onChangeLayout.bind(this);
    }

    componentDidMount(){
        this.updateLayout(this.props.dashboard.layoutType);
    }

    componentDidUpdate(){
        const {isEdit} = this.props.dashboard;
        console.log(this.props.dashboard, this.drake)
        if(isEdit) {
            this.drake = dragula([document.getElementById('wrapper')], { direction: 'horizontal'});
        }
        else {
            this.drake && this.drake.destroy();
            this.drake = null;
        }
    }

    updateLayout(layoutType){
        const widgets = document.querySelectorAll("#wrapper > div");
        widgets.forEach((element, idx) => {
            if(layoutType !== LAYOUT_TYPES.ABA_COLUMN){
                idx % 2 === 0
                ? element.className = LAYOUT_STYLES[layoutType].oddClass
                : element.className = LAYOUT_STYLES[layoutType].evenClass
            } else {
                idx % 3 !== 1
                ? element.className = LAYOUT_STYLES[layoutType].oddClass
                : element.className = LAYOUT_STYLES[layoutType].evenClass
            }
        })
    }

    onChangeLayout(type){
        this.updateLayout(type);
        this.props.dispatch(DashboardActionCreator.changeLayout(type));
    }

    render() {
        return <DashboardView dashboard={this.props.dashboard} onChangeLayout={this.onChangeLayout}/>
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

export default connect(mapStateToProps)(Dashboard)