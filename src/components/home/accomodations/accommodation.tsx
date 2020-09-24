import React from "react";
import "./accommodation.styles.css";

export const Accommodation = () => {
  return (
    <div className="accommodationContainer">
      <h2>Accommodations</h2>
      <div className="ourStoryDivider">
        <hr />
        <span>.</span>
        <hr />
      </div>
      <h4>Lorem ipsum dolor sit amet</h4>
      <p className="hotel" style={{color: '#4a3e5a'}}>Vetel Hotel NewYork</p>
      <p>757 Cross Highway</p>
      <p>sunsset Blvd NY</p>
      <p>(631)555 - 0123</p>
      <img
        // width="757"
        // height="163"
        src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/02/home-announcment-img-4.png"
        className="accommodationImage"
        alt="a"
        style={{width: '50%'}}
      />
    </div>
  );
};
