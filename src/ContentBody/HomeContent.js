import React, { Component } from "react";
import { Container, Divider, Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class HomeContent extends Component {
  render() {
    document.title = "Ben Furber";
    return (
      <Container className="HomeContent">
        <Grid stackable="true">
          <Grid.Row>
            <Grid.Column width={12}>
              <Divider hidden />
              <p>
                Ben is a developer and product manager. He has worked in tech
                for 13 years across a range of disciplines - development,
                design, product and team management.
              </p>
              <Divider hidden />

              <Link to="/about">
                <p>
                  <Icon name="user" size="big" color="black" /> Ben's
                  experience, skills and education.
                </p>
              </Link>
              <Divider hidden />

              <Link to="/projects">
                <p>
                  <Icon name="flask" size="big" color="black" />
                  Recent projects undertaken as a developer.
                </p>
              </Link>
              <Divider hidden />

              <Link to="/articles">
                <p>
                  <Icon name="newspaper outline" size="big" color="black" />
                  Random articles and blogs written over the years.
                </p>
              </Link>
              <Divider hidden />

              <Link to="/contact">
                <p>
                  <Icon name="at" size="big" color="black" />
                  Emails and all the social media.
                </p>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default HomeContent;
