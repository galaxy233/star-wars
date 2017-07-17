import { createStore } from 'redux';

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

export const store = createStore(reducer)
