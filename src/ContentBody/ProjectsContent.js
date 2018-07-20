import React, { Component } from 'react';
import { Button, Container, Divider, Embed, Grid, Icon } from 'semantic-ui-react'

class ProjectsContent extends Component {
  render() {
    document.title = 'Projects - Ben Furber';
    return (
      <Container className='ProjectsContent'>
        <h2>Projects</h2>
        <Grid stackable='true'>
          <Grid.Row>
            <Grid.Column width={5}>
              <img src='/images/email-workflow.png' alt='Email' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>Email Service</h3>
              <p>
                <Button.Group basic icon>
                  <Button icon size='tiny'>
                    <Icon inverted color='blue' size='large' name='node' />
                  </Button>
                  <Button icon size='tiny'>
                    <Icon inverted color='yellow' size='large' name='js' />
                  </Button>
                </Button.Group>
                {' '}
                <Button.Group basic icon>
                  <Button icon size='tiny'>
                    <Icon inverted color='blue' size='large' name='react' />
                  </Button>
                </Button.Group>
                {' '}
                <Button.Group basic icon>
                  <Button size='tiny'>
                    <Icon inverted color='orange' size='large' name='aws' />
                  </Button>
                </Button.Group>
                {' '}
                <Button.Group>
                  <Button basic size='tiny' color='red'>Jest</Button>
                </Button.Group>
              </p>

              <p>A project to mimic the basic functionality of how an email service works.</p>
              <p>This includes (nearly) all the basic elements you'd require for your own email service; a web client, API for the web client, Simple Mail Transfer Protocol (SMTP) server, Post Office Protocol (POP) server and database (that we're hosting on Amazon Web Services).</p>
              <p><a href='https://medium.com/@benfurber/so-we-decided-to-rebuild-email-how-hard-could-it-be-71a6a8fcced4'>I wrote an article about some of what I learned.</a></p>
              <p><a href='https://github.com/charmalt/final-project-main'><Button color='teal'>Github repo</Button></a></p>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Grid.Column width={5}>
              <img src='/images/bowling.png' alt='Bowling Challenge' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>Bowling Challenge</h3>
              <p>
                <Button.Group basic icon>
                  <Button icon size='tiny'>
                    <Icon inverted color='blue' size='large' name='react' />
                  </Button>
                  <Button icon size='tiny'>
                    <Icon inverted color='yellow' size='large' name='js' />
                  </Button>
                </Button.Group>
                {' '}
                <Button.Group>
                  <Button basic size='tiny' color='red'>Jest</Button>
                </Button.Group>
                {' '}
                <Button.Group>
                  <Button basic size='tiny' color='teal'>Semantic UI</Button>
                </Button.Group>
              </p>

              <p>Webapp that scores a single player game of bowling.</p>
              <p>I started by building the scoring logic, using as much JavaScript ES6 syntax as I knew. I wanted to build the frontend with React so setup a Node.js server with Jest for the testing.</p>
              <p>Once the scoring was done I started my first React project(!) I used Semantic UI as a design framework.</p>
              <p><a href='https://github.com/benfurber/bowling-challenge'><Button color='teal'>Github repo</Button></a></p>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Grid.Column width={5}>
              <img src='/images/makersbnb.png' alt='MakersBnb' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>MakersBnb</h3>
              <p>
                <Button.Group icon>
                  <Button basic size='tiny' color='red'>Ruby</Button>
                  <Button basic size='tiny' color='red'>Sinatra</Button>
                </Button.Group>
                {' '}
                <Button.Group>
                  <Button basic size='tiny' color='red'>RSpec</Button>
                  <Button basic size='tiny' color='purple'>Capybara</Button>
                </Button.Group>
                {' '}
                <Button.Group>
                  <Button basic size='tiny' color='teal'>Semantic UI</Button>
                </Button.Group>
              </p>

              <p>First group project at Makers Academy. In a week, a group of four of us built the basic functionality of AirBnb.</p>
              <p>Users can sign-up, add rooms and rent rooms. I focused a lot of my effort on the data models, ensuring they all interlinked correctly.</p>
              <p><a href='https://github.com/charmalt/makersbnb'><Button color='teal'>Github repo</Button></a></p>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Grid.Column width={5}>
              <Embed id='WKA7n4LDPkc' placeholder='' source='youtube' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>Alexa Skill - Dog Translator</h3>
              <p>
                <Button.Group basic icon>
                  <Button icon size='tiny'>
                    <Icon inverted color='yellow' size='large' name='js' />
                  </Button>
                </Button.Group>
                {' '}
                <Button.Group basic icon>
                  <Button size='tiny'>
                    <Icon inverted color='orange' size='large' name='aws' />
                  </Button>
                </Button.Group>
              </p>

              <p>A basic Alexa app that takes the user's command and whoofs back at them. It is very sophisticated.</p>
              <p>For some reason this silly little thing has been used 9,000 times!	</p>
              <p><a href='https://www.amazon.co.uk/Ben-Furber-Dog-Translator/dp/B07B28NH9G/'><Button color='teal'>On the Amazon store</Button></a></p>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Grid.Column width={5}>
              <img src='/images/dashboard.png' alt='Data Visualisation Dashboard' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>Data Visualisation Dashboard</h3>
              <p>
                <Button.Group basic icon>
                  <Button icon size='tiny'>
                    <Icon inverted color='yellow' size='large' name='js' />
                  </Button>
                  <Button icon size='tiny'>
                    <Icon inverted color='green' size='large' name='node' />
                  </Button>
                </Button.Group>
                {' '}
                <Button.Group basic icon>
                  <Button size='tiny'>D3</Button>
                  <Button size='tiny'>chart.js</Button>
                </Button.Group>
                {' '}
                <Button.Group icon>
                  <Button basic size='tiny' color='purple'>Bootstrap</Button>
                </Button.Group>
              </p>

              <p>A small project to play around with data files. It can import a CSV, manipulates and turns it into JSON and then visualises it.</p>
              <p>I did this before learning Test Driven Development so please forgive me.</p>
              <p><a href='https://github.com/benfurber/datadashboard'><Button color='teal'>Github repo</Button></a></p>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Grid.Column width={5}>
              <img src='/images/fishnet.png' alt='Fishnet' />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>Fishnet</h3>
              <p>
                <Button.Group icon>
                  <Button basic color='red' size='tiny'>Ruby on Rails</Button>
                </Button.Group>
                {' '}
                <Button.Group basic icon>
                  <Button size='tiny'>Devise</Button>
                </Button.Group>
                {' '}
                <Button.Group icon>
                  <Button basic size='tiny' color='red'>RSpec</Button>
                  <Button basic size='tiny' color='purple'>Capybara</Button>
                </Button.Group>
                {' '}
                <Button.Group icon>
                  <Button basic size='tiny' color='purple'>Bootstrap</Button>
                </Button.Group>
              </p>

              <p>Fortnight long four person group project at Makers.</p>
              <p>Built the basic functionality of a social media platform and most importantly get it deployed.</p>
              <p>We used Devise for the user authentication and ActiveRecords for the datamapping to Postgres.</p>
              <p>I focused more on the getting our continuous deployment setup on AWS, <a href='https://medium.com/@benfurber/a-few-things-ive-learned-that-s-made-aws-less-scary-f5600f7e662a'>I also wrote a blog post about the 'fun' I had with it</a>.</p>
              <p><a href="http://fishes.eu-west-2.elasticbeanstalk.com/"><Button color='teal'>Live</Button></a><a href='https://github.com/ZoeKavanagh/fishnet'><Button>Github repo</Button></a></p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default ProjectsContent;
