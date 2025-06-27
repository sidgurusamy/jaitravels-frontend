function NeedHelp() {
  return (
    <section id="need-help">
<div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20 px-4 md:px-10 py-8 bg-white">
  {/* Left side - Text content */}
  <div className="flex-1 space-y-6">
    <h3 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider">
      CONFUSED ON WHERE TO GO? <span className='text-primary font-allura text-4xl font-semi-bold'>We got you</span>
    </h3>

    <div className="flex items-center gap-2 text-gray-600 font-poppins">
      <p>Chat with us now on  <span
        className="text-[#25D366]"
      >WhatsApp</span> or </p>
    </div>

    <div className="flex flex-col sm:flex-row items-start gap-4">
      <p className="text-gray-600 font-poppins flex-1">
        Fill in the <a className='text-primary'>
        Inquiry form
          </a> and we'll help you get your query resolved.
      </p>
    </div>
  </div>

  {/* Right side - Image */}
  <div className="flex-1 flex justify-center">
    <img
      src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912788/NeedHelp_yhgtwp.jpg`}
      alt="Get help with your travel plans"
      className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
    />
  </div>
</div>
    </section>
  );
}

export default NeedHelp;
