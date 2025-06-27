const PersonalInformation = ({ formData, handleChange, handleBlur, error }) => {
    return (
      <div className="space-y-4 font-poppins text-sm">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="relative">
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="peer w-full px-3 pt-6 pb-2 border border-gray-300 rounded placeholder-transparent text-gray-900 focus:outline-none focus:border-primary"
    placeholder="Full Name"
    required
  />
  <label
    htmlFor="name"
    className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1 transition-all 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary"
  >
    Full Name
  </label>
</div>

  
          <div className="relative">
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onBlur={handleBlur}
    onChange={handleChange}
  inputMode="numeric"
  className="peer w-full px-3 pt-6 pb-2 border border-gray-300 rounded placeholder-transparent text-gray-900 focus:outline-none focus:border-primary"
  placeholder="Phone Number"
    required
  />
  <label
    htmlFor="phone"
    className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1 transition-all 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary"
  >
    Phone Number
  </label>
</div>

        </div>
  
        <div className="relative">
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
        onBlur={handleBlur}
    onChange={handleChange}
    className="peer w-full px-3 pt-6 pb-2 border border-gray-300 rounded placeholder-transparent text-gray-900 focus:outline-none focus:border-primary"
    placeholder="Email Address"
    required
  />
  <label
    htmlFor="email"
    className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1 transition-all 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary"
  >
    Email Address
  </label>
</div>

      </div>
    );
  };
  
  export default PersonalInformation;
  