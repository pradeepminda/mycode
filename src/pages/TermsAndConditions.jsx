import React from "react";
import Layout from "../components/layouts/Layout";
import PageHeader from "../components/cards/PageHeader";
const steps = [
  { label: "Home", href: "/" },
  { label: "Terms & conditions", href: "/termsAndConditions" },
];
import { LuCircleArrowRight } from "react-icons/lu";
function TermsAndConditions() {
  return (
    <Layout activeMenu="TermsAndCondtions">
      <div className="container mx-auto px-4 py-5 lg:py-10">
        <PageHeader steps={steps} pageTitle="Terms & conditions" infoText="" />
        <div className="flex items-center gap-2 py-5">
          <h3 className="text-xl font-bold text-gray-900">
           Terms & conditions
          </h3>
          {/* <span className="w-16 h-[2.5px] bg-linear-to-r from-sky-500  to-cyan-400 rounded"></span> */}
        </div>

        <div className="space-y-3 ">
          {[
            // { id: "transportationExtra", label: "Transportation Extra" },
            // { id: "transporterChoice", label: "Transporter of your choice" },
            {
              id: "paymentMode",
              label: "Mode of Payment : RTGS / NEFT | UPI | Cash",
            },
            { id: "paymentTerms", label: "Terms of Payment: - Advance" },
            {
              id: "noReturns",
              label: "Goods once sold will not be taken back",
            },
            {
              id: "jurisdiction",
              label: "Disputes Subject to Bangalore Jurisdiction",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center cursor-pointer group"
              onClick={() => toggleTerm(item.id)}
            >
              <LuCircleArrowRight className="text-[#1A4B7B] group-hover:text-gray-900"/>
              <span className={`ml-3 text-[#1A4B7B] font-bold group-hover:text-gray-900 `}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default TermsAndConditions;
