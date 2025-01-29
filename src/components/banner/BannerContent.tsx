import React from "react";
import styles from "./BannerContent.module.css";
import { Link } from "react-router-dom";

const BannerContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <h1>Welcome to Deep Work</h1>
        <p>
          Discover our platform, enhance your productivity, and achieve more!
          Whether you're managing tasks or exploring new opportunities, we've
          got you covered.
        </p>
        <Link to="/register" className={`${styles.btn} ${styles.btnSignup}`}>
          Free Sign Up
        </Link>
      </div>
      <div className={styles.contentRight}>
        <img
          src="/images/deepWork.webp"
          alt="Productivity Illustration"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default BannerContent;
