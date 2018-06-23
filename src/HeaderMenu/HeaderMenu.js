import React, { Component } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon'

class HeaderMenu extends Component {
  render() {
    return (
      <div className="HeaderMenu">
        <MenuIcon label="Home" labelHeader="Home" labelContent="" iconName="home" />
        <MenuIcon label="About" labelHeader="About Ben" labelContent="Ben's experience, skills and education" iconName="user" />
        <MenuIcon label="Projects" labelHeader="Projects" labelContent="Recent projects undertaken as a developer" iconName="flask" />
        <MenuIcon label="Articles" labelHeader="Articles" labelContent="Random articles and blogs written over the years" iconName="newspaper outline" />
        <MenuIcon label="Contact" labelHeader="Contact" labelContent="" iconName="at" />
      </div>
    );
  }
}

export default HeaderMenu;
