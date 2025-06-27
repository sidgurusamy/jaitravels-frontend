import { useParams } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../components/common/ModalContext.jsx";
import useFetchPackages from "../components/Services/useFetchPackages.jsx";
import {
  FaRegCalendarAlt, FaTag, FaUsers, FaHeart, FaGem, FaShip,
  FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaWhatsapp
} from "react-icons/fa";
import {
  GiPalmTree, GiCampingTent, GiMeditation, GiMeal, GiRiver
} from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { TbBinocularsFilled, TbBrandDisney } from "react-icons/tb";
import InquiryForm from "../components/Inquiry/InquiryForm.jsx";

const typeIcons = {
  group: <FaUsers className="text-primary" />,
  honeymoon: <FaHeart className="text-primary" />,
  luxury: <FaGem className="text-primary" />,
  cruise: <FaShip className="text-primary" />,
  adventure: <GiCampingTent className="text-primary" />,
  "beach resorts": <GiPalmTree className="text-primary" />,
};

const cruiseType = [
  { icon: <FaShip className="text-primary h-6 w-7 mr-3" />, name: "Cruise Only" },
  { icon: <TbBinocularsFilled className="text-primary h-6 w-7 mr-3" />, name: "Cruise Tour" },
  { icon: <GiRiver className="text-primary h-6 w-7 mr-3" />, name: "Cruise River" },
];

function PackageDetails() {
  const { pId } = useParams();
  const { packages, loading } = useFetchPackages({ pId });
  const pkg = packages[0];
  const [activeTab, setActiveTab] = useState("overview");
  const [openDay, setOpenDay] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const { showModal, setShowModal } = useModal();
  const closeModal = () => setShowModal(false);

  if (loading) return <p className="text-center text-lg md:text-xl">Loading package...</p>;
  if (!pkg) return <p className="text-center text-lg md:text-xl text-red-600">Package not found</p>;

  const packageTypes = Array.isArray(pkg.packageType) ? pkg.packageType : [pkg.packageType?.toLowerCase()];

  const tabConfig = {
    default: ["overview"],
    disneyland: ["overview", pkg.tickets && "tickets", pkg.resorts?.length && "resorts"].filter(Boolean),
    cruise: ["overview", pkg.locations && "locations", pkg.cruiseTypes && "cruise types", pkg.cruiseLines && "cruise lines"].filter(Boolean),
    regular: ["overview", pkg.locations && "locations", pkg.itinerary && "itinerary", pkg.inclusions && "inclusions", pkg.hotels && "accommodation"].filter(Boolean),
  };

  let selectedTabs = tabConfig.default;
  if (packageTypes.includes("disneyland")) {
    selectedTabs = tabConfig.disneyland;
  } else if (packageTypes.includes("cruise")) {
    selectedTabs = tabConfig.cruise;
  } else {
    selectedTabs = tabConfig.regular;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 font-poppins">
      <h2 className="text-2xl md:text-4xl mb-4 text-center md:text-left">{pkg.packageName}</h2>

      {/* Images */}
      {pkg.images?.length > 0 && (
        <>
          <div className="relative w-full h-56 md:h-96 mb-2">
            <img src={pkg.images[currentImage]} alt="Package" className="w-full h-full object-cover rounded-xl" />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={() => setCurrentImage((prev) => (prev === 0 ? pkg.images.length - 1 : prev - 1))}>
              <FaChevronLeft />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              onClick={() => setCurrentImage((prev) => (prev + 1) % pkg.images.length)}>
              <FaChevronRight />
            </button>
          </div>
          <div className="flex justify-end mb-4">
            <a href={`https://wa.me/16475005071?text=${encodeURIComponent(
    `Check out this travel package: ${pkg.packageName} https://jaitravels.ca/packages/${pkg.pId}`
  )}`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-base">
              <FaWhatsapp /> Share
            </a>
          </div>
        </>
      )}

      {/* Details */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-md md:text-md mb-6">
        <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" />{pkg.country}</div>
        {pkg.duration?.days && (
          <div className="flex items-center gap-2"><FaRegCalendarAlt className="text-primary" />{pkg.duration.days} Days | {pkg.duration.nights} Nights</div>
        )}
        {packageTypes.map((type, idx) => (
          <div key={idx} className="flex items-center gap-2 capitalize">{typeIcons[type] || <TbBrandDisney className="text-primary" />} {type}</div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-3 mb-6">
        {selectedTabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-md capitalize ${activeTab === tab ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>{tab}</button>
        ))}
      </div>

      {/* Dynamic Tab Contents */}
      {activeTab === "overview" && (
        <div className="mb-10 text-md md:text-base text-gray-700">{pkg.overview}</div>
      )}

      {activeTab === "locations" && pkg.locations && (
        <div className="mb-10 text-md md:text-base text-gray-700">
          <p className="mb-2 text-lg font-semibold">{packageTypes.includes("cruise") ? "Explore these Cruise destinations:" : "Package   includes visits to:"}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3">
            {pkg.locations.map((loc, i) => <li key={i}>{loc}</li>)}
          </ul>
        </div>
      )}

      {activeTab === "itinerary" && pkg.itinerary && (
        <div className="mb-10 text-sm md:text-base">
          {pkg.itinerary.map((day, i) => (
            <div key={i} className="border rounded-lg mb-4">
              <button onClick={() => setOpenDay(openDay === i ? null : i)} className="w-full px-4 py-3 text-left text-primary font-semibold bg-gray-100">
                Day {day.day || i + 1}: {day.title || "Untitled"}
                <span className="float-right">{openDay === i ? "−" : "+"}</span>
              </button>
              {openDay === i && <div className="px-4 py-3 bg-white text-gray-700">{day.description}</div>}
            </div>
          ))}
        </div>
      )}

      {activeTab === "inclusions" && pkg.inclusions && (
        <div className="mb-10 grid sm:grid-cols-3 gap-6 text-sm md:text-base text-center">
          {pkg.inclusions.flights && (
            <div>
              <div className="flex justify-center items-center gap-2"><MdFlight className="text-xl text-primary" /><span className="font-semibold">Flights</span></div>
              <p>{pkg.inclusions.flights}</p>
            </div>
          )}
          {pkg.inclusions.meals && (
            <div>
              <div className="flex justify-center items-center gap-2"><GiMeal className="text-xl text-primary" /><span className="font-semibold">Meals</span></div>
              <ul>{pkg.inclusions.meals.map((m, i) => <li key={i}>{m}</li>)}</ul>
            </div>
          )}
          {pkg.inclusions.transfers && (
            <div>
              <div className="flex justify-center items-center gap-2"><IoCarSportSharp className="text-xl text-primary" /><span className="font-semibold">Transfers</span></div>
              <ul>{pkg.inclusions.transfers.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </div>
          )}
        </div>
      )}

      {activeTab === "tickets" && pkg.tickets && (
        <div className="mb-10 text-sm md:text-base">
          <h3 className="text-lg font-semibold mb-2">You can purchase your Disney Tickets from:</h3>
          <ul className="list-disc list-inside">{pkg.tickets.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
      )}

      {activeTab === "resorts" && Array.isArray(pkg.resorts) && pkg.resorts.length > 0 && (
        <div className="mb-10 text-sm md:text-base">
          <h3 className="text-lg font-semibold mb-2">Discover the Magic of Disneyland resort Hotels</h3>
          <ul className="list-disc list-inside">{pkg.resorts.map((h, i) => <li key={i}>{h}</li>)}</ul>
        </div>
      )}

      {activeTab === "cruise types" && pkg.cruiseTypes && (
        <div className="mb-10 text-lg text-center">
          <ul className="flex flex-col gap-2">{cruiseType.map((ct, i) => <li key={i} className="flex items-center">{ct.icon} {ct.name}</li>)}</ul>
        </div>
      )}

      {activeTab === "cruise lines" && pkg.cruiseLines && (
        <div className="mb-10">
          <h4 className="font-semibold text-lg mb-2">Our Popular Cruise Lines</h4>
          <ul className="list-disc list-inside">{pkg.cruiseLines.map((line, i) => <li key={i}>{line}</li>)}</ul>
        </div>
      )}

      {activeTab === "accommodation" && pkg.hotels && (
        <div className="mb-10 text-sm md:text-base">
          <p className="text-gray-700 mb-4">Hotels listed are for reference. Actual accommodation will be confirmed prior to departure.</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <ul className="space-y-3">
                {Object.values(pkg.hotels).map((h, i) => h?.stayAt && (
                  <li key={i} className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" />{h.stayAt}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Hotel</h4>
              <ul className="space-y-3">
                {Object.values(pkg.hotels).map((h, i) => h?.hotelName && (
                  <li key={i}><div>{h.hotelName}</div><div className="flex items-center gap-1"><span>{h.hotelCategory}</span><span className="text-primary">★</span></div></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4">Room occupancy: Maximum 2 adults</p>
        </div>
      )}

      <div className="flex justify-center mt-8">
                  {!showModal && (
        <button onClick={() => setShowModal(true)} className="bg-white text-primary border border-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold w-full sm:w-1/2">BOOK NOW</button>
                  )}
      </div>

      {showModal && (<InquiryForm closeModal={closeModal} category="Holiday Vacations" />)}
    </div>
  );
}

export default PackageDetails;
