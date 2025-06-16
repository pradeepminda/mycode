import React from "react";
import gowdownimage from "../../assets/gowdown.png"
import hoarding from "../../assets/hoarding.jpg"
import bend from "../../assets/bend.jpg"

const AboutUs = () => {
  return (
    <section className="bg-white py-28">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">WHO WE ARE</h2>
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
      </div>

      {/* Content Layout */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Cards */}
        <div className="md:col-span-1">
          <div className="flex flex-col space-y-4">
            {/* First Row: Two Images */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg h-34">
                 <img src={hoarding} alt="" className="h-34 w-full rounded-lg " />
              </div>
              <div className="bg-gray-100 rounded-lg h-34">
                 <img src={bend} alt="" className="h-34 w-full rounded-lg object-cover" />
              </div>
            </div>

            {/* Second Row: Single Image */}
            <div className="bg-gray-100 rounded-lg h-34 mt-4">
               <img src={gowdownimage} alt="" className="h-64 w-full" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:col-span-1">
          <div className="space-y-4">
            {/* Subheading */}
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">WHO WE ARE</h3>
              <span className="w-16 h-[2.5px] bg-linear-to-r from-sky-500  to-cyan-400 rounded"></span>
            </div>

            {/* Paragraphs */}
            <p className="text-gray-700 leading-relaxed">
               <strong className="text-[#1A4B7B]">M/s Mangrish</strong>, Bangalore, established in the year 2007–2008, have
              been pioneers in introducing and distributing in South India
              innovative products like DWC HDPE pipes etc. used in the
              infrastructure and construction industry. All the products are technically
              approved, cost-effective, and save on labor and time, and are
              having very long life.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Within a short span, we have established ourselves as a reliable
              and trustworthy supplier of materials to a number of leading
              organizations, both governmental and private.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are glad to inform you that we are Distributors for <strong className="text-[#000]">M/s Prince
              Pipes and Fittings Limited</strong>, Mumbai. <strong className="text-[#000]">M/s Prince
              Pipes and Fittings Limited</strong> are one amongst the leading manufacturers of pipes and
              fittings in India, with Head Office in Mumbai, 6 Branch Offices, 9 factories, 9
              Depots spread all over India, and many channel partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
