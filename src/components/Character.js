import React from 'react';
import './StarWars.css';

const Character = (props) => (
  <li className="character">
    <h3>
      <span>{props.name}</span>
      <span>{props.birth_year}</span>
    </h3>
  </li>
);

export default Character;
