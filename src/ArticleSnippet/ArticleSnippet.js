import React, { Component } from "react";
import { Button, Grid, Icon, Segment } from "semantic-ui-react";

class ArticleSnippet extends Component {
  render() {
    const { body, date, icon, link, title } = this.props;
    const iconName = icon || "medium";

    return (
      <Segment piled className="ArticleSnippet">
        <h3>
          <a href={link}>{title}</a> - {date}
        </h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} textAlign="center">
              <Icon name="quote left" color="grey" size="big" />
            </Grid.Column>

            <Grid.Column width={14}>
              <p>{body}</p>
              <p>...</p>
              <a href={link}>
                <Button icon labelPosition="left" floated="right" color="black">
                  <Icon name={iconName} /> Read the full post
                </Button>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ArticleSnippet;
