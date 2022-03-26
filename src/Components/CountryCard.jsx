import React, { useContext } from "react";
import CountriesContext from "../Context/CountriesContext";
import "./CountryCard.css";

function CountryCard(props) {
  const {
    countryName,
    countryPopulation,
    countryRegion,
    countryFlag,
    countryCapital,
  } = props;
  const { darkMode } = useContext(CountriesContext);
  return (
    <div className={!darkMode ? "cardWrapper" : "cardWrapperDark"}>
      <div className="cardImageContainer">
        <img
          className="cardImage"
          src={countryFlag}
          alt={`Flag of ${countryName}`}
        />
      </div>
      <div className="cardContentWrapper">
        <p className="cardName">{countryName}</p>
        <div className="cardInfoWrapper">
          <p className="cardText">
            <span className="cardSpan">Population of: </span>
            {countryPopulation}
          </p>
          <p className="cardText">
            <span className="cardSpan">Region: </span>
            {countryRegion}
          </p>
          <p className="cardText">
            <span className="cardSpan">Capital: </span>
            {countryCapital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
