import React, { useState } from "react";
import "./DescCard.css";
import img1 from "../../personalimages/StandOff.png";
import { useEffect } from "react";

const DescCard = () => {
  const [offset, setOffset] = useState(0);
  const [scroll, setScroll] = useState(0);

  let scrollNum = 0;
  const adjustScroll = () => {
    if (scroll < 100) {
      setScroll(scrollNum++);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      adjustScroll(scroll);
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="desccontainer"
        style={{
          backgroundImage: `url(${img1})`,
          clipPath: `circle(${scroll}%)`,
        }}
      >
     <div className="textcontainer">
          <div className="about">ABOUT</div>
     </div>
        
      </div>
    </>
  );
};

export default DescCard;
