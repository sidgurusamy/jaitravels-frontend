//import { MessageCircle, Map, Tag, Phone, Mail, Globe, DollarSign, Headphones } from "lucide-react";
import { IoChatbubbles } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { FaTags, FaPhone } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";

const features = [
  {
    icon: <IoChatbubbles className="w-6 h-6 text-white" />,
    title: "Expert Advice",
    description:
      "Our experienced travel consultants provide expert advice and personalized recommendations.",
  },
  {
    icon: <FaMap className="w-6 h-6 text-white" />,
    title: "Customized Itineraries",
    description:
      "We create customized itineraries tailored to your interests and preferences.",
  },
  {
    icon: <RiCustomerService2Fill className="w-6 h-6 text-white" />,
    title: "24/7 Customer Support",
    description:
      "We provide 24/7 support to ensure a worry-free travel experience.",
  },
  {
    icon: <FaHandHoldingDollar className="w-6 h-6 text-white" />,
    title: "Best Price Guarantee",
    description:
      "We guarantee the best prices on flights, hotels, and packages.",
  },
];

function ChooseUs() {
  return (
    <section>
    <div className="bg-offwhite py-8 px-4 md:px-10 space-y-20 text-center">
      <div>
      <h2 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider mb-3">
        WHY CHOOSE JAI TRAVELS? <span className='text-primary font-allura text-4xl font-600'>Experience the Difference
      </span>
      </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto font-poppins">
          We offer personalized travel solutions to make your journey seamless and memorable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 shadow-md border rounded-lg hover:scale-105">
              <div className="bg-primary p-3 rounded-md">
                {feature.icon}
              </div>
              <div className="text-left font-poppins">
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
export default ChooseUs;
/*      <p className="font-semi-bold text-900 mb-2 font-allura text-[#F5793B]">Experience the Difference</p>
<h2 className="text-3xl font-bold mb-4 font-playfair">Why Choose Jai Travels?</h2>

  {
    icon: <FaTags className="w-6 h-6 text-white" />,
    title: "Exclusive Deals",
    description:
      "Enjoy exclusive deals and discounts on flights, hotels, and packages.",
  },
*/