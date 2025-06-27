import React, {useState} from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

function About() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section id="about" className="py-8 px-4 md:px-10 bg-white flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold font-playfair tracking-wider">
          WATCH OUR VIDEO :  <span className="text-primary font-allura text-4xl">take a tour</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-md">
          At <span className='text-primary font-allura text-3xl'>Jai Travels</span> , we believe the world is meant to be explored. Whether you’re flying across continents, booking a relaxing hotel, planning a road trip, or securing your travel with insurance—we have you covered.
          With years of experience in the travel industry, we have built strong relationships with airlines, hotels, and other travel providers. This allows us to offer you the best deals and personalized service.
          With access to <span className='text-primary font-allura text-3xl font-semi-bold'>worldwide airfares</span>
          , afforable and premium <span className='text-primary font-allura text-3xl font-semi-bold'>car rentals </span>
          , <span className='text-primary font-allura text-3xl font-semi-bold'>travel protection </span>
          , curated <span className='text-primary font-allura text-3xl font-semi-bold'>hotel selections </span>
          , and customized <span className='text-primary font-allura text-3xl font-semi-bold'>holiday packages</span>
          , our mission is to make your journey smooth, affordable, and unforgettable.
        </p>
      </div>
      <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
        <div className="relative pb-[56.25%] sm:pb-[56.25%] md:pb-[52%] lg:pb-[80%] xl:pb-[80%]">
          {!showVideo ? (
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <img
            src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750911933/coverimage_pe2cjs.jpg`}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FaRegCirclePlay onClick={() => setShowVideo(true)} className="text-4xl text-white md:text-6xl" />
          </div>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.youtube-nocookie.com/embed/vrJc1RKUhYg?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      )}
        </div>
      </div>
    </section>

  )
}

export default About;