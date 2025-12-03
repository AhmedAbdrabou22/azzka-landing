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
    title: "اتصل بنا",
    detail: "201007020762+",
    ant: "966583281913+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaEnvelope,
    title: "البريد الإلكتروني",
    detail: "info@azzka.net",
    ant: "",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaMapMarkerAlt,
    title: "العنوان",
    detail: `19 أ عمارات العبور، صلاح سالم، القاهرة، مصر`,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://super-admin.azzka.app/public/api/store-tenant-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
        setError(data.message || "حدث خطأ، حاول مرة أخرى.");
      }
    } catch (err) {
      setError("حدث خطأ، حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#fe6813]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            تواصل معنا
            <span className="block text-[#fe6813] mt-2">
              كن أول من يمتلك المستقبل
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            انضم لنخبة العملاء الذين يثقون في حلول ماستر ﭬﻴﭽﻦ  منذ 2007 سجل واطلب
            عرضاً توضيحياً لمنظومة <strong>"أذكى"</strong> الآن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  الاسم الكامل <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  رقم الهاتف<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="+20 123 456 7890"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  اسم الشركة<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="أدخل اسم الشركة"
                  required
                />
              </div>

              {/* Job */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  الوظيفة
                </label>
                <input
                  type="text"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="أدخل الوظيفة"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="example@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  رسالتك
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#500d75] to-[#6b1a99] text-white px-8 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                {loading ? "جاري الإرسال..." : "سجل الان"}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6">
            {/* Intro Text */}
            <div className="bg-gradient-to-br from-[#500d75] to-[#6b1a99] rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                اشترك الآن وابدأ مستقبل الإدارة الأذكى
              </h3>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#fe6813]/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}
                      >
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 text-base flex flex-col gap-1">
                          {info.title === "البريد الإلكتروني" ? (
                            <a
                              href={`mailto:${info.detail}`}
                              className="text-[#fe6813] hover:underline"
                            >
                              {info.detail}
                            </a>
                          ) : info.title === "اتصل بنا" ? (
                            <>
                              <a
                                href={`tel:${info.detail.replace("+", "")}`}
                                className="flex items-center gap-2 text-[#fe6813] hover:underline mb-1"
                              >
                                <Image
                                  src="/download.png" // مسار علم مصر داخل public
                                  alt="EG"
                                  width={20}
                                  height={20}
                                />
                                {info.detail}
                              </a>
                              {info.ant && (
                                <a
                                  href={`tel:${info.ant.replace("+", "")}`}
                                  className="flex items-center gap-2 text-[#fe6813] hover:underline"
                                >
                                  <Image
                                    src="/sa.png" // مسار علم السعودية داخل public
                                    alt="SA"
                                    width={20}
                                    height={20}
                                  />
                                  {info.ant}
                                </a>
                              )}
                            </>
                          ) : (
                            <span>{info.detail}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 bg-gray-700/30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-lg text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">شكرًا لتسجيلك!</h2>
            <p className="text-gray-700">
              خطوتك اليوم أذكى .. شكرًا لاختيارك نظامنا.
              <br />
              فريقنا بدأ بالفعل في مراجعة بياناتك، وهنتواصل معاك خلال 24 ساعة
              لتفعيل الحساب والبدء في الإعداد.
            </p>
            <button
              onClick={() => setSuccessModal(false)}
              className="mt-4 bg-[#fe6813] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ff7b33] transition-all duration-300"
            >
              اغلق
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
