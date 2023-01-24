import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import Template4 from "./Template4";

function Templates(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1400, min: 1000 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="templates" id="templates">
        <Container>
          <h2>Land your dream job with the help of our resume.</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
          >
            <div className="item-template">
              <Template1 />
            </div>
            <div className="item-template">
              <Template2 />
            </div>
            <div className="item-template">
              <Template3 />
            </div>
            <div className="item-template">
              <Template4 />
            </div>
          </Carousel>
        </Container>
      </section>
    </div>
  );
}
export default Templates;
