import React, { Component } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon'

class HeaderMenu extends Component {
  render() {
    return (
      <div className="HeaderMenu">
        <MenuIcon label="Home" labelHeader="Home" labelContent="The page where it all begins." iconName="home" linkPath='/' />
        <MenuIcon label="About" labelHeader="About Ben" labelContent="Ben's experience, skills and education." iconName="user" linkPath='/about' />
        <MenuIcon label="Projects" labelHeader="Projects" labelContent="Recent projects undertaken as a developer." iconName="flask" linkPath='/projects' />
        <MenuIcon label="Articles" labelHeader="Articles" labelContent="Random articles and blogs written over the years." iconName="newspaper outline" linkPath='/articles' />
        <MenuIcon label="Contact" labelHeader="Contact" labelContent="Emails and all the social media." iconName="at" linkPath='/contact' />
      </div>
    );
  }
}

export default HeaderMenu;
