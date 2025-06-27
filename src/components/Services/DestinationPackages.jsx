import { React, useState } from "react";
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DestinationPackages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const destinations = [
    { name: "Canada", tours: 3, description: "Explore breathtaking destinations in Canada.", image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911930/canada_sjbcbs.jpg` },
    { name: "United States", tours: 7, description: "Explore vibrant cities, scenic drives, and natural wonders across the U.S.", image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915446/usa_tienst.jpg` },
    { name: "India", tours: 2, description: "Discover the rich culture of India.", image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912027/india_thabzt.jpg` },
    { name: "Japan", tours: 2, description: "Wander through cherry blossom trails and admire Mount Fuji’s serene beauty.", image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912040/japan_kyrlhc.jpg` },
    { name: "Australia", tours: 2, description: "Adventure through Australia's unique landscapes and wildlife.", image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911929/australia_tujziv.jpg` },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white py-8 px-4 md:px-10"
    >
      <section>
       <div className="mb-3">
  <h2 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider">
    DISCOVER DESTINATIONS :
    <span className="text-primary font-allura text-4xl font-bold ml-2"> Hot and Trending</span>
  </h2>
</div>

<div className="flex justify-end mb-1 mr-2">
  <Link
    to="/destinations"
    className="text-md lg:text-lg font-bold text-primary hover:underline transition"
  >
    View all
  </Link>
</div>


        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                index === 0 ? "col-span-2 lg:col-span-2 h-96" : "h-64 lg:h-96"
              }`}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-opacity-30 hover:bg-black hover:bg-opacity-50 text-white flex flex-col justify-end lg:group-hover:justify-start transition-all duration-500 p-4 sm:p-6">
                <div className="mb-2">
                  <h3 className="text-lg sm:text-2xl pb-1 font-bold font-playfair">
                    {destination.name}
                  </h3>
                  <p className="text-xs sm:text-sm bg-primary px-3 py-1 sm:px-5 sm:py-2 inline-block mt-1">
                    {destination.tours} TOURS
                  </p>
                </div>

                <div
                  className={`${
                    activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  } lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300`}
                >
                  <p className="text-xs sm:text-sm font-poppins text-[#BDBDBD] mb-2 pt-2">
                    {destination.description}
                  </p>
                  <Link
  to={`/destinations?country=${destination.name}`}
  className="mt-3 w-full sm:w-3/5 hover:bg-primary bg-white hover:text-white text-primary border border-primary py-2 rounded-full flex items-center justify-center gap-2 font-semibold font-poppins text-xs sm:text-sm transition"
>
                    More Details <FaArrowRight className="text-xs" />
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}

export default DestinationPackages;
