import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Statistics from './components/Statistics';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState(null);
  const [languageFilter, setLanguageFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  const filteredCountries = countries
    .filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(country => {
      if (!regionFilter && !languageFilter) return true;

      let matchesRegion = true;
      let matchesLanguage = true;

      if (regionFilter) {
        matchesRegion = country.region === regionFilter;
      }

      if (languageFilter) {
        if (typeof country.languages === 'object') {
          const selectedLanguage = Object.keys(country.languages).find(
            languageCode => country.languages[languageCode].toLowerCase() === languageFilter.toLowerCase()
          );
          matchesLanguage = !!selectedLanguage;
        } else {
          matchesLanguage = false;
        }
      }

      return matchesRegion && matchesLanguage;
    });


  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <Filter onRegionFilter={setRegionFilter} onLanguageFilter={setLanguageFilter} />
      <Statistics countries={filteredCountries} />
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;

