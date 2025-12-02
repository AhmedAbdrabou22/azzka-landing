"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-[#500d75] shadow-lg" dir="rtl">
            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                
                <Link href="/">
                    <Image
                        src="/whiteLogo.png"
                        alt="Azzka Logo"
                        width={120}
                        height={50}
                        className="object-contain"
                    />
                </Link>


                
                <div className="hidden md:flex gap-8 items-center">
                    <Link href="#about" className="text-white hover:text-[#fe6813] transition">
                        عن النظام

                    </Link>
                    <Link href="#why" className="text-white hover:text-[#fe6813] transition">
                        مميزات أذكى

                    </Link>
                    <Link href="#vision" className="text-white hover:text-[#fe6813] transition">
                        عن  ماستر فيجن
                    </Link>
                    <Link href="#contact"  className="text-white hover:text-[#fe6813] transition">
                        تواصل معنا
                    </Link>

                    <Link
                        href="#contact" 
                        className="bg-[#fe6813] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#ff7b33] transition"
                    >
                        ابدأ الآن
                    </Link>
                </div>

                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* قائمة الموبايل */}
            {open && (
                <div className="md:hidden bg-[#500d75] px-5 pb-5 space-y-4">
                    <Link href="#" className="block text-white text-lg hover:text-[#fe6813]">
                        الرئيسية
                    </Link>
                    <Link href="#" className="block text-white text-lg hover:text-[#fe6813]">
                        الميزات
                    </Link>
                    <Link href="#" className="block text-white text-lg hover:text-[#fe6813]">
                        الأسعار
                    </Link>
                    <Link href="#" className="block text-white text-lg hover:text-[#fe6813]">
                        تواصل معنا
                    </Link>

                    <Link
                        href="#"
                        className="block bg-[#fe6813] text-white text-center px-5 py-2 rounded-lg font-semibold hover:bg-[#ff7b33] transition"
                    >
                        ابدأ الآن
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
