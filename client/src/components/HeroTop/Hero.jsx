import React from "react";
import { Carousel } from "react-responsive-carousel";
import { TypeAnimation } from "react-type-animation";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./hero.css";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../personalimages", false, /\.(png|jpe?g|svg)$/)
);

//14.png
console.log(images);

const Hero = () => {
  const imageIndexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <div className="heroContainer">
        <div id="heroname">
          <TypeAnimation
            id="heroname"
            sequence={[
              "Harry",
              2000,
              "FlintFlex",
              2000,
              "Dashawn",
              2000,
              "Flint",
            ]}
            repeat={Infinity}
            cursor={true}
            style={{
              color: "rgb(248, 252, 6)",
              fontFamily: "Diesel",
              fontSize: "10vw",
              fontWeight: "500",
            }}
            speed={15}
          />
        </div>
      </div>
      <div className="wordcontainer">
        <Carousel
          autoPlay={true}
          dynamicHeight={false}
          className="tester"
          showThumbs={false}
          infiniteLoop={true}
          interval={10000}
        >
          {imageIndexArray.map((number, index) => {
            console.log(index);
            return (
              <div style={{ display: "flex", height: "100vh" }}>
                <img className="image" src={images[`${index}.png`].default} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
