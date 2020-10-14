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
            <img src="/images/image1.jpg" alt="first" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image2.jpg"} alt="second" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image3.jpg"} alt="Third" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image4.jpg"} alt="fourth" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image5.jpg"} alt="fifth"width={400} height={600} />
          </div>
          <div>
            <img src={"/images/image6.jpg"} alt="Sixth" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image8.jpg"} alt="eight" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image9.jpg"} alt="ninth" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image10.jpg"} alt="tenth" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image15.jpg"} alt="fifteenth" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image11.jpg"} alt="eleventh" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image12.jpg"} alt="twelfth" width={400} height={600}/>
          </div>
          <div>
            <img src={"/images/image14.jpg"} alt="fourteenth" width={400} height={500}/>
          </div>
          <div>
            <img src={"/images/image13.jpg"} alt="thirteenth" width={400} height={500}/>
          </div>
        </div>
      </div>
    </div>
  );
};
