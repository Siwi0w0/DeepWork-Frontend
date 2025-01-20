import React from "react";
import Navbar from "../components/banner/Navbar";
import BannerContent from "../components/banner/BannerContent";
import "../components/banner/Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner-page">
      <Navbar />
      <BannerContent />
    </div>
  );
};

export default Banner;
