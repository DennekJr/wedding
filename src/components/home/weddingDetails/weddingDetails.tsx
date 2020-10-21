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
      </div>
      <div className="WeddingDetailsBody">
        <div className="workflow">
          <span className="mainLine" style={{ backgroundColor: "#dee0e0" }} />
          <div className="firstRow">
            <span className="line" />
            <div className="innerFirstRow">
              <div className="row1Images">
                <img
                  width="119"
                  height="118"
                  src="images/home-announcement-icon-1.png"
                  className="firstImg"
                  alt="a"
                />
              </div>
              <div className="rowTexts">
                <span className="circle" />
                <h4>CHURCH SERVICE</h4>
                <p className="text">
                  <span className='details'>Date:</span> Saturday, December 12th 2020 <br/>
                  <span className='details'>Location:</span> Ekklesiyar Yan'uwa A Nigeria (EYN) opposite CBN estate,
                  Utako, Abuja.<br/>
                  <span className='details'>Time:</span> 11am.
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
                  src="images/home-announcement-icon-2.png"
                  className="secondImg"
                  alt="a"
                />
              </div>
              <div className="row2Texts">
                <span className="circle"></span>
                <h4>RECEPTION</h4>
                <p className="text2">
                  <span className='details'>Date:</span> Saturday, December 12th 2020 <br/>
                  <span className='details'>Location:</span> Le Finesse Event Centre opposite EFAB Global Estate, IDU, Abuja.<br/>
                  <span className='details'>Time:</span> 2pm.
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
                  src="images/home-announcement-icon-3.png"
                  className="thirdImage"
                  alt="a"
                />
              </div>
              <div className="row3Texts">
                <span className="circle"></span>
                <h4>COLORS</h4>
                <p className="text3">
                  Peach, Burgundy and Navy Blue.
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
                  src="images/home-announcement-icon-4.png"
                  className="fourthImage"
                  alt="a"
                />
              </div>
              <div className="row4Texts">
                <span className="circle"></span>
                <h4>RSVP</h4>
                <p className="text4">
                  08161266200, 07068347701
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
