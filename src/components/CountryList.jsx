import React from 'react';

function CountryList({ countries }) {
    return (
      <div>
        <h2>Country List</h2>
        <ul>
          {countries.map((country, index) => (
            <li key={`${country.alpha3Code}-${index}`}>
              {country.name.common} - {country.region}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CountryList;