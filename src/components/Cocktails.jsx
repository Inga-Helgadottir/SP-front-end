import React from "react";
import { Cocktail } from "./Cocktail";
import { useState, useEffect } from "react";
import { cocktalLetterUrl } from "../settings";
import "../styles/cocktails.css";

export const Cocktails = () => {
  const [cocktailsList, setCocktailsList] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      const fromDB = await getCocktailList();
      setCocktailsList(fromDB);
    };
    getCocktails();
  }, []);

  const getCocktailList = async () => {
    const res = await fetch(cocktalLetterUrl + "a");
    const data = await res.json();
    console.log("data from fetch");
    console.log(data.drinks);
    return data.drinks;
  };

  return (
    <div className="Cocktails">
      {cocktailsList.length > 0 &&
        cocktailsList.map((element, index) => {
          return <Cocktail key={index} props={element} />;
        })}
    </div>
  );
};
