import React from 'react';
import './StarWars.css';

const Character = (props) => (
  <div className="character">
    <h3>{props.name}</h3>
  </div>
);

export default Character;
