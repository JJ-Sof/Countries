
import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDesc({ countries }) {
  let { countryName } = useParams();
  const country = countries.find(country => country.name.common === countryName);
  const population = country.population;
  const languages = Object.values(country.languages).join(', ');
  const independent = country.independent;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <h2>Population: {population.toLocaleString()}</h2>
      <h2>Languages: {languages}</h2>
      <h2>Independent: {independent ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default CountryDesc;
