import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'

// 组合reducer
export default combineReducers({
  header: headerReducer,
  home: homeReducer
})
