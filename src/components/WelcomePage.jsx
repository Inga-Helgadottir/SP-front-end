import React from "react";

const WelcomePage = ({ name, role }) => {
  console.log("role");
  console.log(role);
  console.log(role[1]);
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
            Your roles on this site is {role[0]} and {role[1]}
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
