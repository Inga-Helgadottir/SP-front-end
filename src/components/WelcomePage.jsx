import React from "react";
import "../styles/welcomePage.css";

const WelcomePage = ({ name, role }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {name === "null" ? (
        <div>
          <h2>Welcome!</h2>
          <h3>You are not logged in</h3>
          <div className="logInSignUpLinks">
            <a
              href="#logInScroll"
              className="btn"
              style={{ color: "black", textDecoration: "none" }}
            >
              Click here to log in
            </a>
            <a
              href="#signUpScroll"
              className="btn"
              style={{ color: "black", textDecoration: "none" }}
            >
              Click here to Sign up
            </a>
          </div>
        </div>
      ) : role[1] === null ? (
        <div>
          <h2>Welcome {name} !</h2>
          <h3>Your role on this site is {role[0]}</h3>
          <a
            href="#logOutScroll"
            className="btn"
            style={{ color: "black", textDecoration: "none" }}
          >
            Click here to log out
          </a>
        </div>
      ) : (
        <div>
          <h2>Welcome {name} !</h2>
          <h3>
            Your roles on this site are {role[0]} and {role[1]}
          </h3>
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
