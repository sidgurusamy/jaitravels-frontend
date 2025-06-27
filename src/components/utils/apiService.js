// apiService.js

import axios from "axios";

const API_KEY = "YOUR_API_KEY";  // Replace with your actual API key
const BASE_URL = "https://api.countrystatecity.in/v1";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-CSCAPI-KEY": API_KEY,
  },
});

export const getCitiesByCountry = async (countryCode) => {
  try {
    const response = await apiClient.get(`/countries/${countryCode}/cities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};
