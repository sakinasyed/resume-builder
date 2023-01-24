import React, { useState, useEffect } from "react";
import TP2 from "../assets/TP2.png";
import TP3 from "../assets/TP3.png";
import TP4 from "../assets/TP4.png";
import TP5 from "../assets/TP5.png";
import TP6 from "../assets/TP6.png";
import TP7 from "../assets/TP7.png";
import TP1 from "../assets/TP1.png";

const images = [TP1, TP2, TP3, TP4, TP5, TP6, TP7];

function ImageInterval1(props) {
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

export default ImageInterval1;
