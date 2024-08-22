import React from "react";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Home />
      <div className="about-section">
        <About />
      </div>
    </div>
  );
}

export default App;
