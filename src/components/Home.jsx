import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router and ReactBoostrap</p>
            <Link to='/about'>
              <Button bsStyle="primary">About</Button>
            </Link>
          </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/mistyknight2.png' circle className='profile-pic'/>
            <h3>Misty Knight</h3>
            <p>A former NYPD cop with a bionic arm, martial arts skills, and an attitude who was involved with the Heroes for Hire operation for years.</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/valkyrie.jpg' circle className='profile-pic'/>
            <h3>Valkyrie</h3>
            <p>The Asgardian goddess Brunnhilde is one of Asgard's mightiest warriors and the leader of the Valkyrior, Odin's choosers of the slain. Known simply as "Valkyrie" outside of Asgard, she is a long-time member of the Defenders and more recently also a member of the Avengers.</p>
                      </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/danimoonstar.gif' circle className='profile-pic'/>
            <h3>Dani Moonstar</h3>
            <p>A Native American and member of the original New Mutants, Dani Moonstar was one of many mutants to lose their powers on M-Day. Moonstar currently uses her skills, experience and combat prowess to fight against evil as Hel's Valkyrie and one of the Fearless Defenders.</p>
          </Col>
        </Row>
      </Grid>

    )
  }
}
