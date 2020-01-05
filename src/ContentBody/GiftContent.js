import React, { Component } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";

import GiftSection from "../Gift/GiftSection";

const content = [
  {
    title: "Food and drink",
    intro:
      "I love fancy food and drinks. Anything for my very minimal cocktail bar is great.",
    ideasList: [
      "Basically anything from Hotel Chocolat",
      "Any tequila that isn't Jose Cuervo",
      "Vodka",
      "Coffee beans",
      "San Leo Prosecco (from Waitrose/Ocado)"
    ]
  }
];

class GiftContent extends Component {
  render() {
    document.title = "How to buy me a gift";
    return (
      <div className="GiftPage">
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <Container className="GiftIntroContent">
                <h2>
                  How to buy me <br />a gift
                </h2>
                <Divider hidden />
                <p>
                  Thanks for thinking about buying me a gift, that's very kind
                  of you. Here's a complete run down of things I like and don't
                  like. I hope this can help you think before purchasing
                  anything.
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <GiftSection item={content[0]} />
        <Divider hidden />
      </div>
    );
  }
}

export default GiftContent;
