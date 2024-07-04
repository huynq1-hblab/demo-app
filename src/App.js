import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopFollowers from "./components/TopFollower";
import XScore from "./components/XScore";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <XScore />
        <TopFollowers />
      </div>
    </div>
  );
}


export default App;
