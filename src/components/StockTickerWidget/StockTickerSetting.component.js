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

  onRemove = e => {
    const parent = document.querySelector('.stock-container');
    parent.removeChild(e.target.parentNode);
  };

  componentWillUnmount() {
    const { dispatch, widgetId, configs } = this.props;
    const stockElements = document.querySelectorAll('.stock-container .badge');
    const selectedCodes = [];
    stockElements.forEach(e => {
      e.removeChild(e.querySelector('.stock-close'));
      selectedCodes.push(e.textContent.trim());
    });
    configs.codes = selectedCodes;
    dispatch(DashboardActionCreator.updateConfig(widgetId, configs));
  }

  render() {
    return (
      <BaseSetting {...this.props}>
        <div className="col-12">Stock Codes:</div>
        <div className="col-12">
          <div className="stock-container">
            {this.props.stocks.map((item, idx) => (
              <StockItem onRemove={this.onRemove} key={idx} stock={item} />
            ))}
          </div>
        </div>
      </BaseSetting>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stockTicker
});
export default connect(mapStateToProps)(StockTickerSetting);
