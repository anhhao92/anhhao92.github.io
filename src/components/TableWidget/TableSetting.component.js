import React from 'react';
import { connect } from 'react-redux'
import BaseSetting from '../WidgetSetting/BaseSetting.component'

export default class TableSetting extends React.PureComponent {

    render(){
        return (
            <BaseSetting {...this.props}>
                <div className="col-12">Table Settting</div>
            </BaseSetting>
        )
    }
}