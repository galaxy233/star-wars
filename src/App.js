// eslint-disable-next-line
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Resource from './Resource/Resource';
import Default from './Default';
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
            <Route path="/" component={Nav}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:resource" component={Default}/>
            <Route path="/:resource/:id" component={Resource}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}



export default App;
