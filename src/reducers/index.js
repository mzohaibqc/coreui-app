import { combineReducers } from 'redux'
import orderReducer from './order-reducer'

const rootReducer = combineReducers({
  orders: orderReducer
})

export default rootReducer