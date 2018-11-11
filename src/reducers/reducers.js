import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dashboard } from './dashboard.reducer';
import { dataSource } from './dataSource.reducer';
import { todos } from './todo.reducer';
import { dataReport } from './simpleChart.reducer';
import { stockTicker } from './stockTicker.reducer';
import { auth } from './authentication.reducer';
import { locales } from './locales.reducer';
import { exchangeRate } from './exchangeRate.reducer';
export default combineReducers({
  routing: routerReducer,
  dashboard,
  dataSource,
  todos,
  dataReport,
  stockTicker,
  auth,
  locales,
  exchangeRate
});
