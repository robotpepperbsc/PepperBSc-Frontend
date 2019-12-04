import React, {Component} from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./ImprovisationNavbar.scss";

export default class ImprovisationNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="improvisation-navbar">
          <Navbar bg="custom-dark" expand="md" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="mr-auto">
                <Link to="/improvisation/speech">
                  <Button className="improvisation nav-button" variant="dark">
                    Speech
                  </Button>
                </Link>
                <Link to="/improvisation/moves">
                  <Button className="improvisation nav-button" variant="dark">
                    Moves
                  </Button>
                </Link>
                <Link to="/improvisation/display">
                  <Button className="improvisation nav-button" variant="dark">
                    Display media
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
