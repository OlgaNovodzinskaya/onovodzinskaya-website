import React from "react";
import Navbar from "@web/components/layout/Navbar";
import Footer from "@web/components/Footer/Footer";

const Partners = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <h2 className="section-title my-10">Банки партнеры</h2>
        <div className="grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 py-5">
            <div className="bg-white h-[96px] sm:h-[153px] w-full rounded-2xl shadow-lg p-5"></div>
            <div className="bg-white h-[96px] sm:h-[153px] w-full rounded-2xl shadow-lg p-5"></div>
            <div className="bg-white h-[96px] sm:h-[153px] w-full rounded-2xl shadow-lg p-5"></div>
            <div className="bg-white h-[96px] sm:h-[153px] w-full rounded-2xl shadow-lg p-5"></div>
            <div className="bg-white h-[96px] sm:h-[153px] w-full rounded-2xl shadow-lg p-5"></div>
            <div className="bg-white h-[96px] sm:h-[153px] w-full rounded-2xl shadow-lg p-5"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Partners;
