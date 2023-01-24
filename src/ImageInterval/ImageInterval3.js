import React, { useState, useEffect } from "react";
import TP31 from "../assets/TP3-1.png";
import TP32 from "../assets/TP3-2.png";
import TP33 from "../assets/TP3-3.png";
import TP34 from "../assets/TP3-4.png";
import TP35 from "../assets/TP3-5.png";
import TP36 from "../assets/TP3-6.png";
import TP37 from "../assets/TP3-7.png";

const images = [TP31, TP32, TP33, TP34, TP35, TP36, TP37];

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
