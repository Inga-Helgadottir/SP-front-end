import React from "react";
import "../styles/App.css";
import background from "../images/CocktailsBackground.jpeg";

const WelcomePage = ({ name, role }) => {
  return (
    <div className="borderNoTop">
      <h2>Welcome {name} !</h2>
      <h3>Your role on this site is {role}</h3>
      <body style={{ backgroundImage: `url(${background})` }}> 
      </body>
    </div>
  );
};

export default WelcomePage;
