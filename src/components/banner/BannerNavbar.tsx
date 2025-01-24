import React from "react";
import { Link } from "react-router-dom";
import "./BannerNavbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar ">
      <div className="logo">
        <Link to="/">Deep Work</Link>
      </div>
      <div className="nav-links">
        <Link to="/register" className="btn btn-signup">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-signin">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
