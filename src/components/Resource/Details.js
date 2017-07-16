import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';

const noDisplay = ["created", "edited", "url", "name", "homeworld"];

const endpointRegEx = /\/[a-z]+\/\d+/;

const capitalize = (str) => str[0].toUpperCase() + str.substr(1)

const formatKey = (str) => str.replace('_',' ').replace(/\w+/g, capitalize)


const Name = ({ name }) => {
  return (
    <div className="details-name">
      { name }
    </div>
  )
}

const TableRow = ({ name, data }) => {
  return (
    <tr>
      <th>{ formatKey(name) }</th>
      <td>{ data }</td>
    </tr>
  )
}

const TableRowCollapse = ({ name, data }) => {
  const collapsedRows = data.map(e => {
    return (
      <tr>
        <th></th>
        <td><Link to={ e.url.match(endpointRegEx)[0] }>{ e.name }</Link></td>
      </tr>
    )
  })
  const trigger = (open) => {
    return (
      <div>
        { formatKey(name) }
        <i className={ open ? "fa fa-arrow-up" : "fa fa-arrow-down"}></i>
      </div>
    )
  }
  return (
    <Collapsible trigger={ trigger(false) } triggerWhenOpen={ trigger(true) }>
      <table>
        { collapsedRows }
      </table>
    </Collapsible>
  )
}

const Table = ({ data }) => {
  const toDisplay = Object.keys(data).filter(key => noDisplay.indexOf(key) === -1)
  const tables = toDisplay.filter(key => Array.isArray(data[key]))
                          .map(e => {
                            return (
                              <TableRowCollapse name={e} data={data[e]}/>
                            )})

  const rows = toDisplay.filter(key => typeof data[key] === 'string')
                        .map(e => {
                          return (
                            <TableRow name={e} data={data[e]}/>
                          )})

  return (
    <div>
      <table>
        { rows }
      </table>
    { tables }
    </div>
  )
}

const Details = ({ data }) => {
  return (
    <div className="details-box">
      <Name name={ data.name }/>
      <Table data={ data } />
    </div>
  )
}

export default Details;
