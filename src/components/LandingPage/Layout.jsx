import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InquiryForm from "../Inquiry/InquiryForm";
import WhatsAppButton from "../common/WhatsAppButton";
import { useModal } from "../common/ModalContext.jsx";

const Layout = () => {
  const location = useLocation();
  const { showModal, setShowModal } = useModal();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className={`flex-grow ${!isHome ? "pt-20" : ""}`}>
        <Outlet />
      </main>

      <Footer />

      {/* Show Inquiry Button only when modal is not open */}
      {!showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 left-6 bg-gradient-to-r from-primary to-[#fb4e2b] hover:from-[#fb4e2b] hover:to-[#ffc93c] text-white font-poppins tracking-widest font-bold px-6 py-3 transition-all shadow-md z-50"
        >
          INQUIRY FORM
        </button>
      )}

      {/* Show Inquiry Modal */}
      {showModal && (
        <InquiryForm category="" closeModal={() => setShowModal(false)} />
      )}

      {/* Show WhatsApp Button only when modal is not open */}
      {!showModal && <WhatsAppButton />}
    </div>
  );
};

export default Layout;
