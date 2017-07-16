import React from 'react';
import { Link } from 'react-router-dom';

const endpointRegEx = /\/[a-z]+\/\d+/;

const Item = ({ name, url }) => {
  return (
    <div className="results-item">
      <Link to={url.match(endpointRegEx)[0]}>{ name }</Link>
    </div>
  )
}

const Results = ({ results, noResults }) => {
  const items = results.map(item => {
    return (
      <Item name={item.name} url={item.url}/>
    )
  })
  return (
    <div className="results-box">
      {
        noResults
        ?
        "No results found..."
        :
        null
      }
      { items }
    </div>
  )
}

export default Results;
