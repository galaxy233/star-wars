import { REQUEST_DATA, RECEIVE_DATA } from '../actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return [...state, {
        location: action.location,
        data: {},
        isFetching: true
      }]
    case RECEIVE_DATA:
      let copy = state.slice()
      let idx = copy.findIndex(e => e.location === action.location)
      copy.splice(idx, 1, {
        location: action.location,
        data: action.data,
        isFetching: false
      })
      return copy
    default:
      return state
  }
}

export default reducer;
