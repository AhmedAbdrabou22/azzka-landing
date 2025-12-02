import React from "react";
import Link from "next/link";
import {
  FaMoneyBillWave,
  FaUsers,
  FaPlane,
  FaHandshake,
  FaFolder,
  FaWarehouse,
  FaBuilding,
  FaPlay,
  FaArrowLeft,
} from "react-icons/fa";

const modules = [
  { name: "الحسابات", icon: FaMoneyBillWave },
  { name: "الموارد البشرية", icon: FaUsers },
  { name: "العمليات السياحية", icon: FaPlane },
  { name: "إدارة العملاء", icon: FaHandshake },
  { name: "الأرشيف الإلكتروني", icon: FaFolder },
  { name: "المخازن", icon: FaWarehouse },
];

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#500d75] via-[#6b1a99] to-[#500d75] overflow-hidden mt-5"
      dir="rtl"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#fe6813] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 pt-20 pb-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-8">
            <h1 className="text-2xl md:text-2xl lg:text-6xl font-bold text-white leading-tight">
              نظام <span className="text-[#fe6813]">أذكى</span> المتكامل
              <span className="block text-[#fe6813] mt-3">
                النظام الأذكى لإدارة شركات السياحة
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
             نظام "أذكى".. الاسم الذي يُلخص الأداء. عندما تجتمع الخبرة مع الابتكار، ينتج نظام أذكى الجيل القادم من الحلول الرقمية المتكاملة أحدث إبداعات شركة ماستر فيجن للحلول المتكاملة. نضع بين أيديكم خلاصة ريادتنا التقنية منذ عام 2007.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-6">
             

              {/* <Link
                href="#"
                className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <FaPlay className="text-sm" />
                <span>شاهد الفيديو</span>
              </Link> */}
               <Link
                href="#"
                className="group bg-[#fe6813] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#ff7b33] transition-all duration-300 shadow-2xl shadow-[#fe6813]/40 hover:scale-105 flex items-center gap-3"
              >
                <span>سجل الآن</span>
                <FaArrowLeft className="group-hover:mr-2 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Animated SVG - Left Side */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <svg
              viewBox="0 0 800 800"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated Background Circles */}
              <circle
                cx="400"
                cy="400"
                r="300"
                fill="url(#grad1)"
                opacity="0.1"
              >
                <animate
                  attributeName="r"
                  values="300;320;300"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="400"
                cy="400"
                r="250"
                fill="url(#grad2)"
                opacity="0.15"
              >
                <animate
                  attributeName="r"
                  values="250;270;250"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Dashboard Mockup */}
              <g transform="translate(200, 150)">
                {/* Main Dashboard Card */}
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="500"
                  rx="20"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="y"
                    values="0;-10;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* Header Bar */}
                <rect
                  x="20"
                  y="20"
                  width="360"
                  height="60"
                  rx="10"
                  fill="rgba(254,104,19,0.3)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.5;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* Stats Cards */}
                <rect
                  x="20"
                  y="100"
                  width="170"
                  height="100"
                  rx="10"
                  fill="rgba(255,255,255,0.08)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.08;0.15;0.08"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="210"
                  y="100"
                  width="170"
                  height="100"
                  rx="10"
                  fill="rgba(255,255,255,0.08)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.08;0.15;0.08"
                    dur="2.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* Chart Lines */}
                <polyline
                  points="40,250 100,230 160,240 220,210 280,220 340,200"
                  fill="none"
                  stroke="#fe6813"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </polyline>

                {/* Data Bars */}
                <rect
                  x="40"
                  y="300"
                  width="60"
                  height="150"
                  rx="5"
                  fill="rgba(254,104,19,0.4)"
                >
                  <animate
                    attributeName="height"
                    values="150;180;150"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values="300;270;300"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="120"
                  y="320"
                  width="60"
                  height="130"
                  rx="5"
                  fill="rgba(167,139,250,0.4)"
                >
                  <animate
                    attributeName="height"
                    values="130;160;130"
                    dur="2s"
                    begin="0.3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values="320;290;320"
                    dur="2s"
                    begin="0.3s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="200"
                  y="310"
                  width="60"
                  height="140"
                  rx="5"
                  fill="rgba(254,104,19,0.4)"
                >
                  <animate
                    attributeName="height"
                    values="140;170;140"
                    dur="2s"
                    begin="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values="310;280;310"
                    dur="2s"
                    begin="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="280"
                  y="330"
                  width="60"
                  height="120"
                  rx="5"
                  fill="rgba(167,139,250,0.4)"
                >
                  <animate
                    attributeName="height"
                    values="120;150;120"
                    dur="2s"
                    begin="0.9s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values="330;300;330"
                    dur="2s"
                    begin="0.9s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>

              {/* Floating Icons */}
              <g opacity="0.6">
                <circle cx="150" cy="200" r="30" fill="rgba(254,104,19,0.3)">
                  <animate
                    attributeName="cy"
                    values="200;180;200"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="650" cy="300" r="25" fill="rgba(167,139,250,0.3)">
                  <animate
                    attributeName="cy"
                    values="300;280;300"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="100" cy="500" r="20" fill="rgba(254,104,19,0.3)">
                  <animate
                    attributeName="cy"
                    values="500;520;500"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="700" cy="600" r="35" fill="rgba(167,139,250,0.3)">
                  <animate
                    attributeName="cy"
                    values="600;580;600"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Gradients */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#fe6813", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#a78bfa", stopOpacity: 1 }}
                  />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#a78bfa", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#fe6813", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#fe6813]/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
