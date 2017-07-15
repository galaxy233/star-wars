import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDataIfNeeded} from '../../actions';
import Details from './Details';

class Resource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      toFetch: []
    }
  }

  updateToFetch(nextProps) {
    const updatedArr = this.state.toFetch.map(url => {
      let cached = nextProps.cache.find(e => e.location === url && !e.isFetching)
      if (cached) {
        return cached
      } else {
        return url
      }
    })
    this.setState({
      toFetch: updatedArr
    })
  }

  componentDidMount() {
    const {resource, id} = this.props.match.params
    let location = `https://swapi.co/api/${resource}/${id}`
    this.props.dispatch(fetchDataIfNeeded(location))
  }

  componentWillReceiveProps(nextProps) {
    this.updateToFetch(nextProps)
    if (!this.state.data.name) {
      const {resource, id} = nextProps.match.params
      let location = `https://swapi.co/api/${resource}/${id}`
      let cached = nextProps.cache.find(e => e.location === location && !e.isFetching)
      if (cached) {
        let toFetch = Object.keys(cached.data).filter(key => Array.isArray(cached.data[key]))
                                              .map(key => cached.data[key])
                                              .reduce((a, b) => a.concat(b))

        this.setState({
          data: cached.data,
          toFetch: toFetch
        })

        toFetch.forEach(url => this.props.dispatch(fetchDataIfNeeded(url)))
      }
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => ({cache: state})

export default connect(mapStateToProps)(Resource);
