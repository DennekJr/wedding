import React from "react";
import "./photos.styles.css";

export const Photos = () => {
  // const classes = useStyles();
  return (
    <div className="photosContainer">
      <h2>Photos</h2>
      <div className="photosDivider">
        <hr />
        <span>.</span>
        <hr />
      </div>
      <div className="imageGrid">
        <div className="gridRow">
          <div>
            <img src="/images/image1.jpg" alt="first" />
          </div>
          <div>
            <img src={"/images/image2.jpg"} alt="second" />
          </div>
          <div>
            <img src={"/images/image3.jpg"} alt="Third" />
          </div>
          <div>
            <img src={"/images/image4.jpg"} alt="fourth" />
          </div>
          <div>
            <img src={"/images/image5.jpg"} alt="fifth" />
          </div>
          <div>
            <img src={"/images/image6.jpg"} alt="Sixth" />
          </div>
          <div>
            <img src={"/images/image8.jpg"} alt="eight" />
          </div>
          <div>
            <img src={"/images/image9.jpg"} alt="ninth" />
          </div>
          <div>
            <img src={"/images/image10.jpg"} alt="tenth" />
          </div>
          <div>
            <img src={"/images/image15.jpg"} alt="fifteenth" />
          </div>
          <div>
            <img src={"/images/image11.jpg"} alt="eleventh" />
          </div>
          <div>
            <img src={"/images/image12.jpg"} alt="twelfth" />
          </div>
          <div>
            <img src={"/images/image14.jpg"} alt="fourteenth" />
          </div>
          <div>
            <img src={"/images/image13.jpg"} alt="thirteenth" />
          </div>
        </div>
      </div>
    </div>
  );
};
