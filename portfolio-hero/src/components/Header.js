// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Nitish Mittal</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#internships">Internships</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
