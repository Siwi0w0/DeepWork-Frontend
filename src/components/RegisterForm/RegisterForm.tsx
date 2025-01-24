import React, { useState } from "react";
import styles from "./registerForm.module.css";
import { Link } from "react-router-dom";

interface RegisterFormProps {
  onRegister: (user: {
    username: string;
    email: string;
    password: string;
  }) => void;
}
const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [successIcons, setSuccessIcons] = useState({
    username: false,
    email: false,
    password: false,
  });
  const [failureIcons, setFailureIcons] = useState({
    username: false,
    email: false,
    password: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ username, email, password });

    // Call validation engine for each field
    validateField(username, "username", "Username cannot be blank");
    validateField(email, "email", "Email cannot be blank");
    validateField(password, "password", "Password cannot be blank");
  };

  const validateField = (value: string, field: string, message: string) => {
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: message,
      }));
      setFailureIcons((prev) => ({
        ...prev,
        [field]: true,
      }));
      setSuccessIcons((prev) => ({
        ...prev,
        [field]: false,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      setFailureIcons((prev) => ({
        ...prev,
        [field]: false,
      }));
      setSuccessIcons((prev) => ({
        ...prev,
        [field]: true,
      }));
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      validateField(
        e.target.value,
        field,
        `${field.charAt(0).toUpperCase() + field.slice(1)} cannot be blank`
      );
    };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email",
      }));
      setFailureIcons((prev) => ({
        ...prev,
        email: true,
      }));
      setSuccessIcons((prev) => ({
        ...prev,
        email: false,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
      setFailureIcons((prev) => ({
        ...prev,
        email: false,
      }));
      setSuccessIcons((prev) => ({
        ...prev,
        email: true,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="./logo.svg" alt="Logo" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/public/images/illustration.svg" alt="Illustration" />
        </div>
        <div className={styles.text}>
          Start for free & get <br />
          attractive offers today!
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.social}>
          <div className={styles.title}>Get Started</div>
          <div className={styles.question}>
            Already Have an Account? <br />
            <Link to="/login">
              {" "}
              <span>Sign In</span>
            </Link>
          </div>

          <div className={styles.btn}>
            <div className={styles.btn1}>
              <img
                src="https://img.icons8.com/color/30/000000/google-logo.png"
                alt="google"
              />
              Sign Up
            </div>
            <div className={styles.btn2}>
              <img
                src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png"
                alt="facebook"
              />
              Sign Up
            </div>
          </div>

          <div className={styles.or}>Or</div>
        </div>

        {/* User Name input */}
        <div>
          <label htmlFor="username">User Name</label>
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Abc"
            value={username}
            onChange={handleInputChange(setUsername, "username")}
          />
          <i
            className={`${
              failureIcons.username
                ? "fa-solid fa-circle-exclamation failure-icon"
                : ""
            }`}
          ></i>
          <i
            className={`${
              successIcons.username
                ? "fa-regular fa-circle-check success-icon"
                : ""
            }`}
          ></i>
          <div className={styles.error}>{errors.username}</div>
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
            onChange={(e) => {
              handleInputChange(setEmail, "email")(e);
              validateEmail(e.target.value);
            }}
          />
          <i
            className={`${
              failureIcons.email
                ? "fa-solid fa-circle-exclamation failure-icon"
                : ""
            }`}
          ></i>
          <i
            className={`${
              successIcons.email
                ? "fa-regular fa-circle-check success-icon"
                : ""
            }`}
          ></i>
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
          <i
            className={`${
              failureIcons.password
                ? "fa-solid fa-circle-exclamation failure-icon"
                : ""
            }`}
          ></i>
          <i
            className={`${
              successIcons.password
                ? "fa-regular fa-circle-check success-icon"
                : ""
            }`}
          ></i>
          <div className={styles.error}>{errors.password}</div>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
