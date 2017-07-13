import React from 'react';

const noDisplay = ["name", "created", "edited"];

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
      <th>{ name }</th>
      <td>{ data }</td>
    </tr>
  )
}

function Table({ data }) {
  const rows = Object.keys(data).filter(e => noDisplay.indexOf(e) === -1)
                .map(e => {
                  return (
                    <TableRow name={formatKey(e)} data={data[e]}/>
                  )
                })
  return (
    <div className="details-table">
      <table>
        { rows }
      </table>
    </div>
  )
}

export default function Details({ data }) {
  return (
    <div className="details-box columns seven">
      <Name name={ data.name }/>
      <Table data={ data }/>
    </div>
  )
}
