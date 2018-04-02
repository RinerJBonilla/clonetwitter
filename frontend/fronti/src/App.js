import React, { Component } from 'react';
import './App.css';
import TweetForm from './components/TweetForm';
import TweetFeed from './components/TweetFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TWEETS FEED</h1>
        </header>
        <div>
          <TweetFeed/>
        </div>
      </div>
    );
  }
}

export default App;
