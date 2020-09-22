import React from "react";
import "./home.styles.css";
import { OurStory } from "./ourStory/ourStory";
import { Date } from "./date/date";
import {WeddingDetails} from "./weddingDetails/weddingDetails";
import {Reception} from "./reception/reception";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeBanner">
        <div className="navBarContainer">
          <nav className="navBar">
            <a href="/">Home</a>
          </nav>
          <hr />
        </div>
        <div className="homeBannerText">
          <h1>We are getting married</h1>
          <div className="divider">
            <hr />
            <span>.</span>
            <hr />
          </div>
          <h4>June & Jack</h4>
        </div>
      </div>
      <OurStory />
      <Date date="September 5th, 2020" name="Save the date" />
      <WeddingDetails />
      <Reception />
    </div>
  );
};
