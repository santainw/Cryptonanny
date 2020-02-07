import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import axiosMiddleware from 'middlewares/axios'
import reducers from './reducers'

const enhancer = [axiosMiddleware, createSagaMiddleware]

const composedEnhancer = process.env.REACT_APP_LUDENS_STATE === 'prod'
  ? applyMiddleware(...enhancer)
  : composeWithDevTools(applyMiddleware(...enhancer))

const store = () => createStore(reducers, {}, composedEnhancer);

export default store