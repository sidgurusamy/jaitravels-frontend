import {React, useState} from "react";
import { FaUmbrella, FaPhoneAlt, FaFileContract,FaArrowRight } from "react-icons/fa";
import InquiryForm from "../Inquiry/InquiryForm";
import { useModal } from "../common/ModalContext.jsx";
export default function TravelInsComponent({tabCategory}) {
  const { showModal, setShowModal } = useModal();
    const closeModal = () => setShowModal(false);
  return (
    <>
    <div className="bg-white flex flex-col justify-center py-8 px-6 md:px-16 flex flex-col md:flex-row gap-12 items-center font-poppins">
      <div className="flex-1">
        <p className="text-primary font-bold text-2xl font-allura tracking-widest">Travel Worry-Free</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Why Choose Jai Travels Travel Insurance?
        </h2>
        <p className="text-gray-600 mb-6">
        Secure your journey with Jai Travels Insurance Providing comprehensive coverage for unexpected events. Travel confidently with our tailored plans and dedicated support.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaUmbrella className="w-7 h-7 mt-1 text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Comprehensive Coverage</h3>
              <p className="text-gray-500">Protection against trip cancellations, medical emergencies, and lost luggage.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className=" w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
              <p className="text-gray-500">Around-the-clock assistance for any travel-related issues.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaFileContract className="w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Customizable Plans</h3>
              <p className="text-gray-500">Tailor your insurance to fit your specific travel needs and budget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="bg-[#f79a6b] mt-8 py-16 flex flex-col items-center justify-center font-poppins">
      <h2 className="text-black text-3xl font-bold mb-4 text-center">
        Protect Your Trip with Travel Insurance
      </h2>
      <p className="text-center mb-6">
        Travel with peace of mind knowing you're covered with our comprehensive travel insurance plans. Get a quote now!
      </p>
      <div className="text-center flex md:flex-row gap-4">
                  {!showModal && (
        <button 
                onClick={() => setShowModal(true)}
                className="bg-white text-black border border-primary px-6 py-3 rounded-lg flex items-center">
          Get a Quote
        </button>
                  )}
        {showModal && (<InquiryForm  closeModal={closeModal} category={tabCategory} />)}
        </div>
      </div>   
    </>

  );
}
