import React, { Component } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";

class GiftSectionMenu extends Component {
  render() {
    const { items } = this.props;

    return (
      <Grid className="GiftSectionMenu" padded="vertically">
        <Container>
          <Grid className="ContainerBordered" container padded stackable>
            <Grid.Row container>
              <Grid.Column centered container>
                <div className="borderRow">
                  <div className="border borderTopLeft">
                    <div className="top" />
                    <div className="left" />
                  </div>
                  <div className="border borderTopRight">
                    <div className="top" />
                    <div className="right" />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column centered>
                <Grid
                  className="ContainerBorderedBody"
                  padded="horizontal"
                  stackable
                >
                  <Grid.Row columns="3" container>
                    {items.map((item, index) => {
                      return (
                        <Grid.Column className="ContentsListItem" key={index}>
                          <p>
                            <a href={`#gift-${index}`}>
                              <span className="Number">0{index + 1}.</span>{" "}
                              {item.title}
                            </a>
                          </p>
                        </Grid.Column>
                      );
                    })}
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row container>
              <Grid.Column centered container>
                <div className="borderRow">
                  <div className="border borderBottomLeft">
                    <div className="left" />
                    <div className="bottom" />
                  </div>
                  <div className="border borderBottomRight">
                    <div className="right" />
                    <div className="bottom" />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Divider hidden />
      </Grid>
    );
  }
}

export default GiftSectionMenu;
