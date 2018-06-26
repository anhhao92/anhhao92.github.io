import React from 'react';
import { connect } from 'react-redux'
import { Input, Label, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './baseSetting.css'

export default class BaseSetting extends React.PureComponent {
    render(){
        return (
            <div className="setting-container">
                <Label for="title">Widget Title</Label>
                <Input type="email" name="email" id="title" placeholder="New Widget" autoComplete="off" defaultValue={this.props.title}/>
                <div className="row">
                    <div className="col-4">
                        <Label for="title">Widget Type</Label>
                        <Input type="select" name="select" defaultValue={this.props.widgetType}>
                            <option value="TEXT_WIDGET">Text</option>
                            <option value="DATATABLE_WIDGET">Datatable</option>
                            <option value="TODOLIST_WIDGET">Todo List</option>
                            <option value="SIMPLECHART_WIDGET">Simple Chart</option>
                            <option value="STOCK_TICKER_WIDGET">Stock Ticker</option>
                            <option value="ORG_CHART_WIDGET">Org Chart</option>
                        </Input>
                    </div>
                    <div className="col-4">
                        <Label for="minWidth">Min Width</Label>
                        <Input type="email" name="text" id="minWidth" defaultValue={this.props.maxWidth}/>
                    </div>
                        <div className="col-4">
                        <Label for="minHeight">Min Height</Label>
                        <Input type="email" name="text" id="minHeight" defaultValue={this.props.maxHeight}/>
                    </div>
                </div>
                <hr className="hr--custom" />
                <div className='row'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}