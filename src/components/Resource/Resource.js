import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataIfNeeded } from '../../actions';
import Details from './Details';

class Resource extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchDataIfNeeded("https://swapi.co/api/planets/1"))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="columns twelve">
            <h1>Hello World!</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ data:state })

export default connect(mapStateToProps)(Resource);
