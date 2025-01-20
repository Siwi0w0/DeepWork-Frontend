import React from "react";
import "./Banner.css";

const BannerContent: React.FC = () => {
  return (
    <div className="banner-content">
      <div className="content-left">
        <h1>Welcome to Deep Work</h1>
        <p>
          Discover our platform, enhance your productivity, and achieve more!
          Whether you're managing tasks or exploring new opportunities, we've
          got you covered.
        </p>
        <button className="btn btn-primary">Free Sign Up</button>
      </div>
      <div className="content-right">
        <img
          src="https://via.placeholder.com/400"
          alt="Productivity Illustration"
        />
      </div>
    </div>
  );
};

export default BannerContent;
