// eslint-disable-next-line
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
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
            <Route path="/" component={Home}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}



export default App;
