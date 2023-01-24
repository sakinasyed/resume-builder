import React, { useState, useEffect } from "react";
import TP21 from "../assets/TP2-1.png";
import TP22 from "../assets/TP2-2.png";
import TP23 from "../assets/TP2-3.png";
import TP24 from "../assets/TP2-4.png";
import TP25 from "../assets/TP2-5.png";
import TP26 from "../assets/TP2-6.png";
import TP27 from "../assets/TP2-7.png";

const images = [TP21, TP22, TP23, TP24, TP25, TP26, TP27];

function ImageInterval2(props) {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img className="template-image" src={currentImage} />
    </div>
  );
}

export default ImageInterval2;
