import axios from 'axios'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const requestData = url => ({
  type: REQUEST_DATA,
  location: url
})

export const receiveData = (url, json) => ({
  type: RECEIVE_DATA,
  location: url,
  data: json
})

const fetchData = url => dispatch => {
  dispatch(requestData(url))
  return axios.get(url)
    .then(res => res.data)
    .then(data => dispatch(receiveData(url, data)))
}

const shouldFetchData = (state, url) => {
  const data = state.findIndex(e => e.location === url)
  if (data === -1) {
    return true
  }
  if (data.isFetching) {
    return false
  }
}

export const fetchDataIfNeeded = url => (dispatch, getState) => {
  if (shouldFetchData(getState(), url)) {
    return dispatch(fetchData(url))
  }
}
