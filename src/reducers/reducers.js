import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { dashboard } from './dashboard.reducer'
import { dataSource } from './dataSource.reducer'
import { todos } from './todo.reducer'
import { dataReport } from './simpleChart.reducer'


export default combineReducers({
  routing: routerReducer,
  dashboard,
  dataSource,
  todos,
  dataReport
})
