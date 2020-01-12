import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

class AppHeader extends Component {
  render() {
    return (
      <Segment className="AppHeader">
        <Container>
          <Header>
            <h1 className="AppTitle">
              &#x3C; Ben Furber /&#62;
              <br />
              Product manager turned developer
            </h1>
          </Header>
          <HeaderMenu />
        </Container>
      </Segment>
    );
  }
}

export default AppHeader;
