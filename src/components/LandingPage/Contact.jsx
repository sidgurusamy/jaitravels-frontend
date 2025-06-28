import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const contactInfo = [
    {
      icon: MdEmail,
      title: "EMAIL ADDRESS",
      value: "jaitravels.ca@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      title: "PHONE NUMBER",
      value: "+1 (647) 500-5071",
    },
    {
      icon: IoTimeSharp,
      title: "WORKING HOURS",
      value: "Mon–Sun, 9:00 AM – 9:00 PM (EDT)",
    },
    {
      icon: FaLocationDot,
      title: "CANADA OFFICE ADDRESS",
      value: "380 Wellington St, Tower B, 6th Floor, London, ON N6A 5B5",
    },
  ];

  return (
    <section id="contact" className="bg-white px-4 py-8 md:px-10 mx-auto max-w-8xl">
      <h2 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider mb-3">
        CONTACT US
      </h2>
      <p className="font-poppins text-gray-600 text-lg mb-8">
        Have a question or need help planning your next adventure? Reach out to us!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Info and Profile */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="flex items-center bg-white rounded-xl shadow-md max-w-sm overflow-hidden">
            <div className="w-24 h-24 overflow-hidden rounded-r-full">
              <img src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911932/ceo_e6fzkc.jpg`} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-900">Sidharthan Gurusamy</p>
              <p className="text-sm text-gray-500">CEO and Travel Expert</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold text-sm text-primary tracking-wider">{info.title}</p>
                  </div>
                </div>
                <p className="text-md text-black">{info.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-80 lg:h-full rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?q=380+Wellington+St,+London,+ON+N6A+5B5&output=embed"
            frameBorder="0"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

/*

<info.icon className="text-primary text-lg" />

        <span className="text-primary font-allura text-4xl font-semibold">
          Get in touch with us today!
        </span>

        */