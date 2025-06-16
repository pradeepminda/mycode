import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import {
  LuInstagram,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
  LuTwitter,
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
        "service_rcmaxl8",     // replace with your EmailJS service ID
        "template_fyhxp38",    // replace with your EmailJS template ID
        formData,
        "cmcDNKv5FWTT1tcey"      // replace with your EmailJS public key
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <Layout activeMenu='Contact Us'>
      <div className="container mx-auto py-10">
        <PageHeader
          steps={steps}
          pageTitle="Contact Us"
          infoText=""
        />

        <div className="min-h-screen bg-gray-50 flex mt-8">
          {/* Left Panel - Contact Information */}
          <div className="w-2/5 bg-sky-600 text-white p-12 relative overflow-hidden rounded-lg">
            {/* Background decorative circles */}
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-sky-500 rounded-full opacity-30"></div>
            <div className="absolute bottom-32 right-32 w-20 h-20 bg-sky-400 rounded-full opacity-20"></div>

            <div className="relative z-10">
              <h1 className="text-2xl font-semibold mb-1">
                Contact Information
              </h1>
              <p className="text-sky-200 mb-12 text-base">
                Say something to start a live chat!
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <LuPhone className="w-4 h-4" />
                  <span className="text-sm">
                    +91 9845068745 / 7090456618 / 6366016617
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <LuMail className="w-4 h-4" />
                  <span className="text-sm">mp@mangrishprince.com</span>
                </div>

                <div className="flex items-start space-x-4">
                  <LuMapPin className="w-9 h-9 " />
                  <div className="text-sm">
                    <div>
                      #7/4, 60 feet road, Amco layout Near Kote Muthuraya Swamy
                      Temple,Kotihosahlli, Kodigehalli Bangalore-560092
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-16">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors">
                  <LuFacebook className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <LuInstagram className="w-5 h-5 text-gray-800" />
                </div>
                {/* <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors">
                  <LuMessageCircle className="w-5 h-5 text-white" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-3/5 p-12 bg-white">
            <div className="max-w-lg">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-6 mb-8">
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
              <div className="grid grid-cols-2 gap-6 mb-8">
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
              <div className="grid grid-cols-2 gap-6 mb-8">
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

              {/* Subject Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4">
                  {["General Inquiry", "Support", "Sales", "Partnership"].map(
                    (option) => (
                      <label
                        key={option}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={option}
                          checked={formData.subject === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {option}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
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

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={sendEmail}
                  className="bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;