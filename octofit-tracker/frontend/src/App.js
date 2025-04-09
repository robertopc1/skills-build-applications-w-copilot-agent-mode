import React from 'react';
import './App.css';
import logo from '../docs/octofitapp-small.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to OctoFit Tracker</h1>
        <p>Your fitness journey starts here!</p>
      </header>
    </div>
  );
}

export default App;
