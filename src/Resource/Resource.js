import React, { Component } from 'react';
import { getData, fetchNames } from '../services/swapi';
import axios from 'axios';
import Details from './Details';

class Resource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      collapsed: []
    }
  }

  fetchData(resource, id) {
    getData(resource, id)
    .then(data => {
      let toFetch = Object.keys(data).filter(key => Array.isArray(data[key]))
      Promise.all(toFetch.map(key => fetchNames(data, key)))
      .then(arr => {
        this.setState({
          data: Object.assign(data, ...arr),
          collapsed: toFetch
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
  }

  removeFromCollapsed(name){
    let copy = this.state.collapsed.slice();
    let idx = copy.indexOf(name);
    copy.splice(idx, 1);
    this.setState({
      collapsed: copy
    })
  }

  addToCollapsed(name){
    this.setState({
      collapsed: [...this.state.collapsed, name]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="columns twelve">
            <Details  data={this.state.data}
                      collapsed={this.state.collapsed}
                      removeFromCollapsed={ (name) => this.removeFromCollapsed(name) }
                      addToCollapsed={ (name) => this.addToCollapsed(name) }
                      />
          </div>
        </div>
      </div>
    )
  }
}

export default Resource;
