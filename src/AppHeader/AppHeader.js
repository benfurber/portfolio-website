import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

class AppHeader extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-title-container">
          <Container>
            <div className="header-title">
              <h1>
                &#x3C; Ben Furber /&#62;
                <br />
                <strong>Product manager turned developer</strong>
              </h1>
            </div>
          </Container>
        </div>
        <HeaderMenu />
      </div>
    );
  }
}

export default AppHeader;
