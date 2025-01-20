import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileContent.css";

const ProfileContent: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const navigate = useNavigate();

  // Load saved data from localStorage
  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    const savedUsername = localStorage.getItem("username");
    if (savedAvatar) setAvatar(savedAvatar);
    if (savedUsername) setUsername(savedUsername);
  }, []);

  // Handle avatar upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
        localStorage.setItem("avatar", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle username change
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // Save profile details
  const handleSaveProfile = () => {
    if (username) {
      localStorage.setItem("username", username);
      setIsSaved(true); // Mark the profile as saved
    }
  };

  // Navigate to home page
  const handleNavigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile Settings</h2>

      <div className="avatar-section">
        <div className="avatar-preview">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="avatar-img" />
          ) : (
            <span className="avatar-placeholder">No avatar</span>
          )}
        </div>
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={handleImageChange}
          className="avatar-upload-input"
        />
      </div>

      <div className="username-section">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
          placeholder="Enter your username"
        />
      </div>

      <button
        onClick={isSaved ? handleNavigateHome : handleSaveProfile}
        className="save-btn"
      >
        {isSaved ? "HomePage" : "Save Profile"}
      </button>
    </div>
  );
};

export default ProfileContent;
