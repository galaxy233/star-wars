// eslint-disable-next-line
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Characters from './Characters/Characters';
import Planets from './Planets';
import Details from './Details';
import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <HashRouter>
          <div>
            <Nav/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/planets" component={Planets}/>
            <Route path="/planets/:id" component={Planets}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}



export default App;
