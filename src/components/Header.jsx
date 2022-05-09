import React from "react";
// add the logo to the images folder and change the path here to the logo here
// import img from "../images/glass.jpg";
import img from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <h1>COCKTAILS</h1>
      <img src={img} alt="JOIM Logo" />
      {/* https://www.w3schools.com/cssref/pr_background-image.asp */}
    </header>
  );
};

export default Header;
