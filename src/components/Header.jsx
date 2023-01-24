import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [colorChange, setcolorChange] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <section className="home" id="home">
      <Navbar
        expand="md"
        id="navbar"
        className={colorChange ? "navbar colorChange" : "navbar"}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="header-logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="basic-nav">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/templates"}>
                Resume Templates
              </Nav.Link>
              <Nav.Link as={Link} to={"/help"}>
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
