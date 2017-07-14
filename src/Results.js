import React from 'react';
import { Link } from 'react-router-dom';
const endpointRegEx = /\/[a-z]+\/\d+/;

const Row = ({ name, url }) => {
  return (
    <tr>
      <td><Link to={url.match(endpointRegEx)[0]}>{ name }</Link></td>
    </tr>
  )
}


const Table = ({ results }) => {
  const rows = results.map(item => {
    return (
      <Row name={item.name} url={item.url}/>
    )
  })
  return (
    <table>
      { rows }
    </table>
  )
}

const Results = ({ results, next, goBack, goForward, pageNumber }) => {

  const handleGoBack = () => {
    if (pageNumber > 1) {
      goBack()
    }
  }

  const handleGoForward = () => {
    if (next) {
      goForward()
    }
  }

  return (
    <div className="default-results">
      <Table results={ results }/>
      <div>
        <i onClick={ () => handleGoBack() } className="fa fa-arrow-left fa-3x"></i>
        <i onClick={ () => handleGoForward() } className="fa fa-arrow-right fa-3x"></i>
      </div>
    </div>
  )
}

export default Results;
