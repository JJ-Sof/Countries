import React from 'react';
import { Link } from 'react-router-dom';

function CountryList({ countries }) {
    return (
        <div>
            <h2>Country List</h2>
            <ul>
                {countries.map((country, index) => (
                    <li key={`${country.alpha3Code}-${index}`}>
                        <Link to={`/country/${country.name.common}`}>{country.name.common} - {country.region}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CountryList;