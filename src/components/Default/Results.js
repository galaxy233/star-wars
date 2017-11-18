import React from 'react';
import { Link } from 'react-router-dom';
import ScaleLoader from 'halogen/ScaleLoader';
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
    let name = item.name ? item.name : item.title
    return (
      <Row key={ item.url } name={ name } url={ item.url }/>
    )
  })
  return (
    <table>
      { rows }
    </table>
  )
}

const Results = ({ results, next, goBack, goForward, pageNumber }) => {
  let arrowLeft = "fa fa-arrow-left fa-3x"
  let arrowRight = "fa fa-arrow-right fa-3x"
  let loader = (
    <div className="loader">
      <ScaleLoader color="white" size="32px"/>
    </div>
  )

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
    <div>
      { results.length ? null : loader }
      <div className="default-results">
        <Table results={ results }/>
        <div>
          <i onClick={ () => handleGoBack() } className={ pageNumber > 1 ? arrowLeft : arrowLeft + " disabled" }></i>
          { pageNumber }
          <i onClick={ () => handleGoForward() } className={ next ? arrowRight : arrowRight + " disabled" }></i>
        </div>
      </div>
    </div>
  )
}

export default Results;
