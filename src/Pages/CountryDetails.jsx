/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CountriesContext from "../Context/CountriesContext";
import "./CountryDetails.css";

function CountryDetails() {
  const history = useHistory();
  const [countryDetails, setCountryDetails] = useState();
  const fetchPath = history.location.pathname.split("/")[2];
  const { uneditableCountriesList } = useContext(CountriesContext);

  const detailsFetch = async () => {
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${fetchPath}`
    );
    const jsonData = await data.json();
    setCountryDetails(jsonData[0]);
  };

  useEffect(() => {
    detailsFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    detailsFetch();
  }, [history.location.pathname]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { darkMode } = useContext(CountriesContext);

  return (
    <main className={!darkMode ? "detailsWrapperLight" : "detailsWrapperDark"}>
      <NavBar />
      <div className={!darkMode ? "detailsBackDivLight" : "detailsBackDivDark"}>
        <Link to="/">Back</Link>
      </div>
      {countryDetails && (
        <div
          className={
            !darkMode ? "LowerDetailsWrapper" : "LowerDetailsWrapperDark"
          }
        >
          <div
            className={
              !darkMode ? "detailsImageWrapperLight" : "detailsImageWrapperDark"
            }
          >
            <img
              className="detailsFlagImg"
              src={countryDetails.flags.png}
              alt={countryDetails.name.common}
            />
          </div>
          <div
            className={
              !darkMode
                ? "detailsContentWrapperLight"
                : "detailsContentWrapperDark"
            }
          >
            <h1
              className={
                !darkMode
                  ? "detailsCountryTitleLight"
                  : "detailsCountryTitleDark"
              }
            >
              {countryDetails.name.common}
            </h1>
            <div
              className={
                !darkMode ? "informationContainer" : "informationContainerDark"
              }
            >
              <p>
                <span>Official Name: </span>
                {countryDetails.name.official}
              </p>
              <p>
                <span>Population: </span>
                {numberWithCommas(countryDetails.population)}
              </p>
              <p>
                <span>Region: </span>
                {countryDetails.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {countryDetails.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {countryDetails.capital}
              </p>
              <p>
                <span>Top Level Domain: </span>
                {countryDetails.tld[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.keys(countryDetails.currencies).join(", ")}
              </p>
              <p>
                <span>Languages: </span>
                {Object.values(countryDetails.languages).join(", ")}
              </p>
            </div>
            <div
              className={
                !darkMode
                  ? "borderButtonContainer"
                  : "borderButtonContainerDark"
              }
            >
              <p>Border Countries </p>
              {countryDetails.borders &&
                countryDetails.borders.flatMap((borderingCountry) => {
                  return uneditableCountriesList
                    .filter((country) => country.cca3 === borderingCountry)
                    .map((filteredCountry) => (
                      <Link
                        to={`/countries/${filteredCountry.name.common}`}
                        key={filteredCountry.cca2}
                      >
                        {filteredCountry.name.common}
                      </Link>
                    ));
                })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CountryDetails;
