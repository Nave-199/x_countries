import React, { useEffect, useState } from "react";
import "./Countries.css";

const CountryCard = ({ name, flagimg, flagalttext }) => {
  return (
    <div className="cart">
      <img src={flagimg} alt={`alttext:${flagalttext}`} className="image" />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const Apiurl = "https://xcountries-backend.azurewebsites.net/all";

  const [countries, setCountries] = useState([]);
  console.log({ countries });

  useEffect(() => {
    fetch(Apiurl)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div className="main">
      {countries.map((country) => (
        <CountryCard
          key={country.abbr}
          flagimg={country.flag}
          name={country.name}
          flagalttext={country.flagalttext}
        />
      ))}
    </div>
  );
}

export default Countries;
