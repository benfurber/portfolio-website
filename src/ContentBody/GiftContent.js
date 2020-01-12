import React, { Component } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";

import GiftSection from "../Gift/GiftSection";
import GiftSectionMenu from "../Gift/GiftSectionMenu";

const giftAreas = [
  {
    title: "Cooking",
    intro:
      "A lot of my kitchen kit is surprisingly simple, so there's lots I'd love upgrades for.",
    ideasList: [
      "Replacement equipment (items in wishlist)",
      "A nice bottle of fancy olive oil",
      "Tins and jars of ingredients that aren't carbs"
    ],
    wishListLinks: [
      {
        link:
          "https://www.amazon.co.uk/hz/wishlist/ls/3L5C32WRFEODI?ref_=wl_share",
        website: "Amazon"
      }
    ]
  },
  {
    title: "Books",
    intro:
      "I basically only read sci-fi, comics and cooking/cook books. If a book isn't in one of those categories I'm probably not going to read it. Always happy to get books second-hand!",
    wishListLinks: [
      {
        link:
          "https://www.amazon.co.uk/hz/wishlist/ls/13YQZE69VOGK2?ref_=wl_share",
        website: "Amazon"
      }
    ]
  },
  {
    title: "Prints",
    intro: "Always loads of bits of art I've got my eye on.",
    wishListLinks: [
      {
        link:
          "https://www.juniqe.co.uk/wishlist/13114727-5afb-44e5-8c0c-5b2058b9a4c8",
        website: "JUNIQE"
      },
      {
        link: "https://www.etsy.com/people/benfurber",
        website: "Etsy"
      }
    ]
  },
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
  },
  {
    title: "Tech and games",
    intro:
      "I don't have much for the Nintendo Switch and there's a few tech bits I'd make good use of.",
    wishListLinks: [
      {
        link:
          "https://www.amazon.co.uk/hz/wishlist/ls/NMPGKSJ3HOQW?ref_=wl_share",
        website: "Amazon"
      },
      {
        link:
          "https://store.steampowered.com/wishlist/profiles/76561198051857919/#sort=order",
        website: "Steam"
      }
    ]
  },
  {
    title: "Random",
    ideasList: [
      "LEGO!",
      "Candles (without a sweet scent)",
      "Plug powered fairy lights (ideally with a remote)"
    ]
  }
];

class GiftContent extends Component {
  renderGiftSectionList() {
    return giftAreas.map((item, index) => {
      return <GiftSection item={item} index={index} />;
    });
  }

  render() {
    document.title = "How to buy me a gift";

    return (
      <div className="GiftPage">
        <Container>
          <Grid padded stackable>
            <Grid.Row>
              <Grid.Column className="GiftIntroContent" width="11">
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <GiftSectionMenu items={giftAreas} />
        {this.renderGiftSectionList()}
        <Divider hidden />
      </div>
    );
  }
}

export default GiftContent;
