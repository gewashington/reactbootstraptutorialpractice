import React, { Component } from 'react';
import './News.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
;
export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/croppedconifers.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <p>
                  Bacon ipsum dolor amet turducken pig cow shank turkey. Sirloin bresaola ground round drumstick spare ribs ball tip short ribs shoulder turkey rump tongue ribeye pancetta porchetta buffalo. T-bone spare ribs cow, ribeye hamburger boudin kevin jowl. Bacon frankfurter venison boudin shank. Jowl leberkas strip steak frankfurter shank shoulder sirloin ham hock kevin alcatra flank. Beef ribs doner biltong t-bone, prosciutto frankfurter bresaola drumstick swine spare ribs short ribs porchetta fatback tri-tip pork loin.
                </p>
              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
                <Image src="assets/croppedfog.jpg" />
                <p>Andouille kevin beef ribs chuck spare ribs strip steak. Leberkas jowl shoulder strip steak kielbasa biltong. Sirloin tongue tri-tip strip steak bacon. Frankfurter burgdoggen venison tongue doner short ribs, jowl pig strip steak porchetta biltong kevin.</p>
              </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}
