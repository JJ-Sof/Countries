import React from 'react';

function Statistics({ countries }) {
    const totalCountries = countries.length;
    const averagePopulation = countries.reduce((acc, country) => acc + country.population, 0) / totalCountries;
    const independentCountriesCount = countries.filter(country => country.independent).length;

    return (
        <div>
            <h3>Statistics</h3>
            <p>Total Countries: {totalCountries}</p>
            <p>Average Population: {averagePopulation.toLocaleString()}</p>
            <p>Independent Countries: {independentCountriesCount}</p>
        </div>
    );
}

export default Statistics;
