import React, { useEffect } from "react";
import BannerNavbar from "../components/banner/BannerNavbar";
import BannerContent from "../components/banner/BannerContent";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="banner-page">
      <BannerNavbar />
      <BannerContent />
    </div>
  );
};

export default Banner;
