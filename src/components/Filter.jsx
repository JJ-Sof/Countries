import React from 'react';

function Filter({ onRegionFilter, onLanguageFilter }) {
    const handleRegionFilterChange = (e) => {
        const selectedRegionFilter = e.target.value;
        onRegionFilter(selectedRegionFilter);
    };

    const handleLanguageFilterChange = (e) => {
        const selectedLanguageFilter = e.target.value;
        onLanguageFilter(selectedLanguageFilter);
    };

    return (
        <div>
            <label htmlFor="filter1">Filter by Region:</label>
            <select id="filter1" onChange={handleRegionFilterChange}>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <label htmlFor="filter2">Filter by Language:</label>
            <select id="filter2" onChange={handleLanguageFilterChange}>
                <option value="">All</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="Arabic">Arabic</option>
                <option value="Russian">Russian</option>
                <option value="Portuguese">Portuguese</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Hindi">Hindi</option>
                <option value="Turkish">Turkish</option>
            </select>

        </div>
    );
}

export default Filter;