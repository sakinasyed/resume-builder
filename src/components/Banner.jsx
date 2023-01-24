import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Banner(props) {
  return (
    <div>
      <section className="banner" id="">
        <Container>
          <Row className="aligh-items-center h">
            <Col xs={2} md={6} xl={6}>
              <h1>
                Free Online <br />
                Resume Builder
              </h1>
            </Col>
          </Row>
          <Row className="aligh-items-center p">
            <Col xs={6} md={6} xl={10}>
              <p>
                Build a Professional resume that stands out! <br /> quickly,
                easily and for free.{" "}
              </p>
              <Button
                as={Link}
                to={"/templates"}
                size="lg"
                className="custom-btn"
              >
                Create your Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
