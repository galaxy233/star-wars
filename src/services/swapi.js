import axios from 'axios';
import {store, receiveData} from '../ducks';

const baseURL = "https://swapi.co/api";

function searchResource(resource, query) {
  return axios.get(`${baseURL}/${resource}/?search=${query}`)
  .then(res => res.data)
}

export function getDataByPage(resource, pageNumber) {
  return axios.get(`${baseURL}/${resource}/?page=${pageNumber}`)
  .then(res => res.data)
}

function getDataFromStore(url) {
  let state = store.getState();
  let cached = state.find(e => e.location === url)
  if (cached) {
    return Promise.resolve(cached.data)
  } else {
    return axios.get(url)
      .then(res => res.data)
      .then(data => {
        store.dispatch(receiveData(url, data))
        return data
      })
  }
}

export function getData(resource, id) {
  return getDataFromStore(`${baseURL}/${resource}/${id}/`)
}

export function fetchNames(data, key) {
  return Promise.all(data[key].map(url => getDataFromStore(url)))
        .then(arr => {
          return {
            [key]: arr.map(obj => {
              return {
                name: obj.name ? obj.name : obj.title,
                url: obj.url
              }
            })
          }
        })
}

export function searchMultiple(resources, query) {
  var promises = []
  resources.forEach(e => {
    promises.push(searchResource(e, query));
  })
  return Promise.all(promises)
}
