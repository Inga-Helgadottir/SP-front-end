import React from "react";
import "../styles/makeCocktails.css";
import { useState } from "react";
import beerGlass from "../images/beerGlass.png";
import cocktailGlass from "../images/cocktailGlass.png";
import cocktailGlass2 from "../images/cocktailGlass2.jpg";
import martiniGlass from "../images/martiniGlass.jpg";
import normalGlass from "../images/normalGlass.png";
import normalShortGlass from "../images/normalShortGlass.jpg";
import shortGlass from "../images/shortGlass.png";
import tallSkinnyGlass from "../images/tallSkinnyGlass.jpg";
import wineGlass from "../images/wineGlass.jpg";

const MakeCocktails = ({ onAdd }) => {
  const [inputList, setInputList] = useState([{ service: "" }]);
  const [name, setName] = useState("");
  const [alcoholic, setAlcoholic] = useState("");
  const [glass, setGlass] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [measurementIngredients, setMeasurementIngredients] = useState([]);
  const [measurementIngredient, setMeasurementIngredient] = useState([]);
  const [imageOptions, setImageOptions] = useState([
    beerGlass,
    cocktailGlass,
    cocktailGlass2,
    martiniGlass,
    normalGlass,
    normalShortGlass,
    shortGlass,
    tallSkinnyGlass,
    wineGlass,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (!alcoholic || alcoholic === 0 || alcoholic === "0") {
      alert("Please tell us if this drink contains alcohol");
      return;
    }
    if (!glass) {
      alert("Please tell us what glass to use for this cocktail");
      return;
    }
    if (!instructions) {
      alert("Please give us the instructions for this cocktail");
      return;
    }
    if (!image) {
      alert("Please choose an image for this cocktail");
      return;
    }
    if (measurementIngredients.length < 1) {
      alert("Please give a list of ingredients");
      return;
    }

    console.log(measurementIngredients);
    console.log(measurementIngredients);

    onAdd({
      name,
      alcoholic,
      glass,
      instructions,
      image,
      imageAlt,
      measurementIngredients,
    });

    setName("");
    setAlcoholic("");
    setGlass("");
    setInstructions("");
    setImage("");
    setImageAlt("");
    setMeasurementIngredients([]);
    // alert("You have made a cocktail");
  };

  const settingAlcoholic = (e) => {
    if (e === "Yes") {
      setAlcoholic("Acloholic");
    } else if (e === "No") {
      setAlcoholic("Non alcoholic");
    }
  };

  const handleInputAdd = (e) => {
    e.preventDefault();
    setInputList([...inputList, { service: "" }]);
  };

  const imageClicked = (index, option, imageOption) => {
    let imageOptionArray = document.querySelectorAll(".imageOption");
    imageOptionArray.forEach((element) => {
      element.style.border = "solid 0.5px black";
    });
    imageOptionArray[index].style.border = "solid 2px red";
    setImage(imageOption);
    setImageAlt(name);
  };

  return (
    <div>
      <h2>Make your own cocktail</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Name of your cocktail?</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Does this drink contail alcohol?</label>
          <select onChange={(e) => settingAlcoholic(e.target.value)}>
            <option value="0">Is there alcohol?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-control">
          <label>What kind of glass should you put your drink in?</label>
          <input
            type="text"
            placeholder="Glass"
            value={glass}
            onChange={(e) => setGlass(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>What are the instructions for making your drink?</label>
          <textarea
            type="text"
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>
        <div className="form-control">
          <label>What ingredients are needed to make your drink?</label>
          {inputList.map((singleInput, index) => {
            return (
              <input
                key={index}
                type="text"
                placeholder="1/2 shot Vodka"
                // value={measurementIngredients[index]}
                // value={measurementIngredients}
                // value={this.value}
                onChange={(e) => {
                  setMeasurementIngredients([
                    ...measurementIngredients,
                    e.target.value,
                  ]);
                }}
              ></input>
            );
          })}
          <button onClick={handleInputAdd} className="btn">
            Click here to add another ingredient
          </button>
        </div>
        <div className="form-control">
          <label>Which of these images looks the most like your drink?</label>
          <div id="images">
            {imageOptions.map((imageOption, index) => {
              let optionAltArray = imageOption.split(/[./]/);
              let option = optionAltArray[3];
              return (
                <img
                  className={"imageOption imageOption" + index}
                  key={index}
                  src={imageOption}
                  alt={option}
                  onClick={(e) => {
                    imageClicked(index, option, imageOption);
                  }}
                />
              );
            })}
          </div>
        </div>
        <input type="submit" value="Make your cocktail" className="btn" />
      </form>
    </div>
  );
};

export default MakeCocktails;
