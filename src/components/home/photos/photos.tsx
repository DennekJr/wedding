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
            <img src="/images/image1.jpeg" alt="first" />
          </div>
          <div>
            <img src={"/images/image2.jpeg"} alt="second" />
          </div>
          <div>
            <img src={"/images/image3.jpeg"} alt="Third" />
          </div>
          <div>
            <img src={"/images/image4.jpeg"} alt="fourth" />
          </div>
          <div>
            <img src={"/images/image5.jpeg"} alt="fifth" />
          </div>
          <div>
            <img src={"/images/image6.jpeg"} alt="Sixth" />
          </div>
          <div>
            <img src={"/images/image7.jpg"} alt="seventh" />
          </div>
          <div>
            <img src={"/images/image8.jpg"} alt="eight" />
          </div>
          <div>
            <img src={"/images/image9.jpg"} alt="ninth" />
          </div>
          <div>
            <img src={"/images/image10.jpg"} alt="tenth" />
            <img
              src={"/images/image15.jpg"}
              alt="Fifth Image"
              width={400}
              height={600}
            />
          </div>
          <div>
            <img src={"/images/image11.jpg"} alt="eleventh" />
            <img
              src={"/images/image13.jpg"}
              alt="Sixth Image"
              width={400}
              height={500}
            />
          </div>
          <div>
            <img src={"/images/image12.jpg"} alt="twelfth" />
            <img
              src={"/images/image14.jpg"}
              alt="Fifth Image"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
