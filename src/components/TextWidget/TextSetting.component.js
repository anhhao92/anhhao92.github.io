import React from 'react';
import { connect } from 'react-redux'
import BaseSetting from '../WidgetSetting/BaseSetting.component'

export default class TextSetting extends React.PureComponent {

    render(){

        return (
            <BaseSetting {...this.props}>
                <div className="col-12">Text Settting</div>
            </BaseSetting>
        )
    }
}