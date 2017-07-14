import React, { Component } from 'react';
import Details from '../Details';
import Search from '../Search/Search';
import character from './character.json';

function Characters(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="columns five">
          <Search/>
        </div>
        <div className="columns seven">
          <Details data={character}/>
        </div>
      </div>
    </div>
  )
}

export default Characters;
