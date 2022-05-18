import React from "react";
import { Cocktail } from "./Cocktail";
import { CocktailDB } from "./CocktailDB";
import { getCocktailByIdAPIUrl } from "../settings";
import { getCocktailByIdUrl } from "../settings";

const CocktailRecipe = () => {
  let currentUrl = window.location.href;
  let urlArray = currentUrl.split("/");
  const currentIndex = urlArray[4];

const getCocktailByIdAPI = async () => {
  const res = await fetch(getCocktailByIdAPIUrl + currentIndex);
  const data = await res.json();
  console.log(data);
  return data;
}

const getCocktailById = async () => {
  const res = await fetch(getCocktailByIdUrl + currentIndex);
  const data = await res.json();
  console.log(data);
  return data;
}
if (currentIndex > 10000) {
  getCocktailByIdAPI();
} else {
  getCocktailById();
}

 

  return (
    
    <div>
      <p>tester {currentIndex}</p>
      
    </div>
    
  );
};

export default CocktailRecipe;
