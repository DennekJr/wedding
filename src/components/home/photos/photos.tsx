import React from "react";
import "./photos.styles.css";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

export const Photos = () => {
  const images = [
    "image1_jmaznx",
    "image2_ww0fyv",
    "image3_zgrnuf",
    "image4_cmjsln",
    "image5_wndujb",
    "image6_uutjce",
    "https://res.cloudinary.com/stanjhae/image/upload/c_fill,g_faces,w_934/v1602697471/lovestory_ydukg7.jpg",
    "image9_imm4qh",
    "image10_fmbj8q",
    "image11_lcbmzh",
    "image14_tgn2xq",
    "image13_be1fsj",
  ];
  return (
    <div className="photosContainer">
      <h2>Photos</h2>
      <div className="photosDivider">
        <hr />
        <span>.</span>
        <hr />
      </div>
      <CloudinaryContext cloudName="stanjhae">
        <div className="imageGrid">
          <div className="gridRow">
            {images.map((image) => (
              <div>
                <Image publicId={image}>
                  <Transformation
                    width="400"
                    gravity="faces"
                    crop="fill"
                  />
                </Image>
              </div>
            ))}
          </div>
        </div>
      </CloudinaryContext>
    </div>
  );
};
