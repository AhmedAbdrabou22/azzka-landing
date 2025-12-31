import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#500d75] text-white" dir="ltr">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/whiteLogo.png"
              alt="Azzka Logo"
              width={120}
              height={50}
              className="object-contain"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Azzka</strong> is the name that defines performance.
              When experience meets innovation, Azzka delivers the next
              generation of integrated digital solutions — one of the latest
              creations by <strong>Master Vision Integrated Solutions</strong>.
              We proudly present the result of our technical leadership since
              2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fe6813]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="block text-gray-300 hover:text-[#fe6813]">
                  About the System
                </Link>
              </li>
              <li>
                <Link href="#why" className="block text-gray-300 hover:text-[#fe6813]">
                  Why Azzka
                </Link>
              </li>
              <li>
                <Link href="#vision" className="block text-gray-300 hover:text-[#fe6813]">
                  About Master Vision
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block text-gray-300 hover:text-[#fe6813]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fe6813]">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#modules" className="text-gray-300 hover:text-[#fe6813] transition">
                  General Accounting System
                </Link>
              </li>
              <li>
                <Link href="#modules" className="text-gray-300 hover:text-[#fe6813] transition">
                  Religious Tourism Management
                </Link>
              </li>
              <li>
                <Link href="#modules" className="text-gray-300 hover:text-[#fe6813] transition">
                  Domestic & International Tourism Management
                </Link>
              </li>
              <li>
                <Link href="#modules" className="text-gray-300 hover:text-[#fe6813] transition">
                  Customer Relationship Management (CRM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fe6813]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <MdOutlineMailOutline className="text-white" />
                <a
                  href="mailto:info@azzka.net"
                  className="hover:text-[#fe6813] transition"
                >
                  info@azzka.net
                </a>
              </li>

              <li className="flex items-center gap-2 text-gray-300">
                <FaPhone className="text-white" />
                <a
                  href="tel:+201007020762"
                  className="hover:text-[#fe6813] transition"
                >
                  +20 100 702 0762
                </a>
                <span>,</span>
                <a
                  href="tel:+966583281913"
                  className="hover:text-[#fe6813] transition"
                >
                  +966 583 281 913
                </a>
              </li>

              <li className="flex items-center gap-2 text-gray-300">
                <MdLocationPin className="text-white" />
                <span>
                  19 El Obour Buildings, Salah Salem, Cairo, Egypt
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.facebook.com/Azzka.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fe6813] transition"
              >
                <span className="text-xl font-bold">f</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6 text-center text-sm text-gray-300">
          © 2007 – {currentYear} All rights reserved for{" "}
          <a
            href="https://www.mv-is.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fe6813] transition font-semibold"
          >
            Master Vision Integrated Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
