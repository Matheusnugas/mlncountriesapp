import React from "react";
import { useContext } from "react";
import CountriesContext from "../Context/CountriesContext";
import sunImg from "../images/sun.png";
import moonImg from "../images/moon.png";

function NavBar() {
  const { darkMode, setDarkMode } = useContext(CountriesContext);
  return (
    <nav className={!darkMode ? "navBar" : "navBarDark"}>
      <h1 className="pageNavTitle">Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="navToggler">
        <img src={!darkMode ? sunImg : moonImg} alt="sunOrMoon" />
        {!darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default NavBar;
