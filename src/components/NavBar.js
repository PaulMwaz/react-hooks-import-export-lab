import React from "react";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "10px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <a href="#home" style={{ marginRight: "20px", textDecoration: "none" }}>
        Home
      </a>
      <a href="#about" style={{ textDecoration: "none" }}>
        About
      </a>
    </nav>
  );
}

export default NavBar;
