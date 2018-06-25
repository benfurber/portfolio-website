import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class MenuIcon extends Component {
  render() {
    const label = this.props.label
    const iconName = this.props.iconName
    const linkPath = this.props.linkPath

    return (
      <Link to={linkPath}>
        <Icon circular inverted link color='teal' aria-label={label} size='large' name={iconName} /> }
      </Link>
    );
  }
}

export default MenuIcon;
