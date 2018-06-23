import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'
import AppHeader from './AppHeader/AppHeader'

class App extends Component {
  render() {
    return (
      <Container className="App" textAlign="center">
        <Divider hidden="true" />
        <AppHeader />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    );
  }
}

export default App;
