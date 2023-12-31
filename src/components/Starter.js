import React, { useState, useEffect } from "react";
import pic from "./pic.jpeg";
import Loader from "./Loader.js";
import "./starter.css"; // Import the CSS file

function Starter() {
  // Your existing code here

  return (
    <div className="container">
      <div className="image-container">
        <div className="image-wrapper">
          <img className="d-block w-100" src={pic} alt="pic" />
        </div>
      </div>
      <br></br>
      <div className="text-wrapper">
        <Loader text="Hi, I'm_Ayush_Raj" delay={0.2} className="loader-text" />
      </div>
    </div>
  );
}

export default Starter;
