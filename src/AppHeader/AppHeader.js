import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <Header>
          <h1 className="App-title">Ben Furber</h1>
        </Header>
      </div>
    );
  }
}

export default AppHeader;
