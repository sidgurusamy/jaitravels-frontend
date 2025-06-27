import React, { useState, useEffect } from 'react'
import PackageCard from "./PackageCard.jsx";
import useFetchPackages from './useFetchPackages.jsx';
import { useParams } from 'react-router-dom';
import Navbar from "../LandingPage/Navbar";
import axios from 'axios';
import SearchDestinations from './SearchDestinations.jsx';
import { FaRegTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Listbox } from "@headlessui/react";

function SearchPackages({tabCategory}) {
  const { id } = useParams();
  const { packages: packages, loading } = useFetchPackages({ id });
  const countries = ["Canada", "India", "Europe", "Japan", "Indonesia"]
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const countryFromURL = queryParams.get("country");
const typeFromURL = queryParams.get("type");

  const packageTypes = ["Group", "Beach Resorts", "Adventure", "Luxury","Honeymoon", "Cruise","DisneyLand"];

const [filters, setFilters] = useState({
  country: countryFromURL || "",
  departureDate: "",
  duration: 2,
  packageType: typeFromURL || "",
  hotelCategory: [],
  sortBy: "popularity"
});
useEffect(() => {
  if (countryFromURL) {
    handleSearch();
  }
}, [countryFromURL]);

useEffect(() => {
  if (typeFromURL) {
    handleSearch();
  }
}, [typeFromURL]);

      const [filteredPackages, setFilteredPackages] = useState(packages);
    
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
      };
    
      const handleDurationChange = (e) => {
        setFilters({ ...filters, duration: parseInt(e.target.value) });
      };
const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "duration-low", label: "Duration: Short to Long" },
  { value: "duration-high", label: "Duration: Long to Short" }
];

    
      const handleSearch = async () => {
        try {
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/packages`, {
            params: {
              country: filters.country,
              duration: filters.duration,
              packageType: filters.packageType,
              budget: filters.budget,
              hotelCategory: filters.hotelCategory.join(","), // comma-separated
              sortBy: filters.sortBy
            }
          });
      
          setFilteredPackages(res.data);
        } catch (err) {
          console.error("Failed to fetch filtered packages", err);
        }
      };
    
      const clearFilters = () => {
        setFilters({
          country: "",
          departureDate: "",
          duration: "",
          packageType: "",
          budget: 5000,
          hotelCategory: [],
          sortBy: "popularity"
        });
        setFilteredPackages(packages);
      };
  return (
        <React.Fragment>
          <section className="container mx-auto px-4 py-8 font-sans bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-playfair text-gray-800 mb-2 tracking-tight">Explore Travel Destinations</h1>
        <p className="text-gray-600 font-poppins">Find your perfect getaway with our custom selections</p>
      </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-playfair text-gray-800">Filter Packages</h2>
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-md font-medium font-poppins text-red-500 hover:text-red-600 transition-colors"
          >
            <FaRegTrashAlt className='text-xl' />
            Clear All
          </button>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 font-poppins lg:grid-cols-4 gap-6 pb-3">
            {/* Destination */}
            <div>
            <SearchDestinations handleFilterChange={handleFilterChange} value={filters.country} />
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={filters.departureDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleFilterChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            {/* Package Type */}
              <Listbox
                        value={filters.packageType}
                        onChange={(value) => handleFilterChange({ target: { name: "packageType", value } })}
                      >
                        <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Package Type</label>
              <div className="relative w-full">
                          <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-xl text-md focus:ring-1 focus:ring-primary focus:border-primary flex justify-between items-center">
                            {filters.packageType || "All Types"}
                            <FaChevronDown className="text-gray-400" />
                          </Listbox.Button>
                          <Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 text-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            {packageTypes.map((option, idx) => (
                              <Listbox.Option
                                key={idx}
                                value={option}
                                className={({ active }) =>
                                  `cursor-pointer select-none px-4 py-2 ${active ? "bg-primary text-white" : "text-gray-800"
                                  }`
                                }
              
                              >
{option}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                          </div>
                        </div>
                      </Listbox>

            {/* Duration */}
            <div className="sm:col-span-2 md:col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Duration: <span className="text-md font-bold text-gray">{filters.duration} Nights</span>
              </label>
              <input
                type="range"
                name="duration"
                min="1"
                max="20"
                step="1"
                value={filters.duration}
                onChange={handleDurationChange}
                className="w-full h-2 accent-primary rounded-md"
              />
            </div>

            {/* Hotel Category */}
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Hotel Category</label>
              <div className="flex flex-wrap gap-3">
                {[3, 4, 5].map((star) => {
                  const isSelected = filters.hotelCategory.includes(star);
                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setFilters((prev) => ({
                          ...prev,
                          hotelCategory: isSelected
                            ? prev.hotelCategory.filter((s) => s !== star)
                            : [...prev.hotelCategory, star],
                        }));
                      }}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition duration-200 ${isSelected
                        ? "bg-primary text-white border-primary shadow"
                        : "text-gray-600 border-gray-300 hover:bg-primary hover:text-white hover:border-primary"
                        }`}
                    >
                      <span className="text-primary-500 text-lg">★</span>
                      <span className="font-medium text-sm pr-1">{star}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sort + Search Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t pt-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
          <Listbox
                        value={filters.sortBy}
                        onChange={(value) => handleFilterChange({ target: { name: "sortBy", value } })}
                      >
                        <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Sort By</label>
              <div className="relative w-full">
                          <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-xl text-md focus:ring-1 focus:ring-primary focus:border-primary flex justify-between items-center">
{sortOptions.find(option => option.value === filters.sortBy)?.label || "Sort By"}
                            <FaChevronDown className="text-gray-400" />
                          </Listbox.Button>
                          <Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 text-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            {sortOptions.map((option, idx) => (
                              <Listbox.Option
                                key={idx}
                                value={option.value}
                                className={({ active }) =>
                                  `cursor-pointer select-none px-4 py-2 ${active ? "bg-primary text-white" : "text-gray-800"
                                  }`
                                }
              
                              >
{option.label}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                          </div>
                        </div>
                      </Listbox>
                      </div>
            
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-white text-white hover:text-primary border border-primary text-white text-gray-900 font-poppins tracking-widest font-semibold px-9 py-2.5 rounded-full shadow transition duration-200 w-full sm:w-auto"
            >SEARCH</button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.length > 0 ? (
            filteredPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">No packages match your filters.</p>
          )}
        </div>
      </section>
      </React.Fragment>
  )
}

export default SearchPackages;
