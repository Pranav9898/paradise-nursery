import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const handleGetStarted = () => {
    window.location.href = "#plants";
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>
        Welcome to Paradise Nursery, where nature meets your home.
        Discover beautiful houseplants and bring freshness, beauty,
        and happiness into your living space.
      </p>
      <button
        className="get-started-button"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
      <AboutUs />
    </div>
  );
}

export default App;
