import React from "react";


export const Cocktail = ({props}) => {
  return (
    <div className="cocktail-container">
      <img
        alt="Cocktail"
        src={``}
      />
      <h2> {props.Cocktail.name} </h2>
    </div>
  );
};