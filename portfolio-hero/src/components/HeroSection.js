// // src/components/HeroSection.js
// import React from "react";
// import "./HeroSection.css"; // Import the CSS file for styling

// const HeroSection = () => {
//   return (
//     <div className="hero">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <div className="navbar">
//           <div className="logo">YourLogo</div>
//           <div>
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#portfolio">Portfolio</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//         <h1>Crafting Digital Masterpieces</h1>
//         <h2>
//           Showcasing exceptional design and development skills to elevate your
//           brand.
//         </h2>
//         <a href="#portfolio" className="cta-button">
//           View Portfolio
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css"; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="navbar">
          <div className="logo">Nitish Mittal</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#internships">Internships</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <h1>Hi, I'm Nitish Mittal</h1>
        <h2>
          Recent B.Tech Graduate | Backend Developer | Cloud Computing & Data
          Analytics Enthusiast
        </h2>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
