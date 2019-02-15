import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = (props) => (
  <div className="character-list">
    {props.chars.map(char => (
      <Character key={char.name} {...char} />
    ))}
  </div>
);

export default CharacterList;
