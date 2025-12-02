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
    // *********** العناصر الجديدة ***********
    {
        icon: FaBrain,
        title: "إدارة أذكى… مدعومة بالـAI",
        description: "قوة الذكاء الاصطناعي داخل مؤسستك كي يعمل بذكاء، وليس فقط بالأوامر",
        color: "from-violet-500 to-purple-500"
    },
    {
        icon: FaPalette,
        title: "واجهة مستخدم عصرية (UI/UX)",
        description: "تصميم احترافي يضمن سهولة وسلاسة في الاستخدام",
        color: "from-rose-500 to-pink-500"
    },
    {
        icon: FaExpand,
        title: "قابلية التطور (Scalability)",
        description: "النظام يكبر ويتوسع مع توسع شركتك بدون أي تعقيد",
        color: "from-blue-600 to-indigo-600"
    },
   
    {
        icon: FaHeadset,
        title: "دعم فني 24/7",
        description: "فريق دعم متخصص جاهز لمساعدتك في أي وقت باللغة العربية",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: FaRocket,
        title: "سرعة وأداء فائق",
        description: "نظام سريع ومستقر يعمل بكفاءة عالية حتى مع آلاف المعاملات",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: FaMobile,
        title: "متوافق مع جميع الأجهزة",
        description: "اعمل من أي مكان على الكمبيوتر أو الموبايل أو التابلت",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: FaChartLine,
        title: "تقارير ذكية",
        description: "تقارير تفصيلية ومرئية تساعدك على اتخاذ القرارات الصحيحة",
        color: "from-yellow-500 to-amber-500"
    },
    
    
    {
        icon: FaUsersCog,
        title: "سهولة الاستخدام",
        description: "واجهة بسيطة وسهلة، لا تحتاج خبرة تقنية للبدء",
        color: "from-teal-500 to-cyan-500"
    },

    
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" dir="rtl">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#fe6813]/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 relative">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#fe6813]/10 px-5 py-2 rounded-full">
                        <FaShieldAlt className="text-[#fe6813]" />
                        <span className="text-[#fe6813] font-bold">لماذا تختارنا</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        نجعل إدارة شركتك
                        <span className="text-[#fe6813]"> أسهل وأذكى</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        نقدم لك أكثر من مجرد نظام إدارة، نقدم شريكاً موثوقاً لنجاح أعمالك
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
