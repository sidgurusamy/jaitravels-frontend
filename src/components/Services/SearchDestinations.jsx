import axios from "axios";
import { useState, useEffect } from "react";

const SearchDestinations = ({ handleFilterChange, value }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch countries on page load
useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all?fields=name");
      setCountries(response.data.map((country) => country.name.common));
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  fetchCountries();
}, []);


  const handleInputChange = (e) => {
    const value = e.target.value;
    handleFilterChange({ target: { name: "country", value } });

    if (value.length >= 2) {
      const filtered = countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (country) => {
    handleFilterChange({ target: { name: "country", value: country } });
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-gray-600 mb-2">Destination</label>
      <input
        type="text"
        name="country"
        value={value}
        onChange={handleInputChange}
        placeholder="Type a country name..."
        className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm"
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto mt-1 w-full">
          {suggestions.map((country, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDestinations;
