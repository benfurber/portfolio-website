import React, { Component } from 'react';
import AppHeader from './AppHeader/AppHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
