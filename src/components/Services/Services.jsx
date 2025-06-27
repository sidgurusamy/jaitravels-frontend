import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RenderFlightTab, RenderRentalCarsTab, RenderTravelInsuranceTab, RenderHotelTab, RenderHolidayPackagesTab } from "./RenderAllForms";

const tabs = [
  { title: "FLIGHT", name: "Flight", id: "book-flight" },
  { title: "HOTELS", name: "Hotels", id: "book-hotels" },
  { title: "RENTAL CARS", name: "CarRentals", id: "book-car-rentals" },
  { title: "TRAVEL INSURANCE", name: "TravelInsurance", id: "book-travel-insurance" },
  { title: "HOLIDAY PACKAGES", name: "HolidayPackages", id: "book-holiday-packages" },
];

const Services = () => {
  const location = useLocation();
  const hash = location.hash.slice(1);
  const [activeTab, setActiveTab] = useState("Flight");

  // Update `activeTab` based on hash
  useEffect(() => {
    if (hash) {
      const matchingTab = tabs.find((tab) => tab.id === hash);
      if (matchingTab) {
        setActiveTab(matchingTab.name);

        const targetElement = document.getElementById(hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [hash]);

  const renderContent = () => {
    switch (activeTab) {
      case "Flight":
        return <RenderFlightTab activeTab={activeTab} />;
      case "Hotels":
        return <RenderHotelTab activeTab={activeTab} />;
      case "CarRentals":
        return <RenderRentalCarsTab activeTab={activeTab} />;
      case "TravelInsurance":
        return <RenderTravelInsuranceTab activeTab={activeTab} />;
      case "HolidayPackages":
        return <RenderHolidayPackagesTab activeTab={activeTab} />;
      default:
        return <div className="text-center text-gray-500">Content not available</div>;
    }
  };

  return (
    <>
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="font-poppins text-2xl md:text-4xl lg:text-4xl md:tracking-wider py-4">Explore Our Services</h2>
          <div className="flex space-x-4 border-b pb-4 mb-6 overflow-x-scroll scrollbar-hide md:overflow-x-auto font-poppins font-semibold">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 ${
                  activeTab === tab.name ? "border-b-4 border-primary" : "text-gray-500"
                }`}
                id={tab.id}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {renderContent()}
        </section>
    </>
  );
};

export default Services;
