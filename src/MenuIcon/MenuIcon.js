import React, { Component } from "react";
import { Icon, Responsive } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class MenuIcon extends Component {
  render() {
    const { iconName, label, linkPath } = this.props;

    return (
      <NavLink
        activeClassName="selected"
        exact
        className="nav-icon"
        to={linkPath}
      >
        <Icon
          aria-label={label}
          color="white"
          inverted
          link
          name={iconName}
          size="big"
        />{" "}
        <Responsive minWidth={768}>{label}</Responsive>
      </NavLink>
    );
  }
}

export default MenuIcon;
