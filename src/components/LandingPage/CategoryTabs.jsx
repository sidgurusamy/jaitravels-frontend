import { useState, useEffect } from "react";
import { FaUsers, FaHeart, FaGem, FaShip } from "react-icons/fa";
import { GiPalmTree, GiCampingTent } from "react-icons/gi";
import { TbBrandDisney } from "react-icons/tb";
import axios from "axios";
import PackageCard from "../Services/PackageCard";

const categories = [
  { name: "Group", icon: <FaUsers /> },
  { name: "Beach Resorts", icon: <GiPalmTree /> },
  { name: "Adventure", icon: <GiCampingTent /> },
  { name: "Luxury", icon: <FaGem /> },
  { name: "Honeymoon", icon: <FaHeart /> },
  { name: "Cruise", icon: <FaShip /> },
  { name: "DisneyLand", icon: <TbBrandDisney /> }
];

function CategoryTabs() {
  const [active, setActive] = useState("Group");
  const [page, setPage] = useState(1);
  const [allPackages, setAllPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPage(1);
    setAllPackages([]);
    fetchPackages(1);
  }, [active]);

  const fetchPackages = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/packages`, {
        params: { packageType: active, page: pageNumber, limit: 6 }
      });
      const newPackages = res.data;
      if (pageNumber === 1) {
        setAllPackages(newPackages);
      } else {
        setAllPackages(prev => [...prev, ...newPackages]);
      }
      setHasMore(newPackages.length === 6); // if less than 6, it's the last page
      setPage(pageNumber);
    } catch (err) {
      console.error("Failed to fetch packages", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="category-section" className="bg-offwhite py-8 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-semibold font-playfair text-start mb-6 tracking-wider">
        HOLIDAY PACKAGES: 
        <span className="text-primary font-allura text-4xl font-600">
          Trip for every Occasion and Season
        </span>
      </h2>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex overflow-x-auto gap-3 bg-white p-2 rounded-2xl shadow-md scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActive(category.name);
                window.scrollTo({
                  top: document.getElementById("category-section")?.offsetTop || 600,
                  behavior: "smooth"
                });
              }}
              className={`flex flex-col items-center justify-center gap-1 flex-shrink-0 min-w-[120px] px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all
                ${
                  active === category.name
                    ? "bg-gradient-to-r from-primary to-[#fb4e2b] text-white shadow"
                    : "bg-white text-[#444] hover:bg-gray-100"
                }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && page === 1 ? (
          <p className="text-center col-span-full">Loading packages...</p>
        ) : allPackages.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No tour packages found for {active}.
          </p>
        ) : (
          allPackages.map((pkg) => (
            <PackageCard key={pkg.pId} pkg={pkg} />
          ))
        )}
      </div>

      {/* Load More */}
      {hasMore && !loading && (
        <div className="col-span-full text-center mt-6">
          <button
            onClick={() => fetchPackages(page + 1)}
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default CategoryTabs;
