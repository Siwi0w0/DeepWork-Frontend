import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";

type RegisterProps = {
  onRegister: (user: {
    username: string;
    email: string;
    password: string;
  }) => void;
};

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  return (
    <div className="container">
      <h2>Register</h2>
      <RegisterForm onRegister={onRegister} />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
