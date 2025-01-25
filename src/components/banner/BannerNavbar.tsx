import React from "react";
import { Link } from "react-router-dom";
import styles from "./BannerNavbar.module.css";

const BannerNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Deep Work</Link>
      </div>
      <div className={styles["nav-links"]}>
        <Link
          to="/register"
          className={`${styles.btn} ${styles["btn-signup"]}`}
        >
          Sign Up
        </Link>
        <Link to="/login" className={`${styles.btn} ${styles["btn-signin"]}`}>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default BannerNavbar;
