import React, { Component } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";

class GiftSection extends Component {
  constructor(props) {
    super(props);

    const { ideasList } = this.props.item;

    this.state = {
      hasIdeas: ideasList && ideasList.length > 0
    };
  }

  renderSpecifics() {
    const { ideasList } = this.props.item;
    const { hasIdeas } = this.state;

    if (hasIdeas) {
      return (
        <Grid.Column className="GifIdeas">
          <div className="borderRow">
            <div className="border borderTopLeft" />
            <div className="border borderTopRight" />
          </div>

          <Container className="GifIdeasBody">
            <h4>Specifics:</h4>
            <ul>
              {ideasList.map(idea => {
                return <li>{idea}</li>;
              })}
            </ul>
          </Container>

          <div className="borderRow">
            <div className="border borderBottomLeft" />
            <div className="border borderBottomRight" />
          </div>
        </Grid.Column>
      );
    }
  }

  renderWishListLinks() {
    const { title, wishListLinks } = this.props.item;

    if (wishListLinks && wishListLinks.length > 0) {
      return wishListLinks.map(({ link, website }) => {
        return (
          <a className="WishListLink" href={link}>
            Wishlist for {title} on {website}
          </a>
        );
      });
    }

    return null;
  }

  render() {
    const { intro, title } = this.props.item;
    const { hasIdeas } = this.state;

    return (
      <Grid className="GiftSection" padded>
        <Grid container stackable>
          <Grid.Row columns={hasIdeas ? 2 : 1} container>
            <Grid.Column>
              <h3>{title && title}</h3>
              <p>{intro && intro}</p>
            </Grid.Column>
            {this.renderSpecifics()}
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Container textAlign="center" padded>
          {this.renderWishListLinks()}
        </Container>
        <Divider hidden />
      </Grid>
    );
  }
}

export default GiftSection;
