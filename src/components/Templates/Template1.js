import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageInterval1 from "../../ImageInterval/ImageInterval1";

function Template1(props) {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div>
      <div className="show-button-hover">
        <div
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <ImageInterval1 />

          <Button
            as={Link}
            to={"/body1"}
            className="show-button-hover-button"
            style={style}
            // variant="primary"
          >
            Use Template
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Template1;
