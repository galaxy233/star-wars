import React, { Component } from 'react';
import { getDataByPage } from '../../services/swapi';
import Results from './Results';

class Default extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: props.match.params.resource,
      pageNumber: 1,
      results: [],
      next: false
    }
  }

  resetResults() {
    this.setState({
      results: []
    })
  }

  goBack() {
    this.resetResults()
    this.fetchData(this.state.resource, this.state.pageNumber - 1)
  }

  goForward() {
    this.resetResults()
    this.fetchData(this.state.resource, this.state.pageNumber + 1)
  }

  fetchData(resource, pageNumber) {
    getDataByPage(resource, pageNumber)
    .then(data => {
      this.setState({
        pageNumber: pageNumber,
        results: data.results,
        next: data.next ? true : false,
        resource: this.props.match.params.resource
      })
    })
  }

  componentDidMount() {
    this.fetchData(this.state.resource, this.state.pageNumber);
  }

  componentWillReceiveProps(nextProps) {
    this.resetResults()
    this.fetchData(nextProps.match.params.resource, 1);
  }

  render() {
    return (
      <Results  results={this.state.results}
                next={ this.state.next }
                goBack={ () => this.goBack() }
                goForward={ () => this.goForward() }
                pageNumber={ this.state.pageNumber }
                />
    )
  }
}

export default Default;
