import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Link to="/improvisation">
            <Button className="nav-button" variant="dark">
              Improvisation
            </Button>
          </Link>
          <Link to="/scenarios">
            <Button className="nav-button" variant="dark">
              Scenarios
            </Button>
          </Link>
          <Link to="/media">
            <Button className="nav-button" variant="dark">
              Media
            </Button>
          </Link>
          <Link to="/settings">
            <Button className="nav-button" variant="dark">
              Settings
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
