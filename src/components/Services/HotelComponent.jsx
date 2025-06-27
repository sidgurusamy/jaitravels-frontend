import { FaHotel, FaFilter, FaSearch } from "react-icons/fa";
import InquiryForm from '../Inquiry/InquiryForm';
import { useModal } from "../common/ModalContext.jsx";

export default function HotelComponent({tabCategory}) {
  const { showModal, setShowModal } = useModal();
    const closeModal = () => setShowModal(false);
  return (
    <div className="flex flex-col md:flex-row bg-white py-16 px-6 md:px-16 gap-12 font-poppins">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Effortless Hotel Booking with Jai Travels
        </h1>
        <p className="text-gray-600">
          Discover a seamless hotel booking experience with Jai Travels. Our platform offers advanced search capabilities, refined filters, and a variety of booking options to suit every traveler's needs and preferences.
        </p>

        <hr className="border-t border-gray-300 my-4" />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-start gap-4">
            <FaHotel className="text-gray-800 w-10 h-10 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Extensive Selection</h3>
              <p className="text-gray-600">
                Choose from a wide range of hotels, from budget-friendly to luxurious accommodations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaFilter className="text-gray-800 w-10 h-10 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Advanced Search Filters</h3>
              <p className="text-gray-600">
                Easily narrow down your options by price, location, amenities, and more.
              </p>
            </div>
          </div>
        </div>
</div>

<div>
            {!showModal && (
<button onClick={() => setShowModal(true)}
className="hover:bg-primary hover:text-white bg-white text-primary border border-primary px-6 py-3 rounded-lg flex items-center gap-2">
          Explore Hotels <FaSearch className="w-5 h-5 ml-2"/>
        </button>
            )}
        {showModal && (<InquiryForm  closeModal={closeModal} category={tabCategory} />)}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex items-center">
        <img
          src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912025/hotels_idfpbx.jpg`}
          alt="Hotel Booking"
          className="w-full h-full max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
