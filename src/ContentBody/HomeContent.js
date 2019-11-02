import React, { Component } from "react";
import { Container, Divider, Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class HomeContent extends Component {
  render() {
    document.title = "Ben Furber";
    return (
      <Container text className="HomeContent">
        <Divider hidden />
        <p>
          Ben is a developer and product manager. He has worked in tech for 13
          years across a range of disciplines - development, design, product and
          team management.
        </p>
        <Divider hidden />
        <Grid stackable="true">
          <Grid.Row>
            <Grid.Column width={4} textAlign="center">
              <Link to="/about">
                <Icon name="user" size="massive" color="teal" />
                <br />
                <p>Ben's experience, skills and education.</p>
              </Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <Link to="/projects">
                <Icon name="flask" size="massive" color="teal" />
                <br />
                <p>Recent projects undertaken as a developer.</p>
              </Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <Link to="/articles">
                <Icon name="newspaper outline" size="massive" color="teal" />
                <br />
                <p>Random articles and blogs written over the years.</p>
              </Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <Link to="/contact">
                <Icon name="at" size="massive" color="teal" />
                <br />
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
