import React from 'react';
import Search from './Search/Search';
import Details from './Details';
import planet from './planets.json'

function Planets(props) {
  return (
    <div class="container">
      <div class="row">
        <Search/>
        <Details data={planet}/>
      </div>
    </div>
  )
}

export default Planets;
