import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Leslianne Biscocho</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
