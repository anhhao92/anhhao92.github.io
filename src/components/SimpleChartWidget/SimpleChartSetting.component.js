import React from 'react'
import BaseSetting from '../WidgetSetting/BaseSetting.component'
import { connect } from 'react-redux'
import { DashboardActionCreator } from '../../actions/dashboard.action'
import { Input, Label } from 'reactstrap'
import { FaPieChart, FaLineChart, FaBarChart } from 'react-icons/lib/fa'
import './simpleChart.css'

class SimpleChartSetting extends React.PureComponent {
    componentWillMount(){
        // console.log(this.props)
    }

    render(){
        const {configs} = this.props;
        return (
            <BaseSetting {...this.props}>
                <div className="col-12 d-flex justify-content-center">
                    <span className={configs.chartType === 'pie' ? "chart-type active" : "chart-type"}>
                        <FaPieChart size={40}/>
                    </span>
                    <span className={configs.chartType === 'line' ? "chart-type active" : "chart-type"}>
                        <FaLineChart size={40}/>
                    </span>
                    <span className={configs.chartType === 'bar' ? "chart-type active" : "chart-type"}>
                        <FaBarChart size={40}/>
                    </span>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <Label>Data source</Label>
                            <Input type="select" name="select">
                                <option value="contacts">Contacts</option>
                                <option value="accounts">Users</option>
                            </Input>
                        </div>
                        <div className="col-6">
                            <Label>Group by</Label>
                            <Input type="select" name="select">
                                <option value="title">Title</option>
                                <option value="department">Department</option>
                            </Input>
                        </div>
                    </div>
                </div>
            </BaseSetting>
        )
    }
}
export default connect()(SimpleChartSetting)