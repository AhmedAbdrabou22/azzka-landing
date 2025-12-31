import Image from "next/image";
import { FaHandshake } from "react-icons/fa";

export default function AboutMasterVision() {
    return (
        <section className="py-20 bg-white relative overflow-hidden" dir="ltr">
            <div className="max-w-7xl mx-auto px-5 relative">

                {/* Header */}
                <div className="text-center mb-16 space-y-6">

                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image 
                            src="/favicon2.png"
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
                        <span className="text-[#fe6813] font-bold">Master Vision for Integrated Solutions</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        A Past of Leadership..
                        <span className="text-[#fe6813]"> and a Smarter Future</span>
                    </h2> 

                    {/* Content Paragraph */}
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Since our launch on 7-7-2007, Master Vision for Integrated Solutions has taken on the responsibility of leading the technology sector in Egypt, especially technology in tourism. <strong>"Azzka"</strong> is not just a new product, but the culmination of more than 18 years of experience, success, and partnership with over 500 organizations, deep understanding of market needs, and passion for continuous development. We don't just provide software, we build sustainable success partnerships.
                    </p>
                </div>

            </div>
        </section>
    );
}