import React, { Component } from 'react';
import { Button, Grid, Icon, Segment } from 'semantic-ui-react'

class ArticleSnippet extends Component {
  render() {
    const link = this.props.link
    const title = this.props.title
    const date = this.props.date
    const body = this.props.body

    return (
      <Segment piled className='ArticleSnippet'>
        <h3><a href={link}>{title}</a> - {date}</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
              <Icon name='quote left' color='grey' size='huge' />
            </Grid.Column>

            <Grid.Column width={14}>
              <p>{body}</p>
              <p>...</p>
              <a href={link}>
                <Button icon labelPosition='left' floated='right' color='teal'>
                  <Icon name='medium' /> Read the full post
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
