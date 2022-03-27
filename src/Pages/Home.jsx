import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../Components/CountryCard";
import NavBar from "../Components/NavBar";
import CountriesContext from "../Context/CountriesContext";
import "./Home.css";

function Home() {
  const { countriesList, setCountriesList } = useContext(CountriesContext);
  const { uneditableCountriesList, darkMode } = useContext(CountriesContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
    const filteredList = uneditableCountriesList.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    setCountriesList(filteredList);
    if (target.value.length === 0) {
      setCountriesList(uneditableCountriesList);
    }
  };

  const handleRegionFilter = ({ target }) => {
    const filteredList = uneditableCountriesList.filter(
      (country) => country.region === target.value
    );
    setCountriesList(filteredList);
    if (target.value === "" || countriesList.length === 0) {
      console.log("hello");
      setCountriesList(uneditableCountriesList);
    }
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <main className={!darkMode ? "homeWrapper" : "homeWrapperDark"}>
      <NavBar />
      <div className={!darkMode ? "searchDiv" : "searchDivDark"}>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search for a country"
        />
        <select onChange={handleRegionFilter}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div
        className={!darkMode ? "homeContentWrapper" : "homeContentWrapperDark"}
      >
        {countriesList &&
          countriesList.map((country, index) => {
            return (
              <Link
                key={index}
                to={`/countries/${country.name.common.toLowerCase()}`}
              >
                <CountryCard
                  countryPopulation={numberWithCommas(country.population)}
                  countryName={country.name.common}
                  countryRegion={country.region}
                  countryFlag={country.flags.png}
                  countryCapital={country.capital}
                />
              </Link>
            );
          })}
      </div>
    </main>
  );
}

export default Home;
