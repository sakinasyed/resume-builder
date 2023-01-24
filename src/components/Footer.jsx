import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} id="footer-logo">
              <img className="logo" src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
