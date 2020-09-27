import React from "react";
import "./home.styles.css";
import { BrideStory } from "./ourStory/BrideStory";
import { Date } from "./date/date";
import { WeddingDetails } from "./weddingDetails/weddingDetails";
import { Reception } from "./reception/reception";
import { Photos } from "./photos/photos";
import { GroomStory } from "./ourStory/GroomStory";
import { MaidManStory } from "./ourStory/MaidManStory";
import { Interlude } from "./interlude/interlude";
// import {Footer} from "./homeFooter/footer";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeBanner">
        <div className="navBarContainer">
          <nav className="navBar">
            <a href="/">#SKLOVESTORY</a>
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
          <h4>Kuchy & Suggy</h4>
        </div>
      </div>
      <BrideStory />
      <Date date="December 12th, 2020" name="Save the date" />
      <GroomStory />
      <Reception />
      <MaidManStory />
      <Interlude />
      <WeddingDetails />
      <Photos />
      {/*<Footer />*/}
    </div>
  );
};
