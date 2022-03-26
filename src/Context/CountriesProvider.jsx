import React, { useState } from "react";
import { useEffect } from "react";
import CountriesContext from "./CountriesContext";

const CountriesProvider = ({ children }) => {
  const [countriesList, setCountriesList] = useState([]);
  const [uneditableCountriesList, setUneditableCountriesList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchCountries = async () => {
    const URL = "https://restcountries.com/v3.1/all";
    const data = await fetch(URL);
    const jsonData = await data.json();
    const alphabJsonData = jsonData.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCountriesList(alphabJsonData);
    setUneditableCountriesList(alphabJsonData);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const context = {
    countriesList,
    setCountriesList,
    uneditableCountriesList,
    setUneditableCountriesList,
    darkMode,
    setDarkMode,
  };

  return (
    <CountriesContext.Provider value={context}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContext, CountriesProvider as Provider };
