import React, { Component } from 'react';
import Input from './Input';
import Results from './Results';
import { searchMultiple } from '../services/swapi';
import results from './results.json';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textField: '',
      advanced: false,
      results: [],
      noResults: false,
      options: {
        films: true,
        people: true,
        planets: true,
        starships: true
      }
    }
  }

  executeSearch() {
    var results = [];
    var resources = Object.keys(this.state.options).filter(key => this.state.options[key])
    searchMultiple(resources, this.state.textField).then(arr => {
      arr.forEach(obj => {
        results.push(...obj.results)
      })
      this.setState({
        results: results,
        noResults: results.length === 0
      })
    })
  }

  toggleAdvanced() {
    this.setState({
      advanced: !this.state.advanced
    })
  }

  updateTextField(val) {
    this.setState({
      textField: val
    })
  }

  updateOptions(options) {
    this.setState({
      options:options
    })
  }

  render() {
    return (
      <div className="search-box">
        <Input  updateTextField={ (val) => this.updateTextField(val) }
                toggleAdvanced={ () => this.toggleAdvanced() }
                updateOptions={ (options) => this.updateOptions(options) }
                executeSearch={ () => this.executeSearch() }
                value={ this.state.textField }
                advanced={ this.state.advanced }
                options={ this.state.options }
                />
        <Results  results={ this.state.results }
                  noResults={ this.state.noResults }
                  />
      </div>
    )
  }
}

export default Search;
