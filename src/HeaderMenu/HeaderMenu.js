import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import MenuIcon from "../MenuIcon/MenuIcon";

class HeaderMenu extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <Container className="nav-container">
          <div className="nav-list">
            <MenuIcon label="Home" iconName="home" linkPath="/" />
            <MenuIcon label="About" iconName="user" linkPath="/about" />
            <MenuIcon
              label="Articles"
              iconName="newspaper outline"
              linkPath="/articles"
            />
            <MenuIcon label="Contact" iconName="at" linkPath="/contact" />
            <MenuIcon label="Gift guide" iconName="gift" linkPath="/gift" />
          </div>
        </Container>
      </div>
    );
  }
}

export default HeaderMenu;
