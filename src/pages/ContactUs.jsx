import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import {
  LuInstagram,
  LuMail,
  LuMapPin,
  LuPhone,
  LuFacebook
} from "react-icons/lu";
import PageHeader from "../components/cards/PageHeader";
import emailjs from "emailjs-com";

const steps = [{ label: "Home", href: "/" }, { label: "Contact Us" }];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    personName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rcmaxl8",
        "template_fyhxp38",
        formData,
        "cmcDNKv5FWTT1tcey"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message.");
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout activeMenu='Contact Us'>
      <div className="container mx-auto px-4 py-5 lg:py-10">
        <PageHeader
          steps={steps}
          pageTitle="Contact Us"
          infoText=""
        />

        <div className="bg-gray-50 mt-8 rounded-lg overflow-hidden">
          {/* Stack panels vertically on mobile */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel - Contact Information */}
            <div className="w-full lg:w-2/5 bg-sky-600 text-white p-6 lg:p-12 relative overflow-hidden">
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-sky-500 rounded-full opacity-30"></div>
              <div className="absolute bottom-32 right-32 w-20 h-20 bg-sky-400 rounded-full opacity-20"></div>

              <div className="relative z-10">
                <h1 className="text-xl lg:text-2xl font-semibold mb-1">
                  Contact Information
                </h1>
                <p className="text-sky-200 mb-8 lg:mb-12 text-sm lg:text-base">
                  Say something to start a live chat!
                </p>

                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-center space-x-4">
                    <LuPhone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      +91 9845068745 / 7090456618 / 6366016617
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <LuMail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs lg:text-sm">mp@mangrishprince.com</span>
                  </div>

                  <div className="flex items-start space-x-4">
                    <LuMapPin className="w-4 h-4 mt-1 lg:w-9 lg:h-9 flex-shrink-0" />
                    <div className="text-xs lg:text-sm">
                      #7/4, 60 feet road, Amco layout Near Kote Muthuraya Swamy
                      Temple,Kotihosahlli, Kodigehalli Bangalore-560092
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-8 lg:mt-16">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors">
                    <LuFacebook className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <LuInstagram className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-3/5 p-6 lg:p-12 bg-white">
              <div className="max-w-lg mx-auto">
                {/* Name Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person Name
                    </label>
                    <input
                      type="text"
                      name="personName"
                      value={formData.personName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email(Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
                
                {/* City and State */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6 lg:mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message.."
                    rows={4}
                    className="w-full border-b-2 border-gray-300 pb-2 focus:border-sky-600 focus:outline-none bg-transparent resize-none"
                  />
                </div>

                {/* Submit Button - Centered on mobile */}
                <div className="flex justify-center lg:justify-end">
                  <button
                    onClick={sendEmail}
                    className="bg-sky-600 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors font-medium w-full lg:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;