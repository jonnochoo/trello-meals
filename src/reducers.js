import { combineReducers } from 'redux'
import mealsReducer from './pages/meals/reducer'

export default combineReducers({
  mealsReducer: mealsReducer
})
