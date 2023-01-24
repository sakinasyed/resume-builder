import React, { useState } from "react";
import styles from "./InputControl.module.css";

function ImageControl(props) {
  const [file, setFile] = useState();
  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={styles.imageDisplay}>
      <label className="select-image">Select Image </label>
      <br />
      <input type="file" onChange={handleChange} value={""} />

      <img src={file} alt="" />
    </div>
  );
}

export default ImageControl;
