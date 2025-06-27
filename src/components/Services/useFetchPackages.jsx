import { useState, useEffect } from "react";
import axios from "axios";

function useFetchPackages({ type, pId, country }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        let res;

        if (pId) {
          res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/packages/${pId}`);
        }
        else {
          const params = {};
          if (type) params.type = type;
          if (country) params.country = country;

          res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/packages`, { params });
        }
setPackages(res?.data ? (Array.isArray(res.data) ? res.data : [res.data]) : []);
      } catch (err) {
        console.error("Failed to load packages", err);
      } finally {
        setLoading(false);
      }
    };

    if (type || pId || country) fetchPackages();
  }, [type, pId, country]);

  return { packages, loading };
}

export default useFetchPackages;
