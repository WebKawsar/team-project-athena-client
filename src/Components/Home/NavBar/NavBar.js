import React from "react";
import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../athena-design-resources/Illustration/logo.png";
const NavBar = () => {
  return (
    <nav className="pt-4 container nav-text">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#home">
          {" "}
          <img className="logo" src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-3">Home</Nav.Link>
            <Nav.Link className="mr-3">About</Nav.Link>
            <Nav.Link className="mr-3">Services</Nav.Link>
            <Nav.Link className="mr-3">Pricing</Nav.Link>
            <Nav.Link className="mr-3">Our Team</Nav.Link>
            <button className="green-btn">Contact us</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
