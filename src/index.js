import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailRecipe from "./components/CocktailRecipe";
import { Cocktails } from "./components/Cocktails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="seeCocktail/:id" element={<CocktailRecipe />}></Route>
        <Route path="seeCocktails" element={<Cocktails />}></Route>
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
            <p>
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
