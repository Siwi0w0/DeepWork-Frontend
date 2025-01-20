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
        <Link
          to="/register"
          className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300 ease-in-out"
        >
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
