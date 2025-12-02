import React from "react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const highlights = [
  "إدارة مركزية شاملة",
  "دمج الذكاء الاصطناعي",
  "أتمتة عمليات الإدارة والتشغيل",
  "ادارة الحجوزات والبرامج",
  "إدارة مالية ومحاسبية متكاملة",
  "متابعة مالية دقيقة",
  "تحليل شامل للاعمال",
  "تقارير لحظية وبيانات فورية وذكية",
  "تحليل للبيانات",
  "توحيد قاعدة البيانات",
  "صلاحيات مرنة",
  "مرونة وقابلية للتوسع",

];

const About = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-[#fe6813]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-5 relative">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fe6813]/10 px-5 py-2 rounded-full">
            <FaRocket className="text-[#fe6813]" />
            <span className="text-[#fe6813] font-bold">
              نظام متكامل لشركات السياحة
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            كل ما تحتاجه
            <span className="text-[#fe6813]"> مؤسستك في مكان واحد</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-1xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            هو الحل الرقمي الأحدث والأكثر تطوراً، صُمم خصيصاً ليكون الذراع
            التقني الذكي لمؤسستك. في إصداره الأول، يأتي "أذكى" ليغير مفاهيم
            الإدارة التقليدية، معتمداً على أحدث خوارزميات المعالجة وواجهات
            الاستخدام التي تجمع بين البساطة والقوة. إنه النظام الاذكى الذي يفكر
            معك، وينمو بنمو أعمالك.{" "}
            <span className="block mt-2 text-gray-900 font-semibold">
              وداعاً للتعقيد والبرامج المتعددة ومرحبا بالكفاءة والانتاجية
              ومضاعفة الأرباح
            </span>
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto pt-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#fe6813]/30 transition-all duration-300 hover:scale-105"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700 font-small text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
