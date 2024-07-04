import React, { useState } from "react";
import "../styles/Navigation.css";
import { BiShapeCircle } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Portfolio");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs">
        {["Portfolio", "NFTs", "Transactions", "XScore"].map((tab) => (
          <li
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="left-items">
        <div className="left-icon">
          <BiShapeCircle size={20} />
        </div>
        <p>All Network</p>
        <div className="right-icon">
          <FaChevronDown  size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
