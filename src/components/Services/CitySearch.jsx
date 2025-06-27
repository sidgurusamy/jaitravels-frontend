import { useState, useEffect } from "react";
import { getCitiesByCountry } from "./apiService";

const CitySearch = ({ selectedCountry, handleCitySelect }) => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  // Fetch cities when country changes
  useEffect(() => {
    if (selectedCountry) {
      fetchCities(selectedCountry);
    }
  }, [selectedCountry]);

  const fetchCities = async (countryCode) => {
    const cityList = await getCitiesByCountry(countryCode);
    setCities(cityList);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter cities locally
    if (value.length >= 2) {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCityClick = (city) => {
    setQuery(city.name);
    handleCitySelect(city);
    setFilteredCities([]);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-gray-600 mb-2">City</label>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type a city name..."
        className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm"
      />

      {filteredCities.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto mt-1 w-full">
          {filteredCities.map((city) => (
            <li
              key={city.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCityClick(city)}
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;

/*
import { useState } from "react";
import CitySearch from "./CitySearch";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Default country: India
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">City Search</h1>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">Select Country</label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>

      <CitySearch 
        selectedCountry={selectedCountry}
        handleCitySelect={(city) => setSelectedCity(city.name)}
      />

      {selectedCity && (
        <div className="mt-4">
          <p>Selected City: <strong>{selectedCity}</strong></p>
        </div>
      )}
    </div>
  );
};

export default App;

*/