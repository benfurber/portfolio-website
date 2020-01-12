import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";

class AboutPanelEducation extends Component {
  render() {
    return (
      <Container className="AboutPanelEducation">
        <h3>Makers Academy (April 2018 to July 2018)</h3>
        <p>Highly selective 12 week intensive coding bootcamp.</p>

        <ul>
          <li>Test driven development focused</li>
          <li>Object oriented programming & software design</li>
          <li>Full stack web development</li>
          <li>Building MVC framework pattern</li>
        </ul>
        <Divider hidden />

        <h3>Birkbeck College, University of London</h3>
        <p>BA in Global politics and international relations</p>

        <h3>Chartered Institute of Public Relations</h3>
        <p>Foundation certificate in public relations</p>
      </Container>
    );
  }
}

export default AboutPanelEducation;
