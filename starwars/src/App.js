import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      prev: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ 
          starwarsChars: data.results, 
          next: data.next, 
          prev: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.getCharacters(this.state.next);
  };

  prevPage = () => {
    this.getCharacters(this.state.prev)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      <div>
          <button onClick={this.prevPage} >Previous</button> 
          <button onClick={this.nextPage}>Next</button> 
      </div>
        <CardList card={this.state.starwarsChars}>
        </CardList>
      </div>
    );
  }
}

export default App;
