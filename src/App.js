import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Resource from './components/Resource/Resource';
import Default from './components/Default/Default';

import './assets/css/normalize.css'
import './assets/css/skeleton.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style:'./Blue.css'
    }
  }

  switchStyle() {
    if (this.state.style === './Blue.css') {
      this.setState({
        style:'./Red.css'
      })
    } else {
      this.setState({
        style:'./Blue.css'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" type="text/css" href={ this.state.style }/>
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
        <button style={{"marginTop": "20px"}}  onClick={ () => this.switchStyle() }>Style</button>
      </div>
    );
  }
}

export default App;
