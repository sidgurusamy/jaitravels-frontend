import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaArrowRight, FaFire } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

function PackageCard({ pkg }) {
  if (!pkg) return null;
  const {
    packageName,
    images = [],
    destination,
    country,
    duration,
    badge,
    pId,
    pricing = {}
  } = pkg;

  const price = pricing.basic?.price || 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group transition hover:shadow-lg font-poppins">
      <div className="relative">
{badge && (
  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 flex items-center gap-1">
    {badge}
    <FaFire className="text-white text-sm" />
  </span>
)}
        <img
          src={images[0]}
          alt={packageName}
          className="h-48 w-full object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{packageName}</h3>

  {(duration?.days && duration?.nights) || country ? (
    <div className={`flex ${duration?.days && country ? 'justify-between' : 'justify-start'} text-md text-gray-600`}>
      {duration?.days && duration?.nights && (
        <div className="flex items-center gap-1">
          <FaRegCalendarAlt className="text-primary" />
          <span>{duration.days} Days | {duration.nights} Nights</span>
        </div>
      )}
      {country && (
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-primary" />
          <span>{country}</span>
        </div>
      )}
    </div>
  ) : null}
        <Link to={`/packages/${pId}`}>
          <button className="mt-3 w-full bg-white text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500 py-2 rounded-full flex items-center justify-center gap-2 text-sm transition">
            Tour Details <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PackageCard;
