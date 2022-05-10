import React from "react";
import "../styles/cocktail.css";

export const CocktailDB = ({ props }) => {
  return (
    <div className="cocktail-container">
      <img alt={props.imageAlt} src={props.image} />
      <h2> {props.name} </h2>
      <button className="btn">
        <a href={`/seeCocktail/${props.id}`}>Get the recipe</a>
      </button>
    </div>
  );
};
