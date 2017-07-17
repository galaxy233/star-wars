import React, { Component } from 'react';
import { getData, fetchNames, fetchHomeworld } from '../../services/swapi';
import Details from './Details';

class Resource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  fetchData(resource, id) {
    getData(resource, id)
    .then(data => {
      let toFetch = Object.keys(data).filter(key => Array.isArray(data[key]))
      let promises = toFetch.map(key => fetchNames(data, key))
      if (data.homeworld) {
        promises.push(fetchHomeworld(data.homeworld))
      }
      console.log(promises);
      Promise.all(promises)
      .then(arr => {
        this.setState({
          data: Object.assign({}, data, ...arr)
        })
      })
    })
  }

  componentDidMount() {
    let params = this.props.match.params;
    this.fetchData(params.resource, params.id)
  }

  componentWillReceiveProps(nextProps) {
    let params = nextProps.match.params;
    this.fetchData(params.resource, params.id)
    this.setState({
      data:{}
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="columns twelve">
            <Details data={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Resource;
