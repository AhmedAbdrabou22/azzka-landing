import Image from "next/image";
import { FaHandshake } from "react-icons/fa";

export default function AboutMasterVision() {
    return (
        <section className="py-20 bg-white relative overflow-hidden" dir="rtl">
            <div className="max-w-7xl mx-auto px-5 relative">

                {/* Header */}
                <div className="text-center mb-16 space-y-6">

                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image 
                            src="/favicon.png"
                            alt="Master Vision Logo"
                            width={90}
                            height={90}
                            className="rounded-xl"
                            priority
                        />
                    </div>

                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 bg-[#fe6813]/10 px-5 py-2 rounded-full">
                        <FaHandshake className="text-[#fe6813]" />
                        <span className="text-[#fe6813] font-bold">ماستر ﭬﻴﭽﻦ  للحلول المتكاملة</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        ماضي من الريادة..
                        <span className="text-[#fe6813]"> ومستقبل هو الأذكى</span>
                    </h1>

                    {/* Content Paragraph */}
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        منذ انطلاقنا في عام    7-7- 2007، أخذت ماستر ﭬﻴﭽﻦ  للحلول المتكاملة على عاتقها قيادة قطاع التكنولوجيا في مصر وخاصةً التكنولوجيا في السياحة. <strong>"أذكى"</strong> ليس مجرد منتج جديد، بل هو تتويج لأكثر من 18 عاماً من الخبرة والنجاح والشراكة مع أكثر من 500 مؤسسة، والفهم العميق لاحتياجات السوق، والشغف بالتطوير المستمر. نحن لا نقدم برمجيات فحسب، بل نبني شراكات نجاح مستدامة.
                    </p>
                </div>

            </div>
        </section>
    );
}
