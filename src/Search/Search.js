import React, { Component } from 'react';
import Input from './Input';
import Results from './Results';
import results from './results.json';

class Search extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="columns five">
        <div className="search-box">
          <Input/>
          <Results results={ results.results }/>
        </div>
      </div>
    )
  }
}

export default Search;
