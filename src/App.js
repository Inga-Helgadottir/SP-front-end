import LogIn from "./components/LogIn";
import "./styles/App.css";
import "./styles/nav.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Categories from "./components/Categories";
import Header from "./components/Header";
import LogOut from "./components/LogOut";
import { loginUrl } from "./settings";
import { Cocktails } from "./components/Cocktails";
import MakeCocktail from "./components/MakeCocktails";
import img from "./images/logo.png";

function App() {
  const [dropDown, setDropDown] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [categories, setCategories] = useState(false);

  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  const logInFunc = async (user) => {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.code !== null && data.code !== "" && data.code !== undefined) {
      alert(data.message);
      setLoggedIn(false);
    }

    if (
      data.username !== null &&
      data.username !== "" &&
      data.username !== undefined
    ) {
      setUserName(data.username);
      setUserRole(data.role0);
      setLoggedIn(true);
      localStorage.setItem("token", data.token);
    }
  };

  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
    localStorage.clear();
  };

  function isTokenExpired(token) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  // this looks for the token in localStorage, we set it in the logInFunc
  // let theToken = localStorage.getItem("token");
  // this is how you check if the token is expired
  // console.log(isTokenExpired(theToken));

  const removeActive = () => {
    let navLinks = document.querySelectorAll("nav a");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
  };
  const addActive = (e) => {
    e.classList.add("active");
  };

  return (
    <div className="App">
      <Header />
      {loggedIn ? (
        <div>
          <WelcomePage name={userName} role={userRole} />
          <LogOut onClick={logOutFunc} />
        </div>
      ) : (
        <WelcomePage name="null" role="null" />
      )}

      {!dropDown && (
        <FaAngleDown
          className="dropDownIcon"
          onClick={(e) => {
            setDropDown(!dropDown);
          }}
        />
      )}
      {/* {dropDown && (
        <nav>
          <ul>
            <Link
              className="active"
              onClick={(e) => {
                removeActive();
                addActive(e.target);
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              to="/seeCocktails"
              onClick={(e) => {
                removeActive();
                addActive(e.target);
              }}
            >
              See all cocktails
            </Link>
            <Link
              to="/alcoholUnits"
              onClick={(e) => {
                removeActive();
                addActive(e.target);
              }}
            >
              Calculate alcohol units
            </Link>
            <Link
              to="/makeCocktail"
              onClick={(e) => {
                removeActive();
                addActive(e.target);
              }}
            >
              Make your own cocktail
            </Link>
          </ul>
        </nav>
      )} */}
      {dropDown && (
        <nav>
          <FaAngleUp
            className="dropDownIcon"
            onClick={(e) => {
              setDropDown(!dropDown);
            }}
          />
          <Link
            className="active"
            onClick={(e) => {
              removeActive();
              addActive(e.target);
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            to="/seeCocktails"
            onClick={(e) => {
              removeActive();
              addActive(e.target);
            }}
          >
            See all cocktails
          </Link>
          <Link
            to="/alcoholUnits"
            onClick={(e) => {
              removeActive();
              addActive(e.target);
            }}
          >
            Calculate alcohol units
          </Link>
          <Link
            to="/makeCocktail"
            onClick={(e) => {
              removeActive();
              addActive(e.target);
            }}
          >
            Make your own cocktail
          </Link>
        </nav>
      )}
      <Outlet />
      {/* this is the showhide for the category options */}
      {/* {categories && <Categories />} */}
      {!loggedIn && (
        <div>
          <hr id="logInScroll" />
          <LogIn onAdd={logInFunc} />
        </div>
      )}
      {loggedIn && (
        <div>
          <hr id="logOutScroll" />
          <LogOut onClick={logOutFunc} />
        </div>
      )}
    </div>
  );
}

export default App;
