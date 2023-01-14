import React from "react";

import Video1 from "../../personalimages/HeroVideo.mp4";
import Video2 from "../../personalimages/IMG_2031.mp4";
import Video3 from "../../personalimages/video2.mp4";

import { Carousel } from "react-responsive-carousel";

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

console.log(images)

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div id="heroname">Harry Flint Flex Dashawn</div>
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
          <div style={{ display: "flex", height: "100vh" }}>
            <img className="image" src={images["0.png"].default} />

            <img className="image" src={images["1.png"].default} />

            <img className="image" src={images["2.png"].default} />
          </div>
          <div style={{ display: "flex", height: "100vh" }}>
            <img className="image" src={images["3.png"].default} />

            <img className="image" src={images["4.png"].default} />

            <img className="image" src={images["5.png"].default} />
          </div>
          <div style={{ display: "flex", height: "100vh" }}>
            <img className="image" src={images["6.png"].default} />

            <img className="image" src={images["7.png"].default} />

            <img className="image" src={images["8.png"].default} />
          </div>
          <div style={{ display: "flex", height: "100vh" }}>
            <img className="image" src={images["9.png"].default} />

            <img className="image" src={images["10.png"].default} />

            <img className="image" src={images["11.png"].default} />
          </div>
          <div style={{ display: "flex", height: "100vh" }}>
            <img className="image" src={images["12.png"].default} />

            <img className="image" src={images["13.png"].default} />

            <img className="image" src={images["14.png"].default} />
          </div>
          <div style={{ display: "flex", height: "100vh" }}>
            <video
              className="herovideo"
              id="hero_video"
              autoPlay
              loop
              muted
              playsInline
              src={Video1}
              type="video/mp4"
            />
            <video
              className="herovideo"
              id="hero_video"
              autoPlay
              loop
              muted
              playsInline
              src={Video2}
              type="video/mp4"
            />
            <video
              className="herovideo"
              id="hero_video"
              autoPlay
              loop
              muted
              playsInline
              src={Video3}
              type="video/mp4"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
