import React, { Component } from 'react'

import HomeContent from './ContentBody/HomeContent'
import AboutContent from './ContentBody/AboutContent'
import ProjectsContent from './ContentBody/ProjectsContent'
import ArticlesContent from './ContentBody/ArticlesContent'
import ContactContent from './ContentBody/ContactContent'

import { Container, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppHeader from './AppHeader/AppHeader'

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App" textAlign="center">
          <Divider hidden="true" />
          <AppHeader />
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/about/" component={AboutContent} />
            <Route path="/projects/" component={ProjectsContent} />
            <Route path="/articles/" component={ArticlesContent} />
            <Route path="/contact/" component={ContactContent} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
