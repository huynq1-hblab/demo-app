import React from "react";
import "../../styles/Badge.css";

const Badge = ({ avatarUrl, text, number }) => {
  return (
    <div className="badge-follower">
      <div className="badge-left">
        <img src={avatarUrl} alt="avatar" className="avatar-follower" />
        <p className="text-name">{text}</p>
      </div>
      <div className="badge-right">
        <span className="number">{number}</span>
      </div>
    </div>
  );
};

export default Badge;
