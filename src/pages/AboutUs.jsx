import React from "react";
import Layout from "../components/layouts/Layout";
import PageHeader from "../components/cards/PageHeader";
import gowdownimage from "../assets/gowdown.png";
import fields from "../assets/aboutinner.jpg"
const steps = [{ label: "Home", href: "/" }, { label: "About Us" }];

const AboutUs = () => {
  return (
    <Layout activeMenu="About Us">
      <div className="container mx-auto py-10">
        <PageHeader steps={steps} pageTitle="About Us" infoText="" />
        <section className="bg-white py-10">
          {/* Content Layout */}
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Cards */}
            <div className="md:col-span-1">
              <div className="flex flex-col space-y-4">
                {/* First Row: Two Images */}

                {/* Second Row: Single Image */}
                <div className="bg-gray-100 rounded-lg h-100 mt-4">
                  <img
                    src={gowdownimage}
                    alt=""
                    className="h-100 w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-1">
              <div className="space-y-3">
                {/* Subheading */}
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">
                   About Mangrish Prince
                  </h3>
                  {/* <span className="w-16 h-[2.5px] bg-linear-to-r from-sky-500  to-cyan-400 rounded"></span> */}
                </div>

                {/* Paragraphs */}
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-[#1A4B7B]">M/s Mangrish</strong>,
                  Bangalore, established in the year 2007–2008, have been
                  pioneers in introducing and distributing in South India
                  innovative products like DWC HDPE pipes etc. used in the
                  infrastructure and construction industry. All the products are
                  technically approved, cost-effective, and save on labor and
                  time, and are having very long life.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Within a short span, we have established ourselves as a
                  reliable and trustworthy supplier of materials to a number of
                  leading organizations, both governmental and private.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are glad to inform you that we are Distributors for{" "}
                  <strong className="text-[#000]">
                    M/s Prince Pipes and Fittings Limited
                  </strong>
                  , Mumbai.{" "}
                  <strong className="text-[#000]">
                    M/s Prince Pipes and Fittings Limited
                  </strong>{" "}
                  are one amongst the leading manufacturers of pipes and
                  fittings in India, with Head Office in Mumbai, 6 Branch
                  Offices, 9 factories, 9 Depots spread all over India, and many
                  channel partners.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-10">
          {/* Content Layout */}
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <div className="space-y-3">
                {/* Subheading */}
                <div className="flex items-center gap-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    Our Team and Vision
                  </h3>
                </div>

                {/* Paragraphs */}
                <p className="text-gray-700 leading-relaxed">
                  Our team consists of competent, effective persons who complete
                  tasks on schedule. They are able to provide cost-effective
                  products that fully satisfy their customers by having sound
                  interactions with them and learning about their demands.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our vision is to be a leader in supplying of these items. In
                  this dynamic and rapidly evolving world, we always work to
                  introduce and promote goods that are technically sound,
                  creative, affordable, and practical. We also want to make sure
                  that these items last a long time, require little labour or
                  maintenance, and are environmentally friendly.
                </p>
                <div className="flex items-center gap-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    Why Choose Us?
                  </h3>
                 </div>
                <p className="text-gray-700 leading-relaxed">
                  Our Spacious warehouse area helps us maintains our inventory.
                  It helps us increase work productivity and cater to the bulky
                  and urgent requirements of our clients. Apart from that, given
                  below are a few other reasons our clients choose us over our
                  competitors
                </p>
              </div>
            </div>
            {/* Image Cards */}
            <div className="md:col-span-1">
              <div className="flex flex-col space-y-4">
                {/* First Row: Two Images */}

                {/* Second Row: Single Image */}
                <div className="bg-gray-100 rounded-lg h-100 mt-4">
                  <img
                    src={fields}
                    alt=""
                    className="h-105 w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
