import React from "react";
import backgroundimg from "../images/CocktailsBackground.jpeg";

const WelcomePage = ({ name, role }) => {
  const styles = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {name === "null" ? (
        <div>
          <h2>Welcome!</h2>
          <h3>You are not logged in</h3>
          <a
            href="#logInScroll"
            className="btn"
            style={{ color: "black", textDecoration: "none" }}
          >
            Click here to log in
          </a>
        </div>
      ) : (
        <div>
          <h2>Welcome {name} !</h2>
          <h3>Your role on this site is {role}</h3>
          <a
            href="#logOutScroll"
            className="btn"
            style={{ color: "black", textDecoration: "none" }}
          >
            Click here to log out
          </a>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
