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
        <Grid className="GifIdeas" centered container stackable>
          <Grid.Row container>
            <Grid.Column centered container>
              <div className="borderRow">
                <div className="border borderTopLeft" />
                <div className="border borderTopRight" />
              </div>
              <Grid className="GifIdeasBody" stackable padded="none">
                <Grid.Row className="GifIdeasBody" container>
                  <Grid.Column width={16}>
                    <h4>Specifics:</h4>
                  </Grid.Column>

                  {ideasList.map(idea => {
                    return (
                      <Grid.Column className="idea" width={8}>
                        <p>{idea}</p>
                      </Grid.Column>
                    );
                  })}
                </Grid.Row>
              </Grid>
              <div className="borderRow">
                <div className="border borderBottomLeft" />
                <div className="border borderBottomRight" />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }

  renderWishListLinks() {
    const { title, wishListLinks } = this.props.item;

    if (wishListLinks && wishListLinks.length > 0) {
      return (
        <Grid.Row container>
          <Container padded>
            {wishListLinks.map(({ link, website }) => {
              return (
                <a className="WishListLink" href={link}>
                  Wishlist for {title} on {website}
                </a>
              );
            })}
          </Container>
        </Grid.Row>
      );
    }

    return null;
  }

  render() {
    const { index, item } = this.props;
    const { intro, title } = item;

    const backgroundStyle = index % 2 ? "GiftSection-odd" : "GiftSection-even";

    return (
      <Grid className={`GiftSection ${backgroundStyle}`} padded="vertically">
        <Container>
          <Grid padded="vertically" container stackable>
            <Grid.Row container>
              <Grid.Column width="11">
                <h3>{title && title}</h3>
                <p className="GiftSectionIntro">{intro && intro}</p>
              </Grid.Column>
            </Grid.Row>

            <Divider hidden />
            {this.renderSpecifics()}
            <Divider hidden />

            {this.renderWishListLinks()}
            <Divider hidden />
          </Grid>
        </Container>

        <Divider hidden />
      </Grid>
    );
  }
}

export default GiftSection;
