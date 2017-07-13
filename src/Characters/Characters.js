import React, { Component } from 'react';
import Details from '../Details';
import Search from '../Search/Search';
import character from './character.json';

function Planets(props) {
  return (
    <div class="container">
      <div class="row">
        <Search/>
        <Details data={character}/>
      </div>
    </div>
  )
}

export default Planets;
