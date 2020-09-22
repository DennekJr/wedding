import React from "react";
import "./weddingDetails.styles.css";

export const WeddingDetails = () => {
  return (
    <div className="weddingDetailsContainer">
      <div className="weddingDetailsHeader">
        <h2>Wedding Details</h2>
        <div className="weddingDetailsDivider">
          <hr />
          <span>.</span>
          <hr />
        </div>
        <h4>
          Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
          <br /> consequat ipsutis sem niuis sed odio sit amet
        </h4>
      </div>
      <div className="WeddingDetailsBody">
        <div className="workflow">
          <span
    className="mainLine"
    style={{backgroundColor: "#dee0e0"}}
    />
          <div className="firstRow">
            <span className="line"/>
            <div className="innerFirstRow">
              <div className="row1Images">
                <img
                  width="119"
                  height="118"
                  src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/02/home-announcment-icon-1.png"
                  className="firstImg"
                  alt="a"
                />
              </div>
              <div className="rowTexts">
                <span className="circle"/>
                <h4>Ceremony</h4>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetuer gravida nibh vel
                  velit auctor aliqueenean sollicitudin, lorem quis bibendum
                </p>
              </div>
            </div>
          </div>
          <div className="secondRow">
            <span className="line"></span>
            <div className="innerSecondRow">
              <div className="row2Images">
                <img
                  width="107"
                  height="138"
                  src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/02/home-announcment-icon-2.png"
                  className="secondImg"
                  alt="a"
                />
              </div>
              <div className="row2Texts">
                <span className="circle"></span>
                <h4>Toast &amp; Dinner</h4>
                <p className="text2">
                  Lorem ipsum dolor sit amet, consectetuer gravida nibh vel
                  velit auctor aliqueenean sollicitudin, lorem quis bibendum
                </p>
              </div>
            </div>
          </div>
          <div className="thirdRow">
            <span className="line"></span>
            <div className="innerThirdRow">
              <div className="row3Image">
                <img
                  width="125"
                  height="116"
                  src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/02/home-announcment-icon-3.png"
                  className="thirdImage"
                  alt="a"
                />
              </div>
              <div className="row3Texts">
                <span className="circle"></span>
                <h4>Wedding Cake</h4>
                <p className="text3">
                  Lorem ipsum dolor sit amet, consectetuer gravida nibh vel
                  velit auctor aliqueenean sollicitudin, lorem quis bibendum
                </p>
              </div>
            </div>
          </div>
          <div className="fourthRow">
            <span className="line"></span>
            <div className="innerFourthRow">
              <div className="row4Images">
                <img
                  width="117"
                  height="80"
                  src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/02/home-announcment-icon-4.png"
                  className="fourthImage"
                  alt="a"
                />
              </div>
              <div className="row4Texts">
                <span className="circle"></span>
                <h4>Photography</h4>
                <p className="text4">
                  Lorem ipsum dolor sit amet, consectetuer gravida nibh vel
                  velit auctor aliqueenean sollicitudin, lorem quis bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
