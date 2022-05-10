import React from "react";
import { Cocktail } from "./Cocktail";
import { useState, useEffect } from "react";
import { cocktalLetterUrl, allCocktailsDB } from "../settings";
import "../styles/cocktails.css";
import { CocktailDB } from "./CocktailDB";

export const Cocktails = () => {
  const [cocktailsList, setCocktailsList] = useState([]);
  const [cocktailsListDB, setCocktailsListDB] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      const fromAPI = await getCocktailList("a");
      setCocktailsList(fromAPI);
    };
    getCocktails();

    const getCocktailsDB = async () => {
      const fromDB = await getCocktailListDB();
      setCocktailsListDB(fromDB);
    };
    getCocktailsDB();
  }, []);

  const getCocktailList = async (letter) => {
    const res = await fetch(cocktalLetterUrl + letter);
    const data = await res.json();
    console.log("data from fetch");
    console.log(data.drinks);
    return data.drinks;
  };

  const getCocktailListDB = async () => {
    const res = await fetch(allCocktailsDB);
    const data = await res.json();
    console.log("data from fetch DB------------------------");
    console.log(data);
    return data;
  };

  return (
    <div className="allCocktails">
      <div className="Cocktails">
        {cocktailsList.length > 0 &&
          cocktailsList.map((element, index) => {
            return <Cocktail key={index} props={element} />;
          })}
      </div>
      <h2>Cocktails made by our users</h2>
      <div className="Cocktails">
        {cocktailsListDB.length > 0 &&
          cocktailsListDB.map((cocktail, index) => {
            return <CocktailDB key={index} props={cocktail} />;
          })}
      </div>
    </div>
  );
};
