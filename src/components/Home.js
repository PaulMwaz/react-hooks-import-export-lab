import React from "react";
import { username, city } from "../data/user"; // Ensure this path is correct

function Home() {
  return (
    <div id="home" style={{ padding: "20px", textAlign: "center" }}>
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
