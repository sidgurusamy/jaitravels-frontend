import { IoMdClose } from "react-icons/io";

const FormHeader = ({ category, closeModal }) => {
  const titleMap = {
    Flight: "Flight Enquiry Form",
    Hotels: "Hotel Enquiry Form",
    CarRentals: "Car Rental Enquiry Form",
    TravelInsurance: "Travel Insurance Enquiry Form",
  };

  return (
    <div className="bg-gradient-to-r from-primary to-[#fb4e2b] text-white py-8 px-6 relative shadow-lg">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-8 right-4 bg-transparent text-white p-2 rounded-full hover:bg-white hover:text-primary transition duration-300 flex items-center justify-center"
      >
        <IoMdClose className="text-2xl" />
      </button>

      {/* Centered Title */}
      <div className="flex flex-col justify-center items-center text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest font-poppins">
          INQUIRY FORM
        </h2>
        <p className="text-sm opacity-90 font-poppins">
          We'll help you create a perfect getaway
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
