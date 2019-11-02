import React, { Component } from "react";
import { Container, Divider, Image, Grid, Tab } from "semantic-ui-react";
import AboutPanelExperience from "./AboutPanelExperience";
import AboutPanelSkills from "./AboutPanelSkills";
import AboutPanelEducation from "./AboutPanelEducation";

const panes = [
  {
    menuItem: "Experience",
    render: () => (
      <Tab.Pane as="Container" attached={false}>
        <AboutPanelExperience />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Skills/Knowledge",
    render: () => (
      <Tab.Pane as="Container" attached={false}>
        <AboutPanelSkills />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Education",
    render: () => (
      <Tab.Pane as="Container" attached={false}>
        <AboutPanelEducation />
      </Tab.Pane>
    )
  }
];

class AboutContent extends Component {
  render() {
    document.title = "About - Ben Furber";
    return (
      <Container text className="AboutContent">
        <Container>
          <h2>About Me</h2>

          <Grid>
            <Grid.Column width={5}>
              <Image src="./images/avatar.jpeg" rounded />
            </Grid.Column>
            <Grid.Column width={11}>
              <p>
                I started out as a <strong>website designer</strong>. Ran
                digital teams before founding and running a{" "}
                <strong>startup</strong>. I was then a{" "}
                <strong>product owner</strong> for large charity. Then I worked
                as a <strong>developer</strong>/consultant. And now (finally)
                I'm a <strong>Technical Coach</strong> for developers. ...I've
                done a lot over 13 years in tech.
              </p>
              <p>
                I love being part of building digital products - challenging
                myself as much as possible to building complex and difficult
                things.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
        <Divider hidden />
        <Tab
          menu={{
            color: "teal",
            inverted: true,
            attached: false,
            tabular: false
          }}
          panes={panes}
        />
        <Divider hidden />
      </Container>
    );
  }
}

export default AboutContent;
