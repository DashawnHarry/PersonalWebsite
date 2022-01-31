import React from "react";
import Video from "../../personalimages/HeroVideo.mp4";
import "./hero.css";

import $ from 'jquery'
const Hero = () => {
    $('body').on('click touchstart', function () {
        Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
            get: function () {
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
            }});
        const videoElement = document.getElementById('hero_video');
        if (videoElement.playing) {
            // video is already playing so do nothing
        }
        else {
            // video is not playing
            // so play video now
            videoElement.play();
        }
});
  
  
  
    return (
    <>
      
        <div className="wordcontainer">
        <div id="heroname">Harry Flint Flex Dashawn</div>
        <div id="herodesc">SoftwareEngineer | Artist | VisualEffect Hobbyist</div>
        </div>
          <video className="herovideo" id="hero_video" autoPlay loop muted playsInline  src={Video} type="video/mp4">   
        </video>
     
    </>
  );
};

export default Hero;
