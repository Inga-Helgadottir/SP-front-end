import React from "react";

const LogOut = ({ onClick }) => {
  return (
    <div className="borderNoTop">
      <button className="logOut" onClick={onClick}>
        Log out
      </button>
    </div>
  );
};

export default LogOut;
