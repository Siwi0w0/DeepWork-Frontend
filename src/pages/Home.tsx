import React from "react";

import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="calendar-panel"></div>
        <div className="time-axis-panel"></div>
      </div>
    </div>
  );
};

export default Home;
