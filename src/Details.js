import React from 'react';
import character from './Characters/character.json';

const noDisplay = ["created", "edited", "url"];


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

function TableRowCollapse({ name, data, collapsed, removeFromCollapsed, addToCollapsed }) {
  function handleClick() {
    if (collapsed.indexOf(name) !== -1) {
      removeFromCollapsed(name);
    } else {
      addToCollapsed(name);
    }
  }
  return (
    <tr>
      <th>{ formatKey(name) }</th>
      <td><i onClick={handleClick} className="fa fa-caret-down fa-2x"></i></td>
    </tr>
  )

}

function Table({ data, collapsed, removeFromCollapsed, addToCollapsed }) {
  const rows = Object.keys(data).filter(e => noDisplay.indexOf(e) === -1)
                .map(e => {
                  if (Array.isArray(data[e])) {
                    return (
                      <TableRowCollapse name={e}
                                        data={data[e]}
                                        collapsed={collapsed}
                                        removeFromCollapsed={removeFromCollapsed}
                                        addToCollapsed={addToCollapsed}
                                        />
                    )
                  } else {
                    return (
                      <TableRow name={e} data={data[e]}/>
                    )
                  }
                })
  return (
    <table>
      { rows }
    </table>
  )
}

export default function Details({ data, collapsed, removeFromCollapsed, addToCollapsed }) {
  return (
    <div className="details-box">
      <Name name={ data.name }/>
      <Table  data={ data }
              collapsed={collapsed}
              removeFromCollapsed={removeFromCollapsed}
              addToCollapsed={addToCollapsed}
              />
    </div>
  )
}
