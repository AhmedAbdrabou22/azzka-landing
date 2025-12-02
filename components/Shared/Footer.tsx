"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-[#500d75] text-white" dir="rtl">
            {/* القسم الرئيسي */}
            <div className="max-w-7xl mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* معلومات الشركة */}
                    <div className="space-y-4">
                        <Image
                            src="/logo.png"
                            alt="Azzka Logo"
                            width={120}
                            height={50}
                            className="object-contain logo-white"
                        />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            نحن نقدم أفضل الحلول التقنية لمساعدتك على تحقيق أهدافك بكفاءة واحترافية.
                        </p>
                    </div>

                    {/* روابط سريعة */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#fe6813]">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    الميزات
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    الأسعار
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    من نحن
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* الخدمات */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#fe6813]">الخدمات</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    التطوير
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    التصميم
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    الاستشارات
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-[#fe6813] transition">
                                    الدعم الفني
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* تواصل معنا */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#fe6813]">تواصل معنا</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-300">
                                <span>📧</span>
                                <a href="mailto:info@azzka.com" className="hover:text-[#fe6813] transition">
                                    info@azzka.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <span>📞</span>
                                <a href="tel:+201234567890" className="hover:text-[#fe6813] transition">
                                    +20 123 456 7890
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <span>📍</span>
                                <span>القاهرة، مصر</span>
                            </li>
                        </ul>

                        {/* وسائل التواصل الاجتماعي */}
                        <div className="flex gap-4 mt-4">
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fe6813] transition">
                                <span className="text-xl">f</span>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fe6813] transition">
                                <span className="text-xl">𝕏</span>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fe6813] transition">
                                <span className="text-xl">in</span>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fe6813] transition">
                                <span className="text-xl">IG</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* الحقوق */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-5 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
                        <p>© 2025 اذكي. جميع الحقوق محفوظة.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-[#fe6813] transition">
                                سياسة الخصوصية
                            </Link>
                            <Link href="#" className="hover:text-[#fe6813] transition">
                                الشروط والأحكام
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;