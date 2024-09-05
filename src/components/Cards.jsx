import React, { useState } from "react";
import Images from "../images";

function Cards() {
  const [selectedImage, setSelectedImage] = useState(Images[0]);

  return (
    <div className="cards-div">
      <div className="selected-image">
        <img src={selectedImage} alt="" className="image" />
      </div>
      <div className="images">
        {Images.map((img, index) => (
          <img
            src={img}
            alt="doner"
            key={index}
            className="image"
            onClick={() => setSelectedImage(Images[index])}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
