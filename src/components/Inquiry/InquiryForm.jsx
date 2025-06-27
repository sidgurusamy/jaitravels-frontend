import { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import PersonalInformation from "./PersonalInformation";
import CategoryInformation from "./CategoryInformation";
import FormButtons from "./FormButtons";
import FormHeader from "./FormHeader";
import axios from "axios";
import AdditionalDetails from "./AdditionalDetails";

const InquiryForm = ({ category, closeModal }) => {
  const tabs = [
    { id: 0, label: "Personal Information" },
    { id: 1, label: "Inquiry For" },
    { id: 2, label: "Submit" },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const [initialFormData, setInitialFormData] = useState({
      enquiryFor: [],
    name: "",
    email: "",
    phone: "",
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
    returnDate: "",
    tripType: "",
    flightClass: "",
    numberOfFlyers: 1,
    hotelCity: "",
    numberOfRooms: 1,
    checkInDate:"",
    checkOutDate:"",
    pickUpLocation:"",
    dropOffLocation:"",
    pickUpDate:"",
    dropOffDate:"",
    carType:"",
    durationOfRental:1,
    insuranceFor:"",
    insuranceType:"",
    travelDate:"",
    numberOfTravelers:1,
    vacationType:"",
    destination:"",
    message: ""
  });
  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    email: "",
    phone: ""
  });
    const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[A-Za-z0-9!%._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

const StepIndicator = () => (
    <div className="flex justify-center md:justify-between items-center space-x-4 mb-6 mt-4 px-6">
      {tabs.map((tab, index) => (
        <div key={tab.id} className="flex items-center space-x-2">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentTab === index ? "bg-primary text-white" : "bg-gray-300 text-gray-600"}`}>
            {index + 1}
          </div>
          <span className={`hidden md:inline-block text-sm font-semibold ${currentTab === index ? "text-primary" : "text-gray-600"}`}>
            {tab.label}
          </span>
          {index < tabs.length - 1 && <FaArrowRight className="text-gray-400" />}
        </div>
      ))}
    </div>
  );
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  if (name === "phone") {
    // Remove all non-digit characters
    let cleaned = value.replace(/\D/g, "").substring(0, 10); // Limit to 10 digits
    let formatted = cleaned;

    if (cleaned.length > 6) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length > 3) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}`;
    } else if (cleaned.length > 0) {
      formatted = `(${cleaned}`;
    }
setFormData((prev) => ({
      ...prev,
      [name]: formatted,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  };
  
const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;

  setFormData((prev) => {
    const updatedEnquiryFor = checked
      ? [...prev.enquiryFor, value]
      : prev.enquiryFor.filter((item) => item !== value);

    return { ...prev, enquiryFor: updatedEnquiryFor };
  });
};

const handleNext = () => {
  const nextTab = determineActiveTab();
  setCurrentTab(nextTab);
};

  const handleBack = () => {
    setCurrentTab((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrement = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] ? parseInt(prev[field]) + 1 : 1,
    }));
  };

  const handleDecrement = (field) => {
      setFormData((prev) => ({
        ...prev,
        [field]: prev[field] > 1 ? parseInt(prev[field]) - 1 : 1,
      }));
  };
  const checkFieldsFilled = () => {
if (currentTab === 0) {
  const { name, email, phone } = formData;
  const cleanedPhone = phone.replace(/\D/g, ""); // remove formatting
  return (
    name &&
    email &&
    emailRegex.test(email) &&
    cleanedPhone.length === 10 &&
    phoneRegex.test(cleanedPhone)
  );
}


    if (category === "Flight") {
      const { departureCity, arrivalCity, departureDate, tripType,flightClass, numberOfFlyers, returnDate } = formData;
      return departureCity && arrivalCity && departureDate && tripType && flightClass && numberOfFlyers && (tripType === "Round-trip" ? returnDate : true);
    }

    if (category === "Hotels") {
      const { hotelCity, numberOfRooms, checkInDate, checkOutDate } = formData;
      return hotelCity && numberOfRooms && checkInDate && checkOutDate;
    }
    if(category === "CarRentals") {
      const {pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, carType, durationOfRental} = formData;
      return pickUpLocation && dropOffLocation && pickUpDate && dropOffDate && carType && durationOfRental;
    }
    if(category === "TravelInsurance") {
      const {insuranceFor, insuranceType} = formData;
      return insuranceFor && insuranceType;
    }
    if(category === "HolidayPackages") {
      const {travelDate, destination, adults, kids, vacationType} = formData;
      return travelDate && destination && adults && kids && vacationType;
    }
    return true;
  };

const determineActiveTab = () => {
  const { name, email, phone, enquiryFor } = formData;

  if (!name || !email || !phone) {
    return 0;  // Stay on Personal Information
  }

  if (currentTab === 0) {
    return 1;  // Move to Enquiry For step
  }

  if (currentTab === 1 && enquiryFor.length > 0) {
    return 2;  // Move to Category Details step
  }

  return currentTab;
};


const handleBlur = (e) => { 
  const { name, value } = e.target;

  if (name === "email") {
    setError((prev) => ({
      ...prev,
      email: emailRegex.test(value) || value === "" ? "" : "Please enter a valid email address."
    }));
  }

  if (name === "phone") {
    const cleaned = value.replace(/\D/g, ""); // Remove non-digit characters
    setError((prev) => ({
      ...prev,
      phone: cleaned.length !== 10 || !phoneRegex.test(cleaned)
        ? "Please enter a valid phone number."
        : ""
    }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (currentTab < 2) {
    handleNext();  // 🛑 Don't submit unless on step 3
    return;
  }

  // Proceed only if on final step
  setIsSubmitted(true);
  setError({ email: "", phone: "" });

  const { email, phone } = formData;
  let hasError = false;

  if (!emailRegex.test(email)) {
    setError((prev) => ({
      ...prev,
      email: "Please enter a valid email address.",
    }));
    hasError = true;
  }

const cleanedPhone = phone.replace(/\D/g, "");
if (!phoneRegex.test(cleanedPhone)) {
  setError((prev) => ({
    ...prev,
    phone: "Phone number must be exactly 10 digits.",
  }));
  hasError = true;
}

  if (hasError) {
    setIsSubmitted(false);
    return;
  }

  try {
await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/submitInquiryForm`, {
  ...formData,
  phone: cleanedPhone,
});
    setFormData(initialFormData);
    setSuccess(true);
  } catch (err) {
    setError((prev) => ({
      ...prev,
      submit: "Submission failed. Please try again.",
    }));
  } finally {
    setIsSubmitted(false);
  }
};

return (
<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-2 sm:px-4 py-6">
  <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[40vw] max-h-[90vh] bg-white shadow-lg flex flex-col overflow-hidden">
      
      <FormHeader category={category} closeModal={closeModal} />
      <StepIndicator />

  <div className="overflow-y-auto px-4 sm:px-6 py-4 flex-1">
        {success ? (
          <div className="text-center py-10">
            <FaCheckCircle className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h3>
            <p className="text-gray-600 mb-6">
              We’ve received your enquiry. Our travel experts will contact you shortly.
            </p>
            <button
              onClick={closeModal}
              className="bg-primary hover:bg-[#fb4e2b] text-white px-6 py-2 rounded-full transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {Object.keys(error).map((key) => (
              error[key] && (
                <div key={key} className="bg-red-100 text-red-600 p-3 rounded-md text-sm mb-2">
                  {error[key]}
                </div>
              )
            ))}

            {currentTab === 0 && (
              <PersonalInformation
                formData={formData}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={error}
              />
            )}
            {currentTab === 1 && (
              <CategoryInformation
                category={category}
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleBlur={handleBlur}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                error={error}
              />
            )}
            {currentTab === 2 && (
              <AdditionalDetails
                formData={formData}
                handleChange={handleChange}
              />
            )}
            <FormButtons
              currentTab={currentTab}
              closeModal={closeModal}
              onNext={handleNext}
              onBack={handleBack}
              isDisabled={!checkFieldsFilled() || isSubmitted}
              isSubmitted={isSubmitted}
            />
          </form>
        )}
      </div>
    </div>
  </div>
);
};

export default InquiryForm;