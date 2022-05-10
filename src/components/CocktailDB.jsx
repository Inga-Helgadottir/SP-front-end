import React from "react";
import "../styles/cocktail.css";
import img from "../images/blue-cocktail-glass.png";
import { useState } from "react";
import beerGlass from "../images/beerGlass.png";
// import cocktailGlass from "../images/cocktailGlass.png";
// import cocktailGlass2 from "../images/cocktailGlass2.jpg";
// import martiniGlass from "../images/martiniGlass.jpg";
// import normalGlass from "../images/normalGlass.png";
// import normalShortGlass from "../images/normalShortGlass.jpg";
// import shortGlass from "../images/shortGlass.png";
// import tallSkinnyGlass from "../images/tallSkinnyGlass.jpg";
// import wineGlass from "../images/wineGlass.jpg";

export const CocktailDB = ({ props }) => {
  // const [imageOptions, setImageOptions] = useState([
  //   beerGlass,
  //   cocktailGlass,
  //   cocktailGlass2,
  //   martiniGlass,
  //   normalGlass,
  //   normalShortGlass,
  //   shortGlass,
  //   tallSkinnyGlass,
  //   wineGlass,
  // ]);

  // imageOptions.map((element, index) => {
  //   console.log(element);
  // });
  return (
    <div className="cocktail-container">
      <img alt={props.imageAlt} src={img} />
      {/* TODO: fix img  */}
      <h2> {props.name} </h2>
      <button className="btn">
        <a href={`/seeCocktail/${props.id}`}>Get the recipe</a>
      </button>
    </div>
  );
};
