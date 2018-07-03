import React from 'react';
import BaseSetting from '../WidgetSetting/BaseSetting.component';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { StockItem } from './StockTicker.view';

class StockTickerSetting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      codes: props.configs.codes
    };
  }

  componentWillUnmount() {
    const { dispatch, widgetId } = this.props;
    // dispatch(DashboardActionCreator.updateConfig(widgetId, this.state));
  }

  render() {
    return (
      <BaseSetting {...this.props}>
        <div className="col-12">Stock Codes:</div>
        <div className="col-12">
          <div className="stock-container">
            {this.state.codes.map((e, idx) => <StockItem key={idx} code={e} />)}
          </div>
        </div>
      </BaseSetting>
    );
  }
}
export default connect()(StockTickerSetting);
