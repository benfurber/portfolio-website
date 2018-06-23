import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class MenuIcon extends Component {
  render() {
    const label = this.props.label
    const labelHeader = this.props.labelHeader
    const labelContent = this.props.labelContent
    const iconName = this.props.iconName
    const linkPath = this.props.linkPath

    return (
      <Link to={linkPath}>
        <Popup
          trigger={ <Icon circular inverted link color='teal' aria-label={label} size='large' name={iconName} /> }
          header={labelHeader}
          content={labelContent}
          size='small'
          position='bottom center'
        />
      </Link>
    );
  }
}

export default MenuIcon;
