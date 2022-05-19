import React from "react";
import { Cocktail } from "./Cocktail";
import { CocktailDB } from "./CocktailDB";
import { getCocktailByIdAPIUrl } from "../settings";
import { getCocktailByIdUrl } from "../settings";
import { useState, useEffect } from "react";
import "../styles/cocktailRecipe.css";

export const CocktailRecipe = () => {
  const [cocktailAPI, setCocktailAPI] = useState([]);
  const [cocktailDB, setCocktailDB] = useState([]);

  useEffect(() => {
    const getCocktail = async () => {
      const fromAPI = await getCocktailByIdAPI();
      setCocktailAPI(fromAPI);
    };
    getCocktail();

    const getCocktailDB = async () => {
      const fromDB = await getCocktailById();
      setCocktailDB(fromDB);
    };
    getCocktailDB();
  }, []);

  let currentUrl = window.location.href;
  let urlArray = currentUrl.split("/");
  const currentIndex = urlArray[urlArray.length - 1];

  const getCocktailByIdAPI = async () => {
    const res = await fetch(getCocktailByIdAPIUrl + currentIndex);
    const data = await res.json();
    console.log(data.drinks);
    console.log("_______________________");
    console.log(data.drinks[0].idDrink);
    // Get the first drink.
    // var drink = data.drinks[0];

    // let index = 1;
    // let ingredientArray = [];
    // while (drink["strIngredient" + index]) {
    //   ingredientArray.push({
    //     name: drink["strIngredient" + index],
    //     amount: drink["strMeasure" + index]
    //       ? drink["strMeasure" + index]
    //       : "A dash ",
    //   });
    //   index++;
    // }
    // console.log("Ingredients: ");
    // ingredientArray.forEach((ingredient) => {
    //   console.log(`${ingredient.amount} of ${ingredient.name}`);
    // });
    return data.drinks[0];
  };

  const getCocktailById = async () => {
    const res = await fetch(getCocktailByIdUrl + currentIndex);
    const data = await res.json();
    console.log(data);
    return data;
  };
  if (currentIndex > 10000) {
    getCocktailByIdAPI();
  } else {
    getCocktailById();
  }

  return (
    <div className="CocktailRecipes">
      {cocktailDB.length != 0 ? (
        <div>
          <h3>{cocktailAPI.strDrink}</h3>
          <div className="CocktailRecipes-container">
            <img
              alt={cocktailAPI.strDrinkThumb}
              src={cocktailAPI.strDrinkThumb}
            ></img>
          </div>
          <li>{cocktailAPI.strAlcoholic}</li>
          <li>Glass: {cocktailAPI.strGlass}</li>
          <li>
            Ingredients: {cocktailAPI.strIngredient1} &#160;&#160;{" "}
            {cocktailAPI.strIngredient2} &#160;&#160;{" "}
            {cocktailAPI.strIngredient3} &#160;&#160;{" "}
            {cocktailAPI.strIngredient4} &#160;&#160;{" "}
            {cocktailAPI.strIngredient5} &#160;&#160;{" "}
            {cocktailAPI.strIngredient6}
          </li>
          <li>Instructions: {cocktailAPI.strInstructions}</li>{" "}
        </div>
      ) : (
        <div>hello good sir</div>
      )}
      {/* <p>tester {currentIndex}</p>
     <p>{cocktailDB.cocktailId}</p> */}
    </div>
  );
};

export default CocktailRecipe;
