import axios from 'axios';

const baseURL = "https://swapi.co/api";

function searchResource(resource, query) {
  return axios.get(`${baseURL}/${resource}/?search=${query}`)
  .then(res => res.data)
}

export function searchMultiple(resources, query) {
  var promises = []
  resources.forEach(e => {
    promises.push(searchResource(e, query));
  })
  return Promise.all(promises)
}

export function getDataByPage(resource, pageNumber) {
  return axios.get(`${baseURL}/${resource}/?page=${pageNumber}`)
  .then(res => res.data)
}
