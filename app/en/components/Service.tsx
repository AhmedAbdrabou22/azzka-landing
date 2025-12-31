import React from "react";
import Link from "next/link";
import { FaMoneyBillWave, FaUsers, FaPlane, FaHandshake, FaFolder, FaWarehouse, FaArrowRight, FaChartLine, FaUserTie, FaFileInvoiceDollar } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";


const modules = [
    {
        id: 1,
        name: "General Accounting System",
        icon: FaMoneyBillWave,
        description: `An integrated financial system that manages all the details of your company's accounts with high precision, giving you a clear vision and complete control over your profits and cash flows.`,
        features: ["Chart of Accounts", "General Ledger and Journal Entries", "Expenses", "Cost Centers", "Asset Management", "Financial Reports"],
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        hoverColor: "hover:border-orange-500/40"
    },
    {
        id: 2,
        name: "Religious Tourism Management",
        icon: FaPlane,
        description: "Integrated management for Hajj and Umrah operations",
        features: ["Programs and Trips Preparation", "Trip Files", "Comprehensive Booking Management", "Hotel Reservations and Check-in", "Transportation Reservations and Allocation", "Flight Reservations and Check-in"],
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        hoverColor: "hover:border-blue-500/40"
    },
    {
        id: 3,
        name: "Domestic & International Tourism Management",
        icon: FaHandshake,
        description: "Integrated management for tourism operations",
        features: ["Programs and Trips Preparation", "Trip Files", "Comprehensive Booking Management", "Hotel Reservations and Check-in", "Transportation Reservations and Allocation", "Flight Reservations and Check-in"],
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        hoverColor: "hover:border-green-500/40"
    },
    
    {
        id: 5,
        name: "Customer Relationship Management CRM",
        icon: FaWarehouse,
        description: `Comprehensive customer management, track customers, opportunities, and sales in one place, with smart tools to improve communication and increase conversions.`,
        features: ["Manage Potential and Active Customers", "Customer Follow-up", "Loyalty Points and Rewards", "Sales Targets", "Statistics and Reports", "Data Analysis for Decision Making"],
        color: "from-yellow-500 to-amber-500",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
        hoverColor: "hover:border-yellow-500/40"
    },
    {
        id: 6,
        name: "Human Resource Management HRM",
        icon: FaUserTie,
        description: "An integrated system for managing employees and HR operations easily and accurately, from recruitment to performance development and attendance tracking.",
        features: ["Employee Data Management", "Attendance, Leave, and Departures", "Salaries and Bonuses", "Performance Evaluation and Professional Development", "Comprehensive Reports and Analytics"],
        color: "from-indigo-500 to-violet-500",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
        hoverColor: "hover:border-indigo-500/40"
    },
    {
        id: 7,
        name: "Warehouse Management",
        icon: FaWarehouse,
        description: `A comprehensive solution for tracking inventory and improving storage and supply operations accurately and effectively, with complete visibility of goods movement in real-time.`,
        features: ["Current Inventory Tracking", "Receiving and Issuing Management", "Warehouse Organization", "Orders and Purchasing Management", "Minimum Level Alerts and Reordering", "Inventory Reports and Analytics"],
         color: "from-teal-500 to-blue-500",
        bgColor: "bg-teal-500/10",
        borderColor: "border-teal-500/20",
        hoverColor: "hover:border-teal-500/40"
    },
    {
        id: 8,
        name: "Task Management",
        icon: FaTasks,
        description: `Integrated management to organize and track all tasks, with smart tools to ensure work is executed efficiently and on time.`,
        features: ["Create and Distribute Tasks to Teams", "Track Project and Task Progress", "Set Priorities and Schedules", "Automatic Alerts and Notifications", "Performance and Follow-up Reports", "Integration with Other System Departments"],
         color: "from-rose-500 to-red-500",
        bgColor: "bg-rose-500/10",
        borderColor: "border-rose-500/20",
        hoverColor: "hover:border-rose-500/40"
    },
    {
        id: 9,
        name: "Electronic Archive",
        icon: FaFileArchive,
        description: "An integrated system for storing and organizing all documents and files electronically, with fast and secure access to all data anytime and from anywhere.",
        features: ["Store Files and Documents", "Organize Documents by Categories and Classifications", "Quick and Advanced File Search", "File Permissions and Access Management", "Backup and Data Protection", "Usage Reports and Analytics"],
        color: "from-blue-700 to-purple-700",
        bgColor: "bg-blue-700/10",
        borderColor: "border-blue-700/20",
        hoverColor: "hover:border-blue-700/40"
    },

];

export default function ModulesSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#500d75]/10 via-[#6b1a99]/10 to-[#500d75]/10" dir="ltr">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        <span className="text-[#fe6813]">Azzka</span> Ecosystem
                        <span className="block text-[#fe6813] mt-2">Integrated Management and Governance for All Departments</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get a complete view of all your company's departments and control operations with precision and ease. From planning to execution, all decisions are under your control with advanced intelligence.
                    </p>
                </div>



                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module) => {
                        const IconComponent = module.icon;
                        return (
                            <div
                                key={module.id}
                                className={`group relative ${module.bgColor} backdrop-blur-sm rounded-3xl p-4 border-2 ${module.borderColor} ${module.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
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
                                {/* <Link 
                                    href="#" 
                                    className={`inline-flex items-center gap-2 text-gray-900 font-bold group-hover:gap-4 transition-all duration-300`}
                                >
                                    <span>Discover More</span>
                                    <FaArrowRight className="text-sm" />
                                </Link> */}

                                {/* Decorative Gradient */}
                                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                {/* <div className="mt-16 text-center">
                    <Link 
                        href="#" 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#500d75] to-[#6b1a99] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <span>Try the System Free</span>
                        <FaArrowRight />
                    </Link>
                </div> */}
            </div>
        </section>
    );
}