import React from "react";
import "./app.css";
import Hero from "./HeroTop/Hero";
import DescCard from "./DescCard/DescCard";

const App = () => {
  return (
    <>
      <Hero />
      <DescCard />
      <div style={{height: '200px'}}></div>
    </>
  );
};

export default App;
