import React from "react";
// add the logo to the images folder and change the path here to the logo here
// import img from "../images/glass.jpg";
import "../styles/header.css";
import img from "../images/logo.png";
import background from "../images/rainbow.webp";

const Header = () => {
  
  return (
    <header style={{ backgroundImage: `url(${background})` }}> 
      
      <img src={img} alt="JOIM Logo" />
      <h1>COCKTAILS</h1>
      {/* https://www.w3schools.com/cssref/pr_background-image.asp */}
    </header>
  );
};

export default Header;
