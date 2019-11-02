import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";

class AboutPanelExperience extends Component {
  render() {
    return (
      <Container text className="AboutPanelExperience">
        <Container>
          <h3>Developer roles</h3>
          <p>
            <strong>Technical Coach (pathway)</strong>, Makers (September 2019 -
            present)
            <br />
            Technical and on the job coaching for first year developers.
          </p>
          <p>
            <strong>Developer/consultant</strong>, thoughtbot (August 2018 -
            September 2019)
            <br />
            Working with founders, early stage and growth companies to build
            amazing products and technology teams.
          </p>
          <p>
            <strong>Student developer</strong>, Makers (April 2018 - July 2018)
          </p>
        </Container>
        <Divider hidden />
        <Divider />
        <Divider hidden />
        <Container>
          <h3>Product management roles</h3>
          <p>
            <strong>Senior Digital Channels Manager</strong> (maternity cover),
            Marie Curie (July 2017 - April 2018)
            <br />
            <strong>Digital Communications Programme Manager</strong>, Institute
            of Physics (March 2016 - July 2017)
          </p>
          <p>
            Successfully managed the maturing of established digital products.
            Turning business needs all the way through the product development
            cycle. Establishing and running SCRUM teams as well as looking after
            design, analytics and user experience.
          </p>
        </Container>
        <Divider hidden />
        <Divider />
        <Divider hidden />
        <Container>
          <h3>The few months in startup land</h3>
          <p>
            <strong>Founder</strong>, The Gifting Co. (Full-time: September 2015
            - January 2016)
          </p>
          <p>
            Turned my vision for a gift buying service into a business. Received
            an early stage investment from Forward Partners - a venture capital
            fund.
          </p>
          <p>
            <a href="https://medium.com/@benfurber/so-i-m-officially-a-founder-now-what-ca88c9516408">
              I wrote this at the start of that journey
            </a>{" "}
            and{" "}
            <a href="https://medium.com/@benfurber/so-i-ve-hit-a-wall-what-now-b07bbc60f75a">
              this at the end
            </a>
            .
          </p>
        </Container>
        <Divider hidden />
        <Divider />
        <Divider hidden />
        <Container>
          <h3>Website management</h3>
          <p>
            <strong>Consultant</strong>, main client Crimestoppers (November
            2014 - September 2015)
            <br />
            <strong>Digital Communications Manager</strong>, Asthma UK (January
            2013 - November 2014)
            <br />
            <strong>Digital Communications Officer</strong>, Trade Union
            Congress (September 2011 - January 2013)
          </p>
          <p>
            Managed thriving large, content driven websites for non-profits.
            Twice project managed the rebuild and redesign of the Content
            Management Systems. Extensive copywriting/editing and campaign
            management.
          </p>
        </Container>
        <Divider hidden />
        <Divider />
        <Divider hidden />
        <Container>
          <h3>Website designer</h3>
          <p>Freelancer (July 2006 - July 2011)</p>
          <p>
            Delivered the design and build projects (on Wordpress) for dozens
            and dozens of small clients. Often sub-contracted from agencies.
            Worked extensively on CSS frameworks like Bootstrap.
          </p>
        </Container>
      </Container>
    );
  }
}

export default AboutPanelExperience;
