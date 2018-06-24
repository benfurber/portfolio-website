import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

class AppHeader extends Component {
  render() {
    return (
      <Segment inverted className="AppHeader" textAlign="center">
        <Header>
          <h1 className="App-title">Ben Furber</h1>
        </Header>
        <HeaderMenu />
      </Segment>
    );
  }
}

export default AppHeader;
