"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-[#500d75] shadow-lg" dir="ltr">
            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/en">
                    <Image
                        src="/whiteLogo.png"
                        alt="Azzka Logo"
                        width={120}
                        height={50}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    <Link href="#about" className="text-white hover:text-[#fe6813] transition">
                        About System
                    </Link>
                    <Link href="#why" className="text-white hover:text-[#fe6813] transition">
                        Azzka Features
                    </Link>
                    <Link href="#vision" className="text-white hover:text-[#fe6813] transition">
                        About Master Vision
                    </Link>
                    <Link href="#contact" className="text-white hover:text-[#fe6813] transition">
                        Contact Us
                    </Link>

                    <Link
                        href="#contact" 
                        className="bg-[#fe6813] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#ff7b33] transition"
                    >
                        Get Started
                    </Link>
                     <Link href="/ar">
            <span className="block text-center text-white text-lg hover:text-[#fe6813] transition font-semibold">
              ع
            </span>
          </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#500d75] px-5 pb-5 space-y-4">
                    <Link href="#about" className="block text-white text-lg hover:text-[#fe6813]">
                        About System
                    </Link>
                    <Link href="#why" className="block text-white text-lg hover:text-[#fe6813]">
                        Azzka Features
                    </Link>
                    <Link href="#vision" className="block text-white text-lg hover:text-[#fe6813]">
                        About Master Vision
                    </Link>
                    <Link href="#contact" className="block text-white text-lg hover:text-[#fe6813]">
                        Contact Us
                    </Link>

                    <Link
                        href="#contact"
                        className="block bg-[#fe6813] text-white text-center px-5 py-2 rounded-lg font-semibold hover:bg-[#ff7b33] transition"
                    >
                        Get Started
                    </Link>
                     <Link href="/ar">
            <span className="block text-center text-white text-lg hover:text-[#fe6813] transition font-semibold">
              ع
            </span>
          </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;