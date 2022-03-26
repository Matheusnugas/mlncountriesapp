import React from "react";
import { useContext } from "react";
import CountriesContext from "../Context/CountriesContext";
import sunImg from "../Images/whiteSun.png";
import moonImg from "../Images/blackMoon.png";

function NavBar() {
  const { darkMode, setDarkMode } = useContext(CountriesContext);
  return (
    <nav className={!darkMode ? "navBar" : "navBarDark"}>
      <h1 className="pageNavTitle">Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="navToggler">
        <img src={!darkMode ? moonImg : sunImg} alt="sunOrMoon" />
        {!darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default NavBar;
