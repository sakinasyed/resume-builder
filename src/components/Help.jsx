import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Template from "../assets/template.png";
import Details from "../assets/details.png";
import Download from "../assets/download.png";

function Help(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1200, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="help" id="help">
        <Container>
          <h2>Create your Professional resume with just three easy steps</h2>
          <div className="row">
            <div className="col-12">
              <div className="help-bx wow zoomIn">
                <Carousel
                  responsive={responsive}
                  infinite={false}
                  className="owl-carousel owl-theme help-slider"
                >
                  <div className="item-help">
                    <img className="help-img" src={Template} alt="Image"></img>
                    <h5>Pick a Template</h5>
                    <p>Chose any template and personalize to your style.</p>
                  </div>
                  <div className="item-help">
                    <img className="help-img" src={Details} alt="Image"></img>
                    <h5>Fill in your details</h5>
                    <p>
                      Fill in the blanks with the personal and professional
                      details.
                    </p>
                  </div>
                  <div className="item-help">
                    <img className="help-img" src={Download} alt="Image"></img>
                    <h5>Download</h5>
                    <p>Download your resume and share it.</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Help;
