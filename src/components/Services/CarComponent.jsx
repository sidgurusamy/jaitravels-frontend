import { FaCheckCircle, FaCar, FaRoute } from "react-icons/fa";
import InquiryForm from '../Inquiry/InquiryForm';
import { useModal } from "../common/ModalContext.jsx";

function CarComponent({tabCategory}) {
  const { showModal, setShowModal } = useModal();
  const closeModal = () => setShowModal(false);
  return (
<>
<section className="bg-white font-poppins">
<div className="flex flex-col items-center justify-center py-4 bg-white px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Rent a Car for Your Adventure</h1>
      <p className="text-gray-600 mb-8 text-center">Explore your destination at your own pace with our wide selection of rental cars.</p>

      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-primary w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Wide Selection</h2>
          <p className="text-gray-500 text-center">Cars for every need</p>
        </div>

        <div className="flex flex-col items-center">
          <FaCar className="text-primary w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Competitive Rates</h2>
          <p className="text-gray-500 text-center">Best prices guaranteed</p>
        </div>

        <div className="flex flex-col items-center">
          <FaRoute className="text-primary w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Easy Booking</h2>
          <p className="text-gray-500 text-center">Quick and convenient</p>
        </div>
      </div>

        {!showModal && (
      <button onClick={() => setShowModal(true)}
       className="hover:bg-primary hover:text-white bg-white text-primary border border-primary px-6 py-3 rounded-lg flex items-center">
        <FaCar className="w-5 h-5 mr-2" />
        Find a Car
      </button>
        )}
      {showModal && (<InquiryForm  closeModal={closeModal} category={tabCategory} />)}
    </div>
</section>
</>
  )
}

export default CarComponent
