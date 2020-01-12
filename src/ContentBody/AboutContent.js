import React, { Component } from "react";
import { Container, Divider, Image, Grid, Tab } from "semantic-ui-react";
import AboutPanelExperience from "./AboutPanelExperience";
import AboutPanelSkills from "./AboutPanelSkills";
import AboutPanelEducation from "./AboutPanelEducation";

const panes = [
  {
    menuItem: { key: "experience", icon: "history", content: "Experience" },
    render: () => (
      <Tab.Pane as="Container">
        <AboutPanelExperience />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "skills", icon: "book", content: "Skills/Knowledge" },
    render: () => (
      <Tab.Pane as="Container" attached={false}>
        <AboutPanelSkills />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "education", icon: "law", content: "Education" },
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
      <Container className="AboutContent">
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={12}>
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
                      <strong>product owner</strong> for large charity. Then I
                      worked as a <strong>developer</strong>/consultant. And now
                      (finally) I'm a <strong>Technical Coach</strong> for
                      developers. ...I've done a lot over 13 years in tech.
                    </p>
                    <p>
                      I love being part of building digital products -
                      challenging myself as much as possible to building complex
                      and difficult things.
                    </p>
                  </Grid.Column>
                </Grid>
              </Container>
              <Divider hidden />
              <Tab
                menu={{
                  inverted: true
                }}
                panes={panes}
              />
              <Divider hidden />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default AboutContent;
