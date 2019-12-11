import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ clearQueue }) => {
  const handleClearQueue = () => {
    clearQueue();
  };
  return (
    <Navbar bg="dark" expand="xl" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className={"header-navbar"}>
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
          <Link to="/recordings">
            <Button className="nav-button" variant="dark">
              Recordings
            </Button>
          </Link>
          <Button
            onClick={handleClearQueue}
            className="nav-button clear-queue"
            variant="danger"
          >
            CLEAR ACTION QUEUE
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
