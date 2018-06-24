import React, { Component } from 'react';
import { Container, Divider, Icon } from 'semantic-ui-react'

class ContactContent extends Component {
  render() {
    document.title = 'Contact - Ben Furber';
    return (
      <Container text textAlign='center' className='ContactContent'>
        <h2>Contact Ben</h2>
        <Divider hidden />
        <a href='mailto:ben@fu.rber.io'>
          <Icon name='at' size='big' /> ben@fu.rber.io
        </a>
        <Divider hidden />
        <a href='tel:07704163099'>
          <Icon name='phone' size='big' /> 0770 416 3099
        </a>
        <Divider hidden />
        <a href='https://www.linkedin.com/in/benfurber/'>
          <Icon name='linkedin' size='big' />@benfurber
        </a>
        <Divider hidden />
        <a href='https://github.com/benfurber/CV'>
          <Icon name='github' size='big' />@benfurber
        </a>
        <Divider hidden />
      </Container>
    );
  }
}

export default ContactContent;
