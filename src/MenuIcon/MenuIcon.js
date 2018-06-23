import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react'

class MenuIcon extends Component {
  render() {
    const label = this.props.label
    const labelHeader = this.props.labelHeader
    const labelContent = this.props.labelContent
    const iconName = this.props.iconName

    return (
      <Popup
        trigger={ <Icon circular inverted link color='teal' aria-label={label} size='large' name={iconName} /> }
        header={labelHeader}
        content={labelContent}
        size='small'
        position='bottom center'
      />
    );
  }
}

export default MenuIcon;
