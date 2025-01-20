import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAvatar } from "../../content/AvatarContext";
import "./ProfileContent.css";

const ProfileContent: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const navigate = useNavigate();

  const { avatarUrl, setAvatarUrl } = useAvatar();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) setUsername(savedUsername);
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatarUrl = reader.result as string;
        setAvatarUrl(newAvatarUrl);
        localStorage.setItem("avatar", newAvatarUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSaveProfile = () => {
    if (username) {
      localStorage.setItem("username", username);
      setIsSaved(true);
    }
  };

  const handleNavigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile Settings</h2>

      <div className="avatar-section">
        <div className="avatar-preview">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Avatar" className="avatar-img" />
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
        {isSaved ? "Go to Home" : "Save Profile"}
      </button>
    </div>
  );
};

export default ProfileContent;
