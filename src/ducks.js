import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const RECEIVE_DATA = 'RECEIVE_DATA'

export const receiveData = (url, json) => ({
  type: RECEIVE_DATA,
  location: url,
  data: json
})

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return [...state, {
        data: action.data,
        location: action.location
      }]
    default:
      return state
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(createLogger())
)
