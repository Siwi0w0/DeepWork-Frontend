import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);

    validateField(email, "email", "Email cannot be blank");
    validateField(password, "password", "Password cannot be blank");
  };

  const validateField = (value: string, field: string, message: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: value.trim() === "" ? message : "",
    }));
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      validateField(e.target.value, field, `${field} cannot be blank`);
    };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <div>Deep Work</div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/public/images/illustration.svg" alt="Illustration" />
        </div>
        <div className={styles.text}>
          Welcome back! <br />
          Please log in to continue.
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.social}>
          <div className={styles.title}>Sign In</div>
          <div className={styles.question}>
            Don't have an account?
            <br />
            <Link to="/register">
              <span className={styles.span}>Sign Up</span>
            </Link>
          </div>

          <div className={styles.btn}>
            <div className={styles.btn1}>
              <img
                src="https://img.icons8.com/color/30/000000/google-logo.png"
                alt="google"
              />
              Sign In
            </div>
            <div className={styles.btn2}>
              <img
                src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png"
                alt="facebook"
              />
              Sign In
            </div>
          </div>

          <div className={styles.or}>Or</div>
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email</label>
          <i className="fa-regular fa-envelope"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleInputChange(setEmail, "email")}
          />
          <div className={styles.error}>{errors.email}</div>
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password">Password</label>
          <i className="fa-solid fa-lock"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword, "password")}
          />
          <div className={styles.error}>{errors.password}</div>
        </div>

        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
