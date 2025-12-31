"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Call Us",
    detail: "+201007020762",
    ant: "+966583281913",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    detail: "info@azzka.net",
    ant: "",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    detail: "19 El Obour Buildings, Salah Salem, Cairo, Egypt",
    ant: "",
    color: "from-orange-500 to-red-500",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    tenant_name: "Master Vision",
    name: "",
    mobile: "",
    company: "",
    job: "",
    email: "",
    message: "",
    contact_source_id: 1,
  });

  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://super-admin.azzka.app/public/api/store-tenant-lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessModal(true);
        setFormData({
          tenant_name: "Master Vision",
          contact_source_id: 1,
          name: "",
          mobile: "",
          company: "",
          job: "",
          email: "",
          message: "",
        });
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch {
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      dir="ltr"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#fe6813]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Contact Us
            <span className="block text-[#fe6813] mt-2">
              Be the first to own the future
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of clients who trust <strong>Master Vision</strong>{" "}
            since 2007. Register now and request a demo for{" "}
            <strong>Azzka</strong> system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-bold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="+20 123 456 7890"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Job Title</label>
                <input
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="Job title"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="Write your message..."
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <button
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#500d75] to-[#6b1a99] text-white py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Register Now"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#500d75] to-[#6b1a99] rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold">
                Subscribe & Start Smarter Management
              </h3>
            </div>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}
                    >
                      <Icon className="text-white text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{info.title}</h4>
                      {info.title === "Call Us" ? (
                        <>
                          <a
                            href={`tel:${info.detail}`}
                            className="text-[#fe6813] flex gap-2 items-center"
                          >
                            <Image src="/download.png" alt="EG" width={20} height={20} />
                            {info.detail}
                          </a>
                          {info.ant && (
                            <a
                              href={`tel:${info.ant}`}
                              className="text-[#fe6813] flex gap-2 items-center"
                            >
                              <Image src="/sa.png" alt="SA" width={20} height={20} />
                              {info.ant}
                            </a>
                          )}
                        </>
                      ) : info.title === "Email" ? (
                        <a
                          href={`mailto:${info.detail}`}
                          className="text-[#fe6813]"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.detail}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {successModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center max-w-lg">
            <h2 className="text-2xl font-bold mb-3">
              Thank you for registering!
            </h2>
            <p className="text-gray-700">
              Our team will contact you within 24 hours to activate your account
              and get you started.
            </p>
            <button
              onClick={() => setSuccessModal(false)}
              className="mt-4 bg-[#fe6813] text-white px-6 py-3 rounded-xl font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
