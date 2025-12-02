import React from "react";
import Link from "next/link";
import { FaMoneyBillWave, FaUsers, FaPlane, FaHandshake, FaFolder, FaWarehouse, FaArrowLeft, FaChartLine, FaUserTie, FaFileInvoiceDollar } from "react-icons/fa";

const modules = [
    {
        id: 1,
        name: "العمليات السياحية",
        icon: FaPlane,
        description: "إدارة شاملة للرحلات والحجوزات والباقات السياحية",
        features: ["حجز الرحلات", "إدارة الفنادق", "تنظيم الجولات"],
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        hoverColor: "hover:border-blue-500/40"
    },
    {
        id: 2,
        name: "إدارة العملاء (CRM)",
        icon: FaHandshake,
        description: "نظام متكامل لإدارة علاقات العملاء وتتبع المبيعات",
        features: ["قاعدة بيانات العملاء", "تتبع الفرص", "إدارة التواصل"],
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        hoverColor: "hover:border-green-500/40"
    },
    {
        id: 3,
        name: "الموارد البشرية (HRM)",
        icon: FaUsers,
        description: "إدارة الموظفين والرواتب والحضور والإجازات",
        features: ["إدارة الموظفين", "الرواتب", "الحضور والانصراف"],
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        hoverColor: "hover:border-purple-500/40"
    },
    {
        id: 4,
        name: "الحسابات",
        icon: FaMoneyBillWave,
        description: "نظام محاسبي شامل لإدارة الفواتير والمدفوعات والتقارير",
        features: ["الفواتير", "القيود المحاسبية", "التقارير المالية"],
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        hoverColor: "hover:border-orange-500/40"
    },
    {
        id: 5,
        name: "المخازن",
        icon: FaWarehouse,
        description: "إدارة المخزون والمشتريات وحركة البضائع",
        features: ["تتبع المخزون", "إدارة المشتريات", "تقارير المخزون"],
        color: "from-yellow-500 to-amber-500",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
        hoverColor: "hover:border-yellow-500/40"
    },
    {
        id: 6,
        name: "الأرشيف الإلكتروني",
        icon: FaFolder,
        description: "حفظ وإدارة المستندات والملفات بشكل آمن ومنظم",
        features: ["تخزين آمن", "البحث السريع", "التصنيف الذكي"],
        color: "from-indigo-500 to-violet-500",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
        hoverColor: "hover:border-indigo-500/40"
    }
];

export default function ModulesSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#500d75]/10 via-[#6b1a99]/10 to-[#500d75]/10" dir="rtl">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        منصة <span className="text-[#fe6813]">اذكي</span>
                        <span className="block text-[#fe6813] mt-2">لأنظمة إدارة متكاملة</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        اذكي هو نظام شامل لإدارة جميع جوانب شركتك السياحية بكفاءة عالية، يشمل الحسابات، الموارد البشرية، العمليات السياحية، إدارة العملاء، الأرشيف الإلكتروني، والمخازن.
                    </p>
                </div>



                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module) => {
                        const IconComponent = module.icon;
                        return (
                            <div
                                key={module.id}
                                className={`group relative ${module.bgColor} backdrop-blur-sm rounded-3xl p-8 border-2 ${module.borderColor} ${module.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                            >
                                {/* Icon with Gradient Background */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="text-4xl text-white" />
                                </div>

                                {/* Module Name */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {module.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {module.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {module.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-700">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${module.color}`}></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Link Button */}
                                <Link 
                                    href="#" 
                                    className={`inline-flex items-center gap-2 text-gray-900 font-bold group-hover:gap-4 transition-all duration-300`}
                                >
                                    <span>اكتشف المزيد</span>
                                    <FaArrowLeft className="text-sm" />
                                </Link>

                                {/* Decorative Gradient */}
                                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Link 
                        href="#" 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#500d75] to-[#6b1a99] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <span>جرب النظام مجاناً</span>
                        <FaArrowLeft />
                    </Link>
                </div>
            </div>
        </section>
    );
}