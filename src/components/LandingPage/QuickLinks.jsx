import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Flights", icon: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911936/departure_tvx7r7.gif`, to: "/services/#book-flight" },
  { label: "Car Rentals", icon: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915445/supercar_zhxb0e.gif`, to: "/services/#book-car-rentals" },
  { label: "Hotels", icon: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912026/hotel-sign_ysvhym.gif`, to: "/services/#book-hotels" },
  { label: "Travel Insurance", icon: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912028/ins_fnxope.png`, to: "/services/#book-travel-insurance" },
  { label: "Holiday Packages", icon: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912024/holiday_w4i23f.gif`, to: "/services/#book-holiday-packages" },
  { label: "Assistance", icon: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912023/helpdesk_b8chlz.gif`, to: "#need-help" },
];

function QuickLinks() {
  return (
    <section className="bg-offwhite py-8 px-4 md:px-10">
      
      <h2 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider mb-2">
        YOU BOOK : 
        <span className="text-primary font-allura text-4xl font-semibold ml-2">We Plan</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {quickLinks.map((item, index) =>
          item.to.startsWith("#") ? (
    <a
      href={item.to}
      key={index}
      className="group bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-2xl duration-500 ease-in-out"
    >
      <div className="mb-4 w-24 h-24 transform transition duration-500 group-hover:scale-110 group-hover:rotate-2">
        <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
      </div>
      <p className="text-lg font-semibold text-gray-700 font-poppins group-hover:text-primary transition">
        {item.label}
      </p>
    </a>
  ) : (
          <Link
            to={item.to}
            key={index}
            className="group bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-2xl duration-500 ease-in-out"
          >
            <div className="mb-4 w-24 h-24 transform transition duration-500 group-hover:scale-110 group-hover:rotate-2">
              <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-700 font-poppins group-hover:text-primary transition">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;
