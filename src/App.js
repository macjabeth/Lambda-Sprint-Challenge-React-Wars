import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends Component {
  state = {
    starData: {}
  }

  componentDidMount() {
    setTimeout(() => this.getCharacters(), 3000);
  }

  getCharacters = (url = 'https://swapi.dev/api/people') => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ starData: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starData)

    const { results, previous, next } = this.state.starData;

    return (
      <React.Fragment>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="app">
          <div className="header">
            {previous ? <span className="prev" onClick={() => this.getCharacters(previous)}>&lt;</span> : null}
            <h1>React Wars</h1>
            {next ? <span className="next" onClick={() => this.getCharacters(next)}>&gt;</span> : null}
          </div>
          {results ? <CharacterList chars={results} /> : <Loader type="Ball-Triangle" color="red" height={80} width={80} />}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
