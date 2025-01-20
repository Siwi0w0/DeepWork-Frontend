import React, { useState } from "react";
import { Input, Button, Upload, message, Avatar } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ProfilePage: React.FC = () => {
  const [name, setName] = useState<string>(""); // User's name
  const [avatar, setAvatar] = useState<string>(""); // User's avatar

  // Handle name change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Handle avatar change/upload
  const handleAvatarChange = (info: any) => {
    if (info.file.status === "done") {
      setAvatar(info.file.response.url); // Assume avatar URL is stored in `response.url` after upload
      message.success("Avatar updated successfully!");
    } else if (info.file.status === "error") {
      message.error("Avatar upload failed!");
    }
  };

  // Save user profile (this is an example and doesn't actually save data)
  const handleSaveProfile = () => {
    message.success("Profile updated successfully!");
    // Here you can send the updated name and avatar to your server for saving
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <h2>Profile Information</h2>

      {/* User avatar */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={avatar} size={64} style={{ marginRight: "16px" }} />
        <Upload
          name="avatar"
          action="/upload-avatar" // Avatar upload endpoint
          showUploadList={false}
          onChange={handleAvatarChange}
        >
          <Button icon={<UploadOutlined />}>Upload Avatar</Button>
        </Upload>
      </div>

      {/* Edit name */}
      <div style={{ marginTop: "20px" }}>
        <h3>Edit Name</h3>
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{ width: "100%" }}
        />
      </div>

      {/* Save button */}
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button type="primary" onClick={handleSaveProfile}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
