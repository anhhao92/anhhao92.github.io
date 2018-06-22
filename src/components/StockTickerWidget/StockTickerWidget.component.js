import React from 'react';
import { connect } from 'react-redux';
import { fetchInitStock, disconnectWebSocker } from '../../actions/stockTicker.action';
import { StockTickerView } from './StockTicker.view';

class StockTickerWidget extends React.PureComponent {
    componentWillMount() {
        const {stocks, dispatch} = this.props;
        if(!stocks.length){
            dispatch(fetchInitStock());
        }
    }

    // Disconnect ws
    componentWillUnmount(){
        disconnectWebSocker();
    }

    render(){
        return (<StockTickerView {...this.props} />)
    }
}

const mapStateToProps = (state, ownProps) => ({
    stocks: getVisibleStocks(state.stockTicker, ownProps)
})

const getVisibleStocks = (stocks, props) => {
    const visibleStocks = props.configs.codes;
    return stocks.filter(stock => visibleStocks.includes(stock.code))
}

export default connect(mapStateToProps)(StockTickerWidget)