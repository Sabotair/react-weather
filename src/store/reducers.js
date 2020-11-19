import { combineReducers } from 'redux'
import { weaterReducer } from './weather/reducer'

export default combineReducers({
  weather: weaterReducer,
})
