import React, { Component } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";
import ArticleSnippet from "../ArticleSnippet/ArticleSnippet";

class ArticlesContent extends Component {
  render() {
    document.title = "Articles - Ben Furber";
    return (
      <Container className="ArticlesContent">
        <Divider hidden />

        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={12}>
              <ArticleSnippet
                link="https://medium.com/@benfurber/so-finally-im-going-to-be-a-developer-32b678e59126"
                title="So (finally?) I'm going to be a developer"
                date="09/04/18"
                body="If you were a nerdy teen around the turn of the millennium you wanted to be Bill Gates, right?
                He was the only tech genius/billionaire in town and we had these clever metal boxes in our homes he’d built just for us.
                Back then I wanted to be Bill Gates, yet it’s only recently I’ve accepted a lesson I should have learnt 20 years;
                before these giants of technology built the future we now live in, most of them learnt to be coders."
              />
              <ArticleSnippet
                link="https://medium.com/@benfurber/so-we-decided-to-rebuild-email-how-hard-could-it-be-71a6a8fcced4"
                title="So we decided to rebuild email, how hard could it be..?"
                date="06/07/18"
                body="For our final project at Makers (ten days of coding), five of us decided to mimic the basic functionality of how an email service works. We didn't know much about email, so we thought we'd find out."
              />
              <ArticleSnippet
                link="https://medium.com/@benfurber/a-few-things-ive-learned-that-s-made-aws-less-scary-f5600f7e662a"
                title="A few things I’ve learned that’s made AWS less scary"
                date="12/06/18"
                body="It’s quite the understatement say logging into Amazon Web Services as a junior developer is scary AF."
              />
              <ArticleSnippet
                link="https://medium.com/@benfurber/getting-my-head-around-testing-one-thing-means-one-thing-e66d281ef192"
                title="Getting my head around testing, ONE THING MEANS ONE THING"
                date="09/05/18"
                body="In the last few weeks though everything we’ve been coding at Makers has been test driven so I thought I’d rant one thing that’s taken ages to sink in, one thing means one thing."
              />
              <ArticleSnippet
                link="https://medium.com/@benfurber/so-i-m-officially-a-founder-now-what-ca88c9516408"
                title="So I’m officially a founder, now what?"
                date="28/09/15"
                body="I remember getting a treasure chest for my eighth birthday.
                An actual treasure chest. But that wasn’t it.
                There were other gifts ­in the treasure chest!
                I would have been happy with those two bits of black and gold plastic.
                I hope the surprise and amazement on my face seeing all those other bits made the running around my mum must have done worth it."
              />
              <ArticleSnippet
                link="https://medium.com/@benfurber/so-i-ve-hit-a-wall-what-now-b07bbc60f75a"
                title="So I’ve hit a wall, what now?"
                date="15/01/16"
                body="My attempt to change the gift market with The Gifting Co., take over the world and be superduper amazeballs has hit a wall. At least for the moment. Which is really annoying."
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default ArticlesContent;
