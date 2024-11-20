import React from "react";
import { username, city } from "../data/user"; // Relative path to the user.js file

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
