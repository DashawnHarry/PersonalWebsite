import moment from "moment";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { TypeAnimation } from "react-type-animation";
import Ticker, { NewsTicker } from "nice-react-ticker";

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



const Hero = () => {
  const imageIndexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <>
      <div className="heroContainer">
        <Ticker>
          <NewsTicker
            id="1"
            title="© Harry"
            meta={moment().format("YYYY-DD-MM hh:mm:ss")}
          />
          <NewsTicker
            id="2"
            title="© Harry"
            meta={moment().format("YYYY-DD-MM hh:mm:ss")}
          />
          <NewsTicker
            id="3"
            title="© Harry"
            meta={` You accessed the website on ${moment().format(
              "YYYY-DD-MM hh:mm:ss"
            )}`}
          />
          <NewsTicker
            id="4"
            title="© Harry"
            meta={moment().format("YYYY-DD-MM hh:mm:ss")}
          />
        </Ticker>
        <TypeAnimation
          className="heroname"
          sequence={[
            "Harry",
            5000,
            "Dashawn"
          ]}
          repeat={Infinity}
          cursor={true}
          speed={0.1}
        />
      </div>
      <div className="imagecontainer">
        <Carousel
          autoPlay={true}
          dynamicHeight={false}
          className="carousel"
          showThumbs={false}
          infiniteLoop={true}
          interval={10000}
        >
          {imageIndexArray.map((number, index) => {
            console.log(index);
            return (
              <div style={{ display: "flex", height: "100vh" }}>
                <img className="image" src={images[`${number}.png`].default} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
