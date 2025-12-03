import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#500d75] text-white" dir="rtl">
      {/* القسم الرئيسي */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div className="space-y-4">
            <Image
              src="/whiteLogo.png"
              alt="Azzka Logo"
              width={120}
              height={50}
              className="object-contain"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              نظام "أذكى".. الاسم الذي يُلخص الأداء. عندما تجتمع الخبرة مع
              الابتكار، ينتج نظام أذكى الجيل القادم من الحلول الرقمية المتكاملة
              أحدث إبداعات شركة ماستر ﭬﻴﭽﻦ  للحلول المتكاملة. نضع بين أيديكم
              خلاصة ريادتنا التقنية منذ عام 2007.{" "}
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fe6813]">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="block text-gray-300 hover:text-[#fe6813]"
                >
                   عن النظام
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className="block  text-gray-300 hover:text-[#fe6813]"
                >
                   مميزات أذكى
                </Link>
              </li>
              <li>
                <Link
                  href="#vision"
                  className="block  text-gray-300 hover:text-[#fe6813]"
                >
                   عن  ماستر ﭬﻴﭽﻦ 
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block text-gray-300  hover:text-[#fe6813]"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fe6813]">الخدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#modules"
                  className="text-gray-300 hover:text-[#fe6813] transition"
                >
                  نظام الحسابات العامة
                </Link>
              </li>
              <li>
                <Link
                  href="#modules"
                  className="text-gray-300 hover:text-[#fe6813] transition"
                >
                  ادارة السياحة الدينية
                </Link>
              </li>
              <li>
                <Link
                  href="#modules"
                  className="text-gray-300 hover:text-[#fe6813] transition"
                >
                  ادارة السياحة الداخلية الخارجية
                </Link>
              </li>
              <li>
                <Link
                  href="#modules"
                  className="text-gray-300 hover:text-[#fe6813] transition"
                >
                  ادارة علاقات العملاء CRM
                </Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fe6813]">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <span>
                  <MdOutlineMailOutline style={{ color: "white" }} />
                </span>
                <a
                  href="mailto:info@azzka.net"
                  className="hover:text-[#fe6813] transition"
                >
                  info@azzka.net
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span>
                  <FaPhone style={{ color: "white" }} />
                </span>
                <a
                  href="tel:+201007020762"
                  className="hover:text-[#fe6813] transition"
                >
                  201007020762+
                </a>
                ,
                <a
                  href="tel:+966583281913"
                  className="hover:text-[#fe6813] transition"
                >
                  966583281913+
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span>
                  <MdLocationPin style={{ color: "white" }} />
                </span>
                <span>19 أ عمارات العبور، صلاح سالم، القاهرة، مصر </span>
              </li>
            </ul>

            {/* وسائل التواصل الاجتماعي */}
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.facebook.com/Azzka.net"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fe6813] transition"
              >
                <span className="text-xl">f</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-300">
            <p>
              © 2007 - {currentYear} جميع الحقوق محفوظة لشركة
              <a
                href="https://www.mv-is.com/"
                target="_blank"
                className="hover:text-[#fe6813] transition ms-1"
                rel="noopener noreferrer"
              >
                Master Vision Integrated Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
