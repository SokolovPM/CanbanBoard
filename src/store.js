import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './__data__'

const middleware = [thunk]

export const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)
