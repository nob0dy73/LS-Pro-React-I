import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './NavBar.js';
import Body from './Body.js';
import './App.css';


class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    );
  }
}

export default App;
