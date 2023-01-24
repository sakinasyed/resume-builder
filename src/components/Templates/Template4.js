import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ImageInterval4 from "../../ImageInterval/ImageInterval4";
import { Link } from "react-router-dom";
function Template4(props) {
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
          <ImageInterval4 />
          <Button
            as={Link}
            to={"/body4"}
            className="show-button-hover-button"
            style={style}
            variant="primary"
          >
            Use Template
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Template4;
