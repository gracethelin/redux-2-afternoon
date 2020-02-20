import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import bleh from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: bleh
})

export default createStore( rootReducer, applyMiddleware(promiseMiddleware))