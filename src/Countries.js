// import React, { useEffect, useState } from "react";
// import "./Countries.css";

// const CountryCard = ({ name, flagimg, flagalttext }) => {
//   return (
//     <div className="cart">
//       <img src={flagimg} alt={flagalttext} className="image" />
//       <h2>{name}</h2>
//     </div>
//   );
// };

// function Countries() {
//   const Apiurl = "https://xcountries-backend.azurewebsites.net/all";

//   const [countries, setCountries] = useState([]);
//   console.log({ countries });

//   useEffect(() => {
//     fetch(Apiurl)
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data);
//       })
//       .catch((error) => console.log("Error:", error));
//   }, []);

//   return (
//     <div className="main">
//       {countries.map((country) => (
//         <CountryCard
//           key={country.abbr}
//           flagimg={country.flag}
//           name={country.name}
//           flagalttext={country.flagalttext}
//         />
//       ))}
//     </div>
//   );
// }

// export default Countries;

import { useEffect, useState } from "react";
// import "./Countries.module.css";

const Country = ({ flagUrl, name, altFlag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid #221313",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <img
        src={flagUrl}
        alt={altFlag}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default function Countries() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect((fetchCountries) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  console.log({ countries });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {/* <h1>COnt</h1> */}
      {/* <h1>Countries</h1> */}
      {/* <button onClick={fetchCountries}>Fetch Countries</button> */}
      {/* <ul> */}
      {/* {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))} */}
      {/* </ul> */}
      {countries.map((country) => (
        <Country
          key={country.cca3}
          flagUrl={country.flags.png}
          name={country.name.common}
          altFlag={country.flags.alt}
        />
      ))}
    </div>
  );
}
