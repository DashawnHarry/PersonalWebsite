import React from "react";
import "./DescCard.css";
import img1 from "../../personalimages/StandOff.png"

const DescCard = () => {
  return (
    <>
      <div className="desccontainer" style={{backgroundImage: `url(${img1})`}}></div>
    </>
  );
};

export default DescCard;
