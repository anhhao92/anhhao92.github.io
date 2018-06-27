import React from 'react';
import { connect } from 'react-redux'
import { Input, Label } from 'reactstrap';
import BaseSetting from '../WidgetSetting/BaseSetting.component'

export default class TableSetting extends React.PureComponent {

    getAvailableColumns(){
        console.log(this.props)
    }

    render(){
        return (
            <BaseSetting {...this.props}>
                <div className="col-6">
                        <Label for="title">Data source</Label>
                        <Input type="select" name="select">
                            <option value="contacts">Contact</option>
                            <option value="accounts">User</option>
                        </Input>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <Label >Columns:</Label>
                        </div>
                        <div className="col-6">
                            <Label>Selected Columns:</Label>
                        </div>                   
                    </div>
                </div>
            </BaseSetting>
        )
    }
}