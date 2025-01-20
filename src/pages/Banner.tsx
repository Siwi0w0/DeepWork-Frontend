import React, { useEffect } from "react";
import Navbar from "../components/banner/Navbar";
import BannerContent from "../components/banner/BannerContent";
import "../components/banner/Banner.css";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="banner-page">
      <Navbar />
      <BannerContent />
    </div>
  );
};

export default Banner;
