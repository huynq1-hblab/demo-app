import React, { useState } from "react";
import "../styles/Navigation.css";

const Tabs = () => {
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
    </div>
  );
};

export default Tabs;
