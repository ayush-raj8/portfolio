import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import data from "./data.js";
import { Accordion, Card } from "react-bootstrap";
import pic from "./pic.jpeg";
import Loader from "./Loader.js";
function Starter() {

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const sentences = [
    "I'm a final year student pursuing CS and Chemistry at BITS Pilani, Goa",
    "I've been a TA in my college for SDPD( Android dev) course and Computer Programming.",
    "I'm a software developer intern at Nutanix Technology. I've worked on Golang, Python based microserices. ",
    "Developed ML projects with end-to-end deployment using Python's Flask web Framework Mentored ."
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setText(sentences[count % sentences.length]);
      setCount(count + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ height: '200px', width: '250px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #64FFDA' }}>
      <img
        className="d-block w-100"
        src={pic}
        alt="pic"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </div>
  </div>
  <div >
    <Loader text="Hi, I'm_Ayush_Raj" delay={0.2} />
  </div>
</div>


  
  );
}

export default Starter