import React from "react";
import "../styles/cocktail.css";
import { Link } from "react-router-dom";

export const Cocktail = ({ props }) => {
  return (
    <div className="cocktail-container">
      <img alt={props.strDrink} src={props.strDrinkThumb} />
      <h2> {props.strDrink} </h2>
      <button className="btn">
        <a href="/here">Get the recipe</a>
        {/* change href to correct link for one drink */}
      </button>
    </div>
  );
};
