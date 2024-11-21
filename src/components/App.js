import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      {/* NavBar at the top */}
      <NavBar />

      {/* Home section */}
      <Home />

      {/* About section */}
      <About />
    </div>
  );
}

export default App;
