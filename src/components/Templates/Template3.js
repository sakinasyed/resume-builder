import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ImageInterval3 from "../../ImageInterval/ImageInterval3";
import { Link } from "react-router-dom";
function Template3(props) {
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
          <ImageInterval3 />
          <Button
            as={Link}
            to={"/body3"}
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

export default Template3;
