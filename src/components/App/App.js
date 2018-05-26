import React, { Component } from 'react';
import './App.css';
import TagContainer from '../../containers/TagContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TagContainer />
      </div>
    );
  }
}
