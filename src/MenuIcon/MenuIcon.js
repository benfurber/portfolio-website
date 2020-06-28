import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class MenuIcon extends Component {
  render() {
    const { iconName, label, linkPath } = this.props;

    return (
      <NavLink
        activeClassName="selected"
        exact
        className="HeaderIcon"
        to={linkPath}
      >
        <Icon
          inverted
          link
          color="white"
          aria-label={label}
          size="big"
          name={iconName}
        />
      </NavLink>
    );
  }
}

export default MenuIcon;
