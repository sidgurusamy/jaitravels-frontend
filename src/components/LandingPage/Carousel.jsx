import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);

  const slides = [`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911930/carousel1_aofef4.jpg`, `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911931/carousel2_fcs89z.jpg`];
const captions = [
  { text1: "Unforgettable Journey Awaits:", text2: "Your Adventure Starts Here" },
  { text1: "Wander More, Worry Less:", text2: "Travel the World with Us" }
];
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});

  return (
    <div
  id="home"
  className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden"
>
  {/* Background Zoom Images */}
  {slides.map((slide, i) => (
    <motion.img
      key={i}
      src={slide}
      loading="lazy"
      className="absolute w-full h-full object-cover"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: i === index ? 1 : 1.1, opacity: i === index ? 1 : 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
    />
  ))}

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

  {/* Caption Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white text-center px-4">
    <motion.p
      key={`text1-${index}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="font-allura text-2xl sm:text-3xl md:text-4xl"
    >
      {captions[index].text1}
    </motion.p>
    <motion.p
      key={`text2-${index}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="font-playfair font-bold tracking-wide text-3xl sm:text-4xl md:text-5xl mt-2"
    >
      {captions[index].text2}
    </motion.p>
  </div>

  {/* Explore Button */}
<div
  onClick={() => navigate("/packages")}
  className="absolute bottom-16 left-1/4 md:left-21 z-30 cursor-pointer w-fit"
>
  <div className="flex items-center justify-center gap-3 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-xl transition">
    <p className="text-black font-poppins text-sm sm:text-base">Explore Packages</p>
    <div className="bg-primary text-white p-2 rounded-full">
      <FaArrowRight className="text-xs sm:text-base" />
    </div>
  </div>
</div>

{/* Previous Arrow */}
<button
  onClick={handlePrev}
  className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white rounded-full p-2 sm:p-3 z-30"
  aria-label="Previous slide"
>
  <PiCaretLeftBold className="text-white text-lg sm:text-2xl" />
</button>

{/* Next Arrow */}
<button
  onClick={handleNext}
  className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white rounded-full p-2 sm:p-3 z-30"
  aria-label="Next slide"
>
  <PiCaretRightBold className="text-white text-lg sm:text-2xl" />
</button>

</div>
  );
};

export default Carousel;
