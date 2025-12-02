import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaPhone,
    title: "اتصل بنا",
    detail: "201007020762+ , 966583281913+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaEnvelope,
    title: "البريد الإلكتروني",
    detail: "info@azzka.net",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaMapMarkerAlt,
    title: "العنوان",
    detail: "مصر , القاهرة , مصر الجديدة  , عمارات العبور 19أ",
    color: "from-orange-500 to-red-500"
  }
];

const ContactUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" dir="rtl">
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
            <span className="block text-[#fe6813] mt-2">كن أول من يمتلك المستقبل</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
انضم لنخبة العملاء الذين يثقون في حلول ماستر فيجن منذ 2007
 سجل واطلب عرضاً توضيحياً لمنظومة <strong>"أذكى"</strong> الآن          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gray-100">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-900 font-bold mb-2 text-lg">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900 font-bold mb-2 text-lg">
                  اسم الشركة
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="أدخل اسم الشركة"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900 font-bold mb-2 text-lg">
                  الوظيفة
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="أدخل الوظيفة"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-900 font-bold mb-2 text-lg">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-900 font-bold mb-2 text-lg">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900"
                  placeholder="+20 123 456 7890"
                  required
                />
              </div>


              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-bold mb-2 text-lg">
                  رسالتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#fe6813] focus:outline-none transition-colors duration-200 text-gray-900 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#500d75] to-[#6b1a99] text-white px-8 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                <span>سجل الان</span>
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
              {/* <p className="text-lg text-gray-100 leading-relaxed">
                فريقنا المتخصص جاهز لمساعدتك والإجابة على جميع استفساراتك.
                نرد على جميع الرسائل خلال 24 ساعة.
              </p> */}
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
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                       <p className="text-gray-600 text-base">
  {info.title === "البريد الإلكتروني" ? (
    <a 
      href={`mailto:${info.detail}`} 
      className="text-[#fe6813] hover:underline"
    >
      {info.detail}
    </a>
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
    </section>
  );
};

export default ContactUs;