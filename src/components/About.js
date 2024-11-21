import React from "react";
import { image } from "../data/user"; // Ensure this path is correct

function About() {
  return (
    <div id="about" style={{ marginTop: "20px", textAlign: "center" }}>
      <h2>About Me</h2>
      <p>I Made This</p>
      <img
        src={image}
        alt="I made this"
        style={{ width: "150px", borderRadius: "8px" }}
      />
    </div>
  );
}

export default About;
