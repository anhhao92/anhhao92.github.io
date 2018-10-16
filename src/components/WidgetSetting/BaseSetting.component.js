import React from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { SETTING_COMPONENTS } from '../../constants';
import './baseSetting.scss';

class BaseSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      widgetType: this.props.widgetType,
      title: this.props.title || 'New Widget',
      maxWidth: this.props.maxWidth,
      maxHeight: this.props.maxHeight
    };
  }

  onChange = e => {
    this.setState({
      widgetType: e.target.value
    });
  };

  updateTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  updateWidth = e => {
    this.setState({
      maxWidth: e.target.value
    });
  };

  updateHeight = e => {
    this.setState({
      maxHeight: e.target.value
    });
  };

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    dispatch(
      DashboardActionCreator.updateWidgetInfo({ widgetId, ...this.state })
    );
  }

  render() {
    const SettingComponent = SETTING_COMPONENTS[this.state.widgetType];
    return (
      <div className="container-fluid">
        <Label for="title">Widget Title</Label>
        <Input
          type="text"
          autoComplete="off"
          onChange={this.updateTitle}
          value={this.state.title}
        />
        <div className="row">
          <div className="col-4">
            <Label>Widget type</Label>
            <Input
              onChange={this.onChange}
              defaultValue={this.props.widgetType}
              type="select"
            >
              <option disabled value="DEFAULT_WIDGET">
                Select
              </option>
              <option value="TEXT_WIDGET">Text</option>
              <option value="DATATABLE_WIDGET">Datatable</option>
              <option value="TODOLIST_WIDGET">Todo List</option>
              <option value="SIMPLECHART_WIDGET">Simple Chart</option>
              <option value="STOCK_TICKER_WIDGET">Stock Ticker</option>
              <option value="ORG_CHART_WIDGET">Org Chart</option>
            </Input>
          </div>
          <div className="col-4">
            <Label for="minWidth">Min width</Label>
            <Input
              type="text"
              onChange={this.updateWidth}
              value={this.state.maxWidth}
            />
          </div>
          <div className="col-4">
            <Label for="minHeight">Min height</Label>
            <Input
              type="text"
              onChange={this.updateHeight}
              value={this.state.maxHeight}
            />
          </div>
        </div>
        <hr className="hr--custom" />
        {SettingComponent && <SettingComponent {...this.props} />}
      </div>
    );
  }
}

export default connect()(BaseSetting);
