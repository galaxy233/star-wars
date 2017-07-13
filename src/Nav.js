import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/starships">Starships</Link>
    </nav>
  )
}
