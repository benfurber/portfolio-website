import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

class AppHeader extends Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderTitle">
          <Container>
            <h1>
              &#x3C; Ben Furber /&#62;
              <br />
              Product manager turned developer
            </h1>
          </Container>
        </div>
        <HeaderMenu />
      </div>
    );
  }
}

export default AppHeader;
