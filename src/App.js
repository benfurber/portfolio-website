import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutContent from "./ContentBody/AboutContent";
import ArticlesContent from "./ContentBody/ArticlesContent";
import ContactContent from "./ContentBody/ContactContent";
import GiftContent from "./ContentBody/GiftContent";
import HomeContent from "./ContentBody/HomeContent";
import ProjectsContent from "./ContentBody/ProjectsContent";

import AppHeader from "./AppHeader/AppHeader";
import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppHeader />
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/about/" component={AboutContent} />
            <Route path="/projects/" component={ProjectsContent} />
            <Route path="/articles/" component={ArticlesContent} />
            <Route path="/contact/" component={ContactContent} />
            <Route path="/gift/" component={GiftContent} />

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
        </div>
      </Router>
    );
  }
}

export default App;
