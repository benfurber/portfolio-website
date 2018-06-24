import React, { Component } from 'react';
import { Container, Divider, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class HomeContent extends Component {
  render() {
    document.title = 'Ben Furber - Portfolio Website';
    return (
      <Container text className='HomeContent'>
        <Divider hidden />
        <p>
          Ben is a product manager turned developer trying to stay out of his comfort zone.
          Starting as website designer/manager before running a startup and then as website product owner for large charity.
          He has learned to be a developer at <a href="http://makers.tech/">Makers Academy</a>.
        </p>
        <Divider hidden />
        <Grid stackable='true'>
          <Grid.Row>
            <Grid.Column width={4} textAlign='center'>
              <Link to='/about'>
                <Icon name='user' size='massive' color='teal' /><br/>
                <p>Ben's experience, skills and education.</p>
              </Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Link to='/projects'>
                <Icon name='flask' size='massive' color='teal' /><br/>
                <p>Recent projects undertaken as a developer.</p>
              </Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Link to='/articles'>
                <Icon name='newspaper outline' size='massive' color='teal' /><br/>
                <p>Random articles and blogs written over the years.</p>
              </Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Link to='/contact'>
                <Icon name='at' size='massive' color='teal' /><br/>
                <p>Emails and all the social media.</p>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default HomeContent;
