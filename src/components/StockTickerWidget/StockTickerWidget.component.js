import React from 'react';
import { connect } from 'react-redux';
import { fetchInitStock } from '../../actions/stockTicker.action';
import { StockTickerView } from './StockTicker.view';
import { getStocksTickerState } from '../../selectors/stocks.selectors';

class StockTickerWidget extends React.PureComponent {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchInitStock());
  }

  render() {
    return <StockTickerView {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  stocks: getStocksTickerState(state, ownProps)
});

export default connect(mapStateToProps)(StockTickerWidget);
