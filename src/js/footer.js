import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../css/footer.css';
import FontAwesome from'react-fontawesome';


export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Container>
          <h3>Learn More!</h3>
          <div className="dash"></div>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/"><FontAwesome name="github"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kdelalic/"><FontAwesome name="linkedin"/></a></li>
          </ul>
          <p>Karlo Delalic 2017</p>
          <p>Made with HTML, CSS, Bootstrap, Font Awesome, and lots of <FontAwesome name="heart-o"/></p>
        </Container>
      </div>
    );
  }
}