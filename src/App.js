import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Resource from './components/Resource/Resource';
import Default from './components/Default/Default';

import './assets/css/normalize.css'
import './assets/css/skeleton.css'
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
            <Route exact path="/" component={Search}/>
            <Route exact path="/:resource" component={Default}/>
            <Route path="/:resource/:id" component={Resource}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
