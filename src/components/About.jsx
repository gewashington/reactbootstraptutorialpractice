import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap'
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/croppedfog.jpg" className="header-image"  />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/mistyknight2.png" className="about-profile-pic" rounded />
            <h3>Misty Knight</h3>
            <p>
              Misty Knight's a highly-decorated police officer, those former days on the force jarred to a halt when she lost her right arm to a terrorist's bomb. Tony Stark arranged for her to receive a bionic prosthetic replacement limb in recognition of her bravery. Against taking a desk job for the police, she resigned and became a private investigator, with her friend Colleen Wing. While trying to stop the villain Emil Vachon in Hong Kong, Colleen was almost raped but Misty Knight was able to save her. The two then setup Knightwing Restorations Ltd, nicknamed the Daughter of the Dragon, and often dealt with cases nobody else was willing to resolve.
              After Shadowland, the Heroes for Hire team is overhauled by Misty, with herself as ‘control’, and she uses the powers and abilities of other street level heroes and either pays them money or gives them information. Misty is exposed as being mind controlled by the Puppet Master, but a short time later Iron Fist and Paladin release her and make a deal with Misty to proceed with the Puppet Master’s plan but under conditions established by Misty.
            </p>
          </Col>
        </Grid>
      </div>

    )
  }
}
