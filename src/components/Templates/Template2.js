import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ImageInterval2 from "../../ImageInterval/ImageInterval2";
import { Link } from "react-router-dom";
function Template2(props) {
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
          <ImageInterval2 />
          <Button
            as={Link}
            to={"/body2"}
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

export default Template2;
