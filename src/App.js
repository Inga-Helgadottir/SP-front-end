// import Header from "./components/Header";
// import LogIn from "./components/LogIn";
import "./styles/App.css";

import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Categories from "./components/Categories";
import LogOut from "./components/LogOut";
import { loginUrl } from "./settings";
import { Cocktails } from "./components/Cocktails";
import MakeCocktail from "./components/MakeCocktails";

function App() {
  // const [userName, setUserName] = useState("");
  // const [userRole, setUserRole] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [categories, setCategories] = useState(false);

  //set favicon
  // var link = document.createElement("link");
  // link.type = "image/png";
  // link.rel = "icon";
  // link.href = img;
  // document.getElementsByTagName("head")[0].appendChild(link);

  // const logInFunc = async (user) => {
  //   const res = await fetch(loginUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });

  //   const data = await res.json();

  //   if (data.code !== null && data.code !== "" && data.code !== undefined) {
  //     alert(data.message);
  //     setLoggedIn(false);
  //   }

  //   if (
  //     data.username !== null &&
  //     data.username !== "" &&
  //     data.username !== undefined
  //   ) {
  //     setUserName(data.username);
  //     setUserRole(data.role0);
  //     setLoggedIn(true);
  //     localStorage.setItem("token", data.token);
  //   }
  // };

  // const logOutFunc = async () => {
  //   setLoggedIn(false);
  //   setUserName("");
  //   setUserRole("");
  //   localStorage.clear();
  // };

  // function isTokenExpired(token) {
  //   const expiry = JSON.parse(atob(token.split(".")[1])).exp;
  //   return Math.floor(new Date().getTime() / 1000) >= expiry;
  // }

  //this is how you check if the token is expired
  // console.log(isTokenExpired(theToken));

  //this looks for the token in localStorage, we set it in the logInFunc
  // let theToken = localStorage.getItem("token");

  // const makeCocktailFunc = async (cocktail) => {
  //   const res = await fetch(makeCocktailUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(cocktail),
  //   });

  //   const data = await res.json();
  // };

  return (
    <div className="App">
      {/* <MakeCocktail onAdd={makeCocktailFunc} /> */}
      {/* <Header /> */}

      {/* {loggedIn && <WelcomePage name={userName} role={userRole} />} */}

      <nav className="borderNoTop">
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/seeCocktail/:id">this one</Link> */}
        <Link to="/seeCocktails">See all cocktails</Link>
        <Link to="/alcoholUnits">Calculate alcohol units</Link>
        <Link to="/makeCocktail">Make your own cocktail</Link>
        {/* <Link to="/swapi">Star wars</Link> */}
      </nav>
      <Outlet />

      {/* this is the showhide for the category options */}
      {/* {categories && <Categories />} */}

      {/* {!loggedIn && <LogIn onAdd={logInFunc} />}

      {loggedIn && <LogOut onClick={logOutFunc} />} */}
    </div>
  );
}

export default App;
