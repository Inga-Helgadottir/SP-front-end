import React from "react";

const CocktailRecipe = () => {
  let currentUrl = window.location.href;
  let urlArray = currentUrl.split("/");
  const currentIndex = urlArray[urlArray.length - 1];

  return (
    <div>
      <p>tester {currentIndex}</p>
    </div>
  );
};

export default CocktailRecipe;
