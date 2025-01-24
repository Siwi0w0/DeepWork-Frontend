import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

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
        <Link to="/register" className="btn btn-sigup">
          Free Sign Up
        </Link>
      </div>
      <div className="content-right">
        <img
          src="/public/images/deepWork.webp"
          alt="Productivity Illustration"
        />
      </div>
    </div>
  );
};

export default BannerContent;
