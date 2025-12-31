import React from 'react';
import {
    FaShieldAlt,
    FaHeadset,
    FaRocket,
    FaMobile,
    FaChartLine,
    FaLock,
    FaCloud,
    FaUsersCog,
    FaBrain,
    FaMagic,
    FaPalette,
    FaExpand
} from 'react-icons/fa';

const features = [
    // *********** New Elements ***********
    {
        icon: FaBrain,
        title: "Smarter Management… AI-Powered",
        description: "The power of artificial intelligence within your organization to work intelligently, not just by commands",
        color: "from-violet-500 to-purple-500"
    },
    {
        icon: FaPalette,
        title: "Modern User Interface (UI/UX)",
        description: "Professional design that ensures ease and smoothness of use",
        color: "from-rose-500 to-pink-500"
    },
    {
        icon: FaExpand,
        title: "Scalability",
        description: "The system grows and expands with your company's expansion without any complexity",
        color: "from-blue-600 to-indigo-600"
    },
   
    {
        icon: FaHeadset,
        title: "24/7 Technical Support",
        description: "Specialized support team ready to help you anytime",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: FaRocket,
        title: "Speed and Superior Performance",
        description: "Fast and stable system that works efficiently even with thousands of transactions",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: FaMobile,
        title: "Compatible with All Devices",
        description: "Work from anywhere on computer, mobile, or tablet",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: FaChartLine,
        title: "Smart Reports",
        description: "Detailed and visual reports that help you make the right decisions",
        color: "from-yellow-500 to-amber-500"
    },
    
    
    {
        icon: FaUsersCog,
        title: "Easy to Use",
        description: "Simple and easy interface, no technical expertise needed to get started",
        color: "from-teal-500 to-cyan-500"
    },

    
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" dir="ltr">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-[#fe6813]/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 relative">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#fe6813]/10 px-5 py-2 rounded-full">
                        <FaShieldAlt className="text-[#fe6813]" />
                        <span className="text-[#fe6813] font-bold">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        We Make Managing Your Company
                        <span className="text-[#fe6813]"> Easier and Smarter</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We offer you more than just a management system, we offer a trusted partner for your business success
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#fe6813]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="text-3xl text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;