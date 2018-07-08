import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import MenuIcon from '../MenuIcon/MenuIcon'

class HeaderMenu extends Component {
  render() {
    return (
      <div className="HeaderMenu">
        <MenuIcon label="Home" iconName="home" linkPath='/' />
        <MenuIcon label="About" iconName="user" linkPath='/about' />
        <MenuIcon label="Projects" iconName="flask" linkPath='/projects' />
        <MenuIcon label="Articles" iconName="newspaper outline" linkPath='/articles' />
        <MenuIcon label="Contact" iconName="at" linkPath='/contact' />
        <a href='https://github.com/benfurber/cv/'><Button basic inverted>CV on GitHub</Button></a>
      </div>
    );
  }
}

export default HeaderMenu;
