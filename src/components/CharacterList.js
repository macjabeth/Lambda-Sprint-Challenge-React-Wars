import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = (props) => (
  <ul className="character-list">
    {props.chars.map(char => (
      <Character key={char.name} {...char} />
    ))}
  </ul>
);

export default CharacterList;
