import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

const testimonials = [
  {
    location: "Bali – Honeymoon Vacation",
    rating: 5,
    text: "Our honeymoon in Bali was nothing short of magical. The itinerary was perfectly tailored for us, and our travel guide made everything feel effortless. From romantic dinners to hidden beach spots, every detail was thoughtfully planned. We felt truly taken care of throughout the journey.",
    image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915436/rating1_x4guc1.jpg`,
    name: "Sarah & Daniel",
    title: "IT professionals",
  },
  {
    location: "Mexico – Family Vacation",
    rating: 4.5,
    text: "We had an amazing time exploring Mexico as a family! The guides were fantastic with the kids and made sure we experienced the culture in a fun, engaging way. Everything from hotel check-ins to excursions was smooth and well-organized. We can’t wait to book our next family trip with Jai Travels!",
    image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915437/rating2_vbgza3.jpg`,
    name: "Pedro Martinez",
    title: "Business",
  },
  {
    location: "Dubai – Group Tour with Friends",
    rating: 5,
    text: "Our Dubai trip was packed with adventure and luxury! The guide was super knowledgeable and made navigating the city incredibly easy. Every activity was seamless—from dune bashing to city tours. It was the perfect mix of fun and relaxation for our group.",
    image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915438/rating3_hxvf1l.jpg`,
    name: "Arjun Vardharajan",
    title: "Student",
  },
  {
    location: "Japan – Solo Travel",
    rating: 5,
    text: "As a solo traveler, I couldn’t have asked for a better experience in Japan. The support from Jai Travels made me feel safe and confident every step of the way. The itinerary was rich with culture and the local guide was friendly and insightful. Everything was smooth, from transport to temple visits.",
    image: `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915440/rating4_m8lszs.jpg`,
    name: "Emily Chen",
    title: "Social Media Influencer",
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>★</span>);
  }
  if (halfStar) {
    stars.push(<span key="half">☆</span>);
  }

  return <div className="text-primary text-lg">{stars}</div>;
};
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

export default function CustomerRating() {
    const swiperRef = useRef(null);
  return (
    <section className="py-8 px-4 bg-white relative">
    <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider mb-2">
                    WHAT OUR CUSTOMERS SAY :   <span className='text-primary font-allura text-4xl font-semi-bold'>
                    </span>
                </h2>
    <button
  className="absolute left-[25px] top-1/2 transform -translate-y-1/2 z-10 text-primary hover:text-[#e76a28] transition"
  onClick={handlePrev}
>
  <MdOutlineArrowCircleLeft size={40} />
</button>

<Swiper
  ref={swiperRef}
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  loop={true}
  autoplay={{ delay: 4000 }}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  }}
  className="px-8"  // Added padding to create space between arrows and cards
>
  {testimonials.map((t, i) => (
    <SwiperSlide key={i}>
      <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between transition-transform hover:scale-105 duration-300">
        <div className="text-left">
          <StarRating rating={t.rating} />
          <h3 className="text-xl font-semibold mt-4">{t.location}</h3>
          <p className="text-gray-500 mt-2 mb-6">{t.text}</p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-400">{t.title}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<button
  className="absolute right-[25px] top-1/2 transform -translate-y-1/2 z-10 text-primary hover:text-[#e76a28] transition"
  onClick={handleNext}
>
  <MdOutlineArrowCircleRight size={40} />
</button>

    </div>
  </section>
  );
}
