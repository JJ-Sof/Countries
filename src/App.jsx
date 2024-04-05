import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDesc from './components/CountryDesc';
import Chart from './components/Chart';
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
    <Router>
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <Filter onRegionFilter={setRegionFilter} onLanguageFilter={setLanguageFilter} />
      <Statistics countries={filteredCountries} />
      <Chart countries={filteredCountries}/>
      <Routes>
        <Route path="/" element={<CountryList countries={filteredCountries} />} />
        <Route path="/country/:countryName" element={<CountryDesc countries={countries} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

