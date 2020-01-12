import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";

class AboutPanelSkills extends Component {
  render() {
    return (
      <Container className="AboutPanelSkills">
        <h3>Good team worker</h3>
        <p>
          Having been part of so many big and small projects over the last
          decade I believe I've picked up a lot of lessons about how to be a
          good team member. I'm normally a calming influence and air on the side
          of over communicating.
        </p>
        <Divider hidden />
        <h3>Agile delivery</h3>
        <p>
          From a product management prospective, I know how SCRUM works -
          turning business needs into user stories, discussing and amending
          those stories after discussion with developers and being part of
          daily, weekly and per-sprint ceremonies.
        </p>
        <p>
          At the Institute of Physics I worked to set-up a small Agile team and
          then at Marie Curie I lead a larger and well established Agile team.
        </p>
        <Divider hidden />
        <h3>Website management</h3>
        <p>
          I've managed proprietary, open source (Wordpress, Drupal, Umbraco) and
          enterprise-level (Episerver) Content Management Systems. These
          websites have ranged from having barely any traffic to multiple
          millions of users a year.
        </p>
        <Divider hidden />
        <h3>Design</h3>
        <p>
          From teaching myself Adobe products over ten years ago and using them
          to design websites a designers eye never goes away. Excusing learning
          Semantic UI's framework during my time at Makers, my more recent
          design experience has been managing professional designers when in
          Product roles.
        </p>
      </Container>
    );
  }
}

export default AboutPanelSkills;
