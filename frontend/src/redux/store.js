import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { productListReducer } from './reducers/productListReducer'

const initialState = {}
const reducers = combineReducers({
    productList: productListReducer
})

const composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION || compose

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)))

export default store