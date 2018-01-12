import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default createStore(
  rootReducer,
  applyMiddleware(
    promise(),
    thunkMiddleware,
    loggerMiddleware
  )
)