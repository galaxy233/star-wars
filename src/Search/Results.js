import React from 'react';
import Item from './Item';

function Results({ results }) {
  const items = results.map(item => {
    return (
      <Item name={item.name} url={item.url}/>
    )
  })
  return (
    <div className="results-box">
      { items }
    </div>
  )
}

export default Results;
