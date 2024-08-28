import React from "react";
import pic from "./pic.jpeg";
import "./starter.css"; // Import the CSS file
import { Avatar, Typography } from "@mui/material";

function Starter() {
  return (
    <div className="container">
      <div className="image-container">
        <Avatar
          alt="Ayush Raj"
          src={pic}
          sx={{
            width: 200,
            height: 200,
            border: "5px solid #64FFDA",
          }}
        />
      </div>
      <br></br>
      <div className="text-wrapper">
        <Typography variant="h4" sx={{ color:"#64ffda ", textTransform:"None" }}>
          Ayush Raj
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#FFFFFF", textTransform:"None" }}>
          I am a software developer specialized in backend technologies like
          django, microservices, redis, etc. Besides this, I've worked on react.js and golang.
        </Typography>
      </div>
    </div>
  );
}

export default Starter;
