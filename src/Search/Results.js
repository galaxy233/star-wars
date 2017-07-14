import React from 'react';
import Item from './Item';

function Results({ results, noResults }) {
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
