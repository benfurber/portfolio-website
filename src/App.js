import React, { Component } from "react";

import HomeContent from "./ContentBody/HomeContent";
import AboutContent from "./ContentBody/AboutContent";
import ProjectsContent from "./ContentBody/ProjectsContent";
import ArticlesContent from "./ContentBody/ArticlesContent";
import ContactContent from "./ContentBody/ContactContent";

import { Container, Divider } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "./AppHeader/AppHeader";

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Divider hidden="true" />
          <AppHeader />
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/about/" component={AboutContent} />
            <Route path="/projects/" component={ProjectsContent} />
            <Route path="/articles/" component={ArticlesContent} />
            <Route path="/contact/" component={ContactContent} />

            <Route
              path="/dog"
              component={() =>
                (window.location =
                  "https://www.amazon.co.uk/Ben-Furber-Dog-Translator/dp/B07B28NH9G/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1523111280&sr=1-1&keywords=dog+translator")
              }
            />
            <Route
              path="/feedback"
              component={() =>
                (window.location = "https://benfurber.typeform.com/to/IugCMF")
              }
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
