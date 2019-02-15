import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  state = {
    starwarsChars: []
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = url => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="app">
          <h1 className="header">React Wars</h1>
          <CharacterList chars={this.state.starwarsChars} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
