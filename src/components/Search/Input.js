import React from 'react';

function Advanced({ options, updateOptions }) {
  return (
    <div className="search-advanced">
      <form>
        <label>
          Movies
          <input
            name="movies"
            type="checkbox"
            checked={options.films}
            onChange={ () => updateOptions(Object.assign({}, options, {films:!options.films})) } />
        </label>
        <label>
          Characters
          <input
            name="characters"
            type="checkbox"
            checked={options.people}
            onChange={ () => updateOptions(Object.assign({}, options, {people:!options.people})) } />
        </label>
        <label>
          Planets
          <input
            name="planets"
            type="checkbox"
            checked={options.planets}
            onChange={ () => updateOptions(Object.assign({}, options, {planets:!options.planets})) } />
        </label>
        <label>
          Starships
          <input
            name="starships"
            type="checkbox"
            checked={options.starships}
            onChange={ () => updateOptions(Object.assign({}, options, {starships:!options.starships})) } />
        </label>
      </form>
    </div>
  )
}

function Input(props) {
  return (
    <div>
      <input onChange={ (e) => props.updateTextField(e.target.value) } type="text"/>
      <button onClick={ props.executeSearch }>Search</button>
      <i onClick={ props.toggleAdvanced } className="fa fa-cog"></i>
      {
        props.advanced
        ?
        <Advanced options={ props.options } updateOptions={ props.updateOptions }/>
        :
        null
      }
    </div>
  )
}

export default Input;
