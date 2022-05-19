import LogIn from "./components/LogIn";
import "./styles/App.css";
import "./styles/nav.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import LogOut from "./components/LogOut";
import { loginUrl, signUpUrl } from "./settings";
import SignUp from "./components/SignUp";
import img from "./images/logowhite.png";

function App() {
  const [dropDown, setDropDown] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (loggedIn === "") {
      let userNameLS = localStorage.getItem("userName");
      let loggedInLS = localStorage.getItem("loggedIn");
      let userRoleLS = JSON.parse(localStorage.getItem("userRole"));

      setUserName(userNameLS);
      setLoggedIn(loggedInLS);
      setUserRole(userRoleLS);
      // let tokenLS = localStorage.getItem("token");
      // if (
      //   tokenLS === undefined ||
      //   tokenLS === null ||
      //   !isTokenExpired(tokenLS)
      // ) {
      //   localStorage.clear();
      // }
    }
  });

  function checkAfterHalfAnHour(token) {
    setTimeout(function () {
      if (isTokenExpired(token)) {
        //true == expired
        logOutFunc();
      }
    }, 1800000);
  }

  function isTokenExpired(token) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

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
      let roleArray = [data.role0, data.role1];
      setUserRole(data.role0, data.role1);
      localStorage.setItem("userRole", JSON.stringify(roleArray));

      setLoggedIn(true);
      localStorage.setItem("userName", data.username);
      localStorage.setItem("loggedIn", true);
      checkAfterHalfAnHour(data.token);
      localStorage.setItem("token", data.token);
      window.location.reload();
    }
  };

  const signUpFunc = async (user) => {
    const res = await fetch(signUpUrl, {
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
      let roleArray = [data.role0, data.role1];
      setUserRole(data.role0, data.role1);
      localStorage.setItem("userRole", JSON.stringify(roleArray));

      setLoggedIn(true);
      localStorage.setItem("userName", data.username);
      localStorage.setItem("loggedIn", true);
      checkAfterHalfAnHour(data.token);
      localStorage.setItem("token", data.token);
      window.location.reload();
    }
  };

  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
    localStorage.clear();
    window.location.reload();
  };

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
        <WelcomePage name={userName} role={userRole} />
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

          {userRole !== null &&
            userRole !== undefined &&
            userRole.includes("admin") && (
              <div>
                <Link
                  to="/seeAllUsers"
                  onClick={(e) => {
                    removeActive();
                    addActive(e.target);
                  }}
                >
                  See all users
                </Link>
              </div>
            )}
        </nav>
      )}
      <Outlet />

      {!loggedIn && (
        <div>
          <hr id="logInScroll" />
          <LogIn onAdd={logInFunc} />
          <hr id="signUpScroll" />
          <SignUp onAdd={signUpFunc} />
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
