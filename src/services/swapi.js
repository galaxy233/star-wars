import axios from 'axios';

const baseURL = "https://swapi.co/api";

function searchResource(resource, query) {
  return axios.get(`${baseURL}/${resource}/?search=${query}`)
  .then(res => res.data)
}

export function getDataByPage(resource, pageNumber) {
  return axios.get(`${baseURL}/${resource}/?page=${pageNumber}`)
  .then(res => res.data)
}

export function getData(resource, id) {
  return axios.get(`${baseURL}/${resource}/${id}`)
  .then(res => res.data)
}

export function fetchNames(data, key) {
  return Promise.all(data[key].map(url => axios.get(url)))
        .then(arr => arr.map(res => res.data))
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
