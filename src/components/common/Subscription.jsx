import React, { useState } from "react";
import axios from "axios";
import { IoMail } from "react-icons/io5";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const images = [`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915441/subs1_gmba7h.jpg`, `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915442/subs2_dssqvi.jpg`, `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750915443/subs3_wu43xq.jpg`];

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsError(false);

  const emailRegex = /^[A-Za-z0-9!%._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    setIsError("Please enter a valid email address.");
    return;
  }

  setLoading(true);

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/subscribeEmail`, {
      email,
    });

    if (response.status === 200) {
      setIsSubscribed(true);
      setEmail("");
    }
  } catch (error) {
    console.error("Subscription Error:", error);
    setIsError("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-offwhite py-16 px-6 md:px-10 mt-8 font-poppins">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center relative mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 -mr-6 z-10">
            <img src={images[0]} alt="subscription" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 rounded-full overflow-hidden border-8 border-black/10 relative z-20">
            <img src={images[1]} alt="subscription" className="w-full h-full object-cover" />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 -ml-6 z-10">
            <img src={images[2]} alt="subscription" className="w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4 text-slate-900 font-playfair tracking-wider">Join Our Travel Community</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          Subscribe to our newsletter for the latest travel updates and exclusive deals.
        </p>

        <div className="w-full max-w-md mx-auto">
          {isSubscribed ? (
            <button className="bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2">
              <IoMail /> Subscribed!
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 pl-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className={`bg-[#f5793b] text-white px-4 py-2 rounded-r-lg transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {isError && (
            <div className="text-red-500 mt-4">Something went wrong. Please try again later.</div>
          )}
        </div>
      </div>
    </section>
  );
}
