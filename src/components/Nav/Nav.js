import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
  return (
    <nav>
      <Link to="/">
        <div className={ location.pathname === "/" ? "active" : null }>
          Home
        </div>
      </Link>
      <Link to="/films">
        <div className={ location.pathname === "/films" ? "active" : null }>
          Films
        </div>
      </Link>
      <Link to="/people">
        <div className={ location.pathname === "/people" ? "active" : null }>
          People
        </div>
      </Link>
      <Link to="/planets">
        <div className={ location.pathname === "/planets" ? "active" : null }>
          Planets
        </div>
      </Link>
      <Link to="/starships">
        <div className={ location.pathname === "/starships" ? "active" : null }>
          Starships
        </div>
      </Link>
    </nav>
  )
}

export default Nav;
