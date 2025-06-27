import {React, useState} from "react";
import { FaGlobe, FaTags, FaPlane } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import InquiryForm from "../Inquiry/InquiryForm";
import { useModal } from "../common/ModalContext.jsx";

export default function FlightBooking({tabCategory}) {
  const { showModal, setShowModal } = useModal();
  const closeModal = () => setShowModal(false);
  return (
    <section className="bg-white font-poppins"id="book">
    <div className="bg-white py-2 px-6 md:px-2 space-y-4 font-poppins">
      {/* Top Section */}
      <div className="text-center space-y-4">
        <h3 className="font-bold text-2xl text-lg">
          Book Your Dream Flight with Jai Travels
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-black-900 tracking-wider">
          Fly<span className="text-primary font-allura"> High </span>with the best deals!
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover affordable flights to top destinations worldwide. We offer a wide range of flight options, ensuring a comfortable and convenient travel experience.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912022/flightride_tfwi60.jpg`}
          alt="Flight Deals"
          className="w-full max-w-4xl h-auto object-cover"
        />
      </div>
      {/* Features Section */}
      <div className="bg-white px-6 py-4 md:px-8 rounded-lg">

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Feature 1 */}
          <div className="flex-1 flex items-start gap-4">
            <FaGlobe className="text-primary w-12 h-6 mt-1" />
            <div>
              <h3 className="text-md font-semibold text-gray-900">Extensive Destination Coverage</h3>
              <p className="text-gray-600">
                Explore countless destinations across the globe. Find the perfect flight to suit your travel needs.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 flex items-start gap-4">
            <FaTags className="text-primary w-12 h-6 mt-1" />
            <div>
              <h3 className="text-md font-semibold text-gray-900">Competitive Pricing</h3>
              <p className="text-gray-600">
                Benefit from the best prices on flights. We compare fares from multiple airlines to offer you unbeatable deals.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 flex items-start gap-4">
            <FaPlane className="text-primary w-12 h-6 mt-1" />
            <div>
              <h3 className="text-md font-semibold text-gray-900">Easy Booking Process</h3>
              <p className="text-gray-600">
                Enjoy a seamless and user-friendly booking experience. Book your flight in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="flex justify-center pb-6">
          {!showModal && (
<button onClick={() => setShowModal(true)}
       className="hover:bg-primary hover:text-white bg-white text-primary border border-primary px-6 py-3 rounded-lg flex items-center">
        Book Flights
        <MdFlight className="w-5 h-5 ml-2" />
      </button>
          )}
      {showModal && (<InquiryForm  closeModal={closeModal} category={tabCategory} />)}
        </div>
    </div>

    </section>
  );
}