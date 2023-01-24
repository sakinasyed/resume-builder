import React, { useState, useEffect } from "react";
import TP41 from "../assets/TP4-1.png";
import TP42 from "../assets/TP4-2.png";
import TP43 from "../assets/TP4-3.png";
import TP44 from "../assets/TP4-4.png";
import TP45 from "../assets/TP4-5.png";
import TP46 from "../assets/TP4-6.png";
import TP47 from "../assets/TP4-7.png";

const images = [TP41, TP42, TP43, TP44, TP45, TP46, TP47];

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
