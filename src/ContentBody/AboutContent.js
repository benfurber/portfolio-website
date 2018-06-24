import React, { Component } from 'react';
import { Container, Divider, Tab } from 'semantic-ui-react'
import AboutPanelExperience from './AboutPanelExperience'
import AboutPanelSkills from './AboutPanelSkills'
import AboutPanelEducation from './AboutPanelEducation'

const panes = [
  { menuItem: 'Experience', render: () => <Tab.Pane as='Container' attached={false}><AboutPanelExperience /></Tab.Pane> },
  { menuItem: 'Skills/Knowledge', render: () => <Tab.Pane as='Container' attached={false}><AboutPanelSkills /></Tab.Pane> },
  { menuItem: 'Education', render: () => <Tab.Pane as='Container' attached={false}><AboutPanelEducation /></Tab.Pane> },
]

class AboutContent extends Component {
  render() {
    document.title = 'About - Ben Furber';
    return (
      <Container text className='AboutContent'>
        <Container>
          <h2>About Ben Furber</h2>
          <p>
            Product manager turned developer trying to stay out of my comfort zone. I started out as a website designer/manager before running a startup and then later as website product owner for large charity. I have learned to be a developer at Makers Academy.
          </p>
          <p>
            I love being part of building digital products, so I want to continue doing that as a developer - challenging myself as much as possible by building complex and difficult things for ambitious companies.
          </p>
        </Container>
        <Divider hidden />
        <Tab menu={{ color: 'teal', inverted: true, attached: false, tabular: false }} panes={panes} />
        <Divider hidden />
      </Container>
    );
  }
}

export default AboutContent;
