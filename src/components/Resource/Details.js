import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';

const noDisplay = ["created", "edited", "url", "name", "homeworld"];

const endpointRegEx = /\/[a-z]+\/\d+/;

function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1)
}

function formatKey(str) {
  return str.replace('_',' ').replace(/\w+/g, capitalize)
}

function Name({ name }) {
  return (
    <div className="details-name">
      { name }
    </div>
  )
}

function TableRow({ name, data }) {
  return (
    <tr>
      <th>{ formatKey(name) }</th>
      <td>{ data }</td>
    </tr>
  )
}

function TableRowCollapse({ name, data }) {
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

function Table({ data }) {
  const tables = []
  const rows = Object.keys(data).filter(e => noDisplay.indexOf(e) === -1)
                .map(e => {
                  if (Array.isArray(data[e])) {
                    tables.push( (
                      <TableRowCollapse name={e}
                                        data={data[e]}
                                        />
                    ))

                  } else {
                    return (
                      <TableRow name={e} data={data[e]}/>
                    )
                  }
                })
  return (
    <div>
      <table>
        { rows }
      </table>
    { tables }
    </div>

  )
}

export default function Details({ data }) {
  return (
    <div className="details-box">
      <Name name={ data.name }/>
      <Table  data={ data } />
    </div>
  )
}
