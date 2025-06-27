import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { FaPlaneDeparture, FaPlaneArrival, FaPlus, FaMinus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Listbox } from "@headlessui/react";

const CategoryInformation = ({ category, formData, handleIncrement, handleDecrement, handleChange, handleCheckboxChange  }) => {
  const categories = ["Flight", "Hotels", "Car Rentals", "Travel Insurance", "Holiday Packages"];
  const tripTypeOptions = ["One way", "Round-trip"];
  const flyingOptions = ["Economy Class", "Premium Economy Class", "Business Class"];
  const carTypes = ["Standard", "Economy", "Convertible", "Luxury", "Sedan", "Sport", "SUV", "Van", "Others"]
  const insuranceOptions = ["Traveling Canadians", "Visitors in Canada", "Students", "Individual", "Group", "Others"];
  const insuranceTypes = ["Single Trip", "Unlimited Trips", "Medical Emergency", "Non-Medical Emergency", "Top-Up Coverage", "All Inclusive", "Others"]
  const VacationOptions = ["Adventure","Beach Resorts","Cruise", "Disneyland",
    "Group Tours", "Honeymoon","Luxury"
  ];

    // "Select Enquiry For" Section
    const renderEnquirySelection = () => (
    <div className="space-y-4 mb-6 font-poppins">
      <h3 className="text-lg font-semibold">What do you want book today?</h3>
      <div className="grid grid-cols-3 gap-2">
        {categories.map((item) => (
          <label key={item} className="flex items-center space-x-2">
            <input
            className="text-primary"
              type="checkbox"
              value={item}
              checked={formData.enquiryFor.includes(item)}
              onChange={handleCheckboxChange}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );

  /** Render Dynamic Fields Based on Selected Enquiry */
  const renderDynamicFields = () => {
    return formData.enquiryFor.map((item) => {
      switch (item) {
        case "Flight":
          return renderFlightFields();
        case "Hotels":
          return renderHotelFields();
        case "Car Rentals":
          return renderCarRentalFields();
        case "Travel Insurance":
          return renderTravelInsuranceFields();
        case "Holiday Packages":
          return renderHolidayPackageFields();
        default:
          return null;
      }
    });
  };

  const renderFlightFields = () => (
    <div className="space-y-4 mb-7">
      <h1 className="text-primary text-2xl font-bold font-poppins my-2">Flight Booking Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-sm font-semibold mb-1">Destination City</label>
          <FaPlaneDeparture className="absolute left-3 top-9 text-gray-400" />
          <input
            type="text"
            name="departureCity"
            placeholder="Departure City / Airport"
            className="pl-10 py-2 w-full border border-gray-300 rounded-md text-sm"
            value={formData.departureCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <label className="block text-sm font-semibold mb-1">Arrival City</label>
          <FaPlaneArrival className="absolute left-3 top-9 text-gray-400" />
          <input
            type="text"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleChange}
            className="w-full px-11 py-2 border border-gray-300 rounded-md text-sm"
            placeholder="Arrival City / Airport"
            required
          />
        </div>
        <Listbox
          value={formData.tripType}
          onChange={(value) => handleChange({ target: { name: "tripType", value } })}
        >
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Trip Type</label>
            <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary flex justify-between items-center">
              {formData.tripType || "Select trip type"}
              <FaChevronDown className="text-gray-400" />
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              {tripTypeOptions.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${active ? "bg-primary text-white" : "text-gray-800"
                    }`
                  }

                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <Listbox
          value={formData.flightClass}
          onChange={(value) => handleChange({ target: { name: "flightClass", value } })}
        >
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Flying Class</label>
            <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary flex justify-between items-center">
              {formData.flightClass || "Select flight class"}
              <FaChevronDown className="text-gray-400" />
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              {flyingOptions.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${active ? "bg-primary text-white" : "text-gray-800"
                    }`
                  }

                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        {/* Departure Date */}

        <div className="relative">
          <label className="text-sm font-semibold mb-1">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            required
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Return Date */}
        {formData.tripType === "Round-trip" && (<div className="relative">
          <label className="text-sm font-semibold mb-1">Return Date</label>
          <input
            type="date"
            name="returnDate"
            required
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>)}
        <div className="relative">
          <label className="text-sm font-semibold mb-1">Number of Flyers</label>
          <input
            type="number"
            name="numberOfFlyers"
            placeholder="Adults + Children"
            min="1"
            value={formData.numberOfFlyers}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md "
            required
          />
        </div>

      </div>
    </div>
  );

  {/* Hotel Field */ }
  const renderHotelFields = () => (
    <div className="space-y-4">
      <h1 className="text-primary text-2xl font-bold font-poppins my-2">Hotel Booking Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Hotel City */}
        <div className="flex flex-col">
          <label className="block text-sm font-semibold mb-1">Hotel / City name</label>
          <input
            type="text"
            name="hotelCity"
            value={formData.hotelCity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter hotel city"
          />
        </div>

        {/* Number of Rooms */}
        <div className="flex flex-col items-center">
          <label className="block text-sm font-semibold mb-1">Select number of Rooms</label>
          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={() => handleDecrement("numberOfRooms")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-l"
            >
              <FaMinus />
            </button>

            <input
              type="number"
              name="numberOfRooms"
              value={formData.numberOfRooms}
              onChange={handleChange}
              className="w-16 px-3 py-2 border-t border-b border-gray-300 text-center"
              placeholder="0"
              min="1"
            />

            <button
              type="button"
              onClick={() => handleIncrement("numberOfRooms")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-r"
            >
              <FaPlus />
            </button>
          </div>
        </div>
                <div className="relative">
          <label className="text-sm font-semibold mb-1">Check-In Date</label>
          <input
            type="date"
            name="checkInDate"
            required
            value={formData.checkInDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
                <div className="relative">
          <label className="text-sm font-semibold mb-1">Check-Out Date</label>
          <input
            type="date"
            name="checkOutDate"
            required
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>
    </div>
  );

  /** Car Rental Fields */
  const renderCarRentalFields = () => (
    <div className="space-y-4">
      <h1 className="text-primary text-2xl font-bold font-poppins my-2">Rental Car Booking Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Pick-Up Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Pick-Up Location</label>
          <input
            type="text"
            name="pickUpLocation"
            value={formData.pickUpLocation}
            onChange={handleChange}
            className="px-3 py-2 border rounded"
            placeholder="Enter Pick-Up Location"
          />
        </div>

        {/* Drop-Off Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Drop-Off Location</label>
          <input
            type="text"
            name="dropOffLocation"
            value={formData.dropOffLocation}
            onChange={handleChange}
            className="px-3 py-2 border rounded"
            placeholder="Enter Drop-Off Location"
          />
        </div>

        {/* Pick-Up Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Pick-Up Date</label>
          <input
            type="date"
            name="pickUpDate"
            value={formData.pickUpDate}
            onChange={handleChange}
            className="px-3 py-2 border rounded"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Drop-Off Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Drop-Off Date</label>
          <input
            type="date"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            className="px-3 py-2 border rounded"
            min={formData.pickUpDate || new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Car Type Listbox */}
        <div className="relative flex flex-col">
          <label className="text-sm font-semibold mb-1">Car Type</label>
          <Select.Root onValueChange={(value) => console.log(value)}>
  <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 border rounded w-full">
    <Select.Value placeholder="Select car type" />
    <Select.Icon>
      <ChevronDownIcon />
    </Select.Icon>
  </Select.Trigger>

  <Select.Portal>
    <Select.Content className="bg-white border rounded shadow-md z-[9999]">
      <Select.Viewport>
        {carTypes.map((type) => (
          <Select.Item key={type} value={type} className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white">
            <Select.ItemText>{type}</Select.ItemText>
          </Select.Item>
        ))}
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>
        </div>

        {/* Duration of Rental */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Duration of Rental (days)</label>
          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={() => handleDecrement("durationOfRental")}
              className="bg-gray-300 hover:bg-gray-400 p-2 rounded-l"
            >
              <FaMinus />
            </button>
            <input
              type="number"
              name="durationOfRental"
              value={formData.durationOfRental}
              onChange={handleChange}
              className="w-16 px-3 py-2 border-t border-b text-center"
              min="1"
            />
            <button
              type="button"
              onClick={() => handleIncrement("durationOfRental")}
              className="bg-gray-300 hover:bg-gray-400 p-2 rounded-r"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  /** Travel Insurance Fields */
  const renderTravelInsuranceFields = () => (
    <div className="relative">
      <h1 className="text-primary text-2xl font-bold font-poppins my-2">Travel Insurance Booking Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Insurance For */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Insurance Person</label>
          <Listbox
            value={formData.insuranceFor}
            onChange={(value) => handleChange({ target: { name: "insuranceFor", value } })}
          >
            <div className="relative">
              <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-lg flex justify-between items-center">
                {formData.insuranceFor || "Select Insurance For"}
                <FaChevronDown className="text-gray-400" />
              </Listbox.Button>

              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {insuranceOptions.map((option, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={option}
                    className={({ active }) =>
                      `cursor-pointer select-none px-4 py-2 ${active ? "bg-primary text-white" : "text-gray-800"
                      }`
                    }
                  >
                    {option}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Insurance Type */}
        <div className="relative flex flex-col">
          <label className="text-sm font-semibold mb-1">Insurance Type</label>
          <Listbox
            value={formData.insuranceType}
            onChange={(value) => handleChange({ target: { name: "insuranceType", value } })}
          >
            <div className="relative">
              <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-lg flex justify-between items-center">
                {formData.insuranceType || "Select Insurance Type"}
                <FaChevronDown className="text-gray-400" />
              </Listbox.Button>

              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {insuranceTypes.map((type, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={type}
                    className={({ active }) =>
                      `cursor-pointer select-none px-4 py-2 ${active ? "bg-primary text-white" : "text-gray-800"
                      }`
                    }
                  >
                    {type}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );

  /** Holiday Packages Fields */
const renderHolidayPackageFields = () =>{
  return (
  <div>
<h1 className="text-primary text-2xl font-bold font-poppins my-2">Let's plan your Holiday Vacation</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vacation Type */}
                            {/* Destination */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Destination</label>
            <input
              type="text"
              name="destination"
              required
              placeholder="Where do you like to go?*"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm"
            />
          </div>
              <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">Vacation Type</label>
              <div className="w-full relative">
  <Listbox value={formData.vacationType} onChange={(value) => handleChange({ target: { name: "vacationType", value } })}>
    <div className="relative">
      <Listbox.Button className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary flex justify-between items-center">
        {formData.vacationType || "Select vacation type"}
        <FaChevronDown className="text-gray-400" />
      </Listbox.Button>

      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        {VacationOptions.map((option, idx) => (
          <Listbox.Option
            key={idx}
            value={option}
            className={({ active }) =>
              `cursor-pointer select-none px-4 py-2 ${
                active ? 'bg-primary text-white' : 'text-gray-800'
              }`
            }
          >
            {option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
</div>
</div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Travel Date</label>
            <input
              type="date"
              name="travelDate"
              required
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="flex flex-col">
        <div className="relative">
          <label className="text-sm font-semibold mb-1">Number of Travelers</label>
          <input
            type="number"
            name="numberOfTravelers"
            placeholder="Adults + Children"
            min="1"
            value={formData.numberOfTravelers}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md "
            required
          />
        </div>
          </div>
        
      </div>
  </div>
)};



  return (
    <div className="space-y-6">
      {renderEnquirySelection()}
      {renderDynamicFields()}
    </div>
  );
};

export default CategoryInformation;
