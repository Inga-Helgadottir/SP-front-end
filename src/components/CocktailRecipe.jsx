import React from "react";

const CocktailRecipe = () => {
  let currentUrl = window.location.href;
  let urlArray = currentUrl.split("/");
  const currentIndex = urlArray[urlArray.length - 1];
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
  return (
    <div>
      <p>tester {currentIndex}</p>
    </div>
  );
};

export default CocktailRecipe;
