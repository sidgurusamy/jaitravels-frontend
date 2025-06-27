import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
function Footer() {
    const footerInfo = [
      {
        icon: MdEmail,
        value: "jaitravels.ca@gmail.com",
      },
      {
        icon: FaPhoneAlt,
        value: "+1 (647) 500-5071",
      },
      {
        icon: FaLocationDot,
        value: "380 Wellington St, Tower B, 6th Floor, London, ON N6A 5B5",
      },
    ];
  return (
    <footer className="bg-[#231f20] py-5 px-4 text-[#BDBDBD]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-10">
        
        {/* Left: Logo */}
        <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-start items-center text-md">
          <img src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912787/logowbg_r50syl.png`} alt="Logo" className="w-40 h-20 object-contain" />
          <p className="text-center text-sm leading-6">JAI TRAVELS is Affiliated with Nexion Canada ULC<br/>
          380 Wellington St, Tower B  6th Floor London, ON N6A 5B5 HQ<br/>Phone: 5196606966 | TICO #1549342</p>
        </div>

        {/* Center: Contact Info */}
        <div className="w-full md:w-1/3 mx-11 flex flex-col items-center md:items-start justify-center gap-3 text-sm">
        {footerInfo.map((info, idx) => (
          <div className="flex items-center gap-2">
            <info.icon className="text-primary text-xl" />
            <span>{info.value}</span>
          </div>
                      ))}
        </div>

        {/* Right: Social Media */}
<div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center gap-2">
          <h3 className="text-base font-semibold">Follow</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=100079670882058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition"
            >
              <FiFacebook />
            </a>
            <a
              href="https://www.instagram.com/jai.travels_?igsh=MWY0NzNjeDgzNTRyaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition"
            >
              <FaInstagram />
            </a>
                        <a
              href="https://wa.me/+16475005071"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-8 text-center text-sm font-poppins">
      Copyright © 2025 Jai Travels - All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
