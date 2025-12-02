import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const faqsData = [
  {
    id: 1,
    question: "ما هي مدة التجربة المجانية؟",
    answer: "نوفر لك تجربة مجانية لمدة 14 يوم كاملة بدون الحاجة لبطاقة ائتمانية. يمكنك تجربة جميع المميزات والأنظمة المتاحة خلال فترة التجربة."
  },
  {
    id: 2,
    question: "هل يمكن دمج النظام مع الأنظمة الحالية؟",
    answer: "نعم، نظامنا يدعم التكامل مع معظم الأنظمة المحاسبية والإدارية الشائعة من خلال APIs متقدمة. كما نوفر فريق دعم فني لمساعدتك في عملية الدمج."
  },
  {
    id: 3,
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل جميع طرق الدفع الإلكتروني بما في ذلك البطاقات الائتمانية (Visa, Mastercard), التحويلات البنكية، والمحافظ الإلكترونية المحلية والعالمية."
  },
  {
    id: 4,
    question: "هل البيانات آمنة ومحمية؟",
    answer: "أمان بياناتك هو أولويتنا القصوى. نستخدم تشفير SSL 256-bit، ونقوم بعمل نسخ احتياطية يومية تلقائية، ونلتزم بأعلى معايير الأمان العالمية."
  },
  {
    id: 5,
    question: "هل يوجد دعم فني باللغة العربية؟",
    answer: "بالتأكيد! نوفر دعم فني متكامل باللغة العربية على مدار 24/7 من خلال الدردشة المباشرة، البريد الإلكتروني، والهاتف."
  },
  {
    id: 6,
    question: "هل يمكن تخصيص النظام حسب احتياجاتنا؟",
    answer: "نعم، نوفر خدمات تخصيص شاملة لتلبية احتياجات شركتك الخاصة. يمكننا إضافة مميزات جديدة، تعديل التقارير، وتخصيص واجهة المستخدم."
  },
  {
    id: 7,
    question: "كم عدد المستخدمين المسموح بهم؟",
    answer: "يختلف عدد المستخدمين حسب الباقة المشترك بها. الباقة الأساسية تشمل 5 مستخدمين، والباقات الأعلى تدعم عدد غير محدود من المستخدمين."
  },
  {
    id: 8,
    question: "هل يعمل النظام على الهواتف المحمولة؟",
    answer: "نعم، النظام متوافق تماماً مع جميع الأجهزة المحمولة والأجهزة اللوحية. كما نوفر تطبيقات iOS و Android لتجربة أفضل."
  }
];

const Faqs = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#500d75] to-[#6b1a99] mb-4">
            <FaQuestionCircle className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            إجابات سريعة على الأسئلة الأكثر شيوعاً حول نظامنا
          </p>
        </div>

        {/* FAQs Accordion - Using Details/Summary for Server Component */}
       {/* FAQs Accordion - Grid Layout */}
<div className="grid gap-4 md:grid-cols-2">
  {faqsData.map((faq) => (
    <details
      key={faq.id}
      className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#fe6813]/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
    >
      {/* Question */}
      <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-right hover:bg-gray-50 transition-colors duration-200">
        <span className="text-lg md:text-xl font-bold text-gray-900 flex-1">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#500d75] to-[#6b1a99] flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
          <svg 
            className="w-4 h-4 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </summary>

      {/* Answer */}
      <div className="px-6 pb-5 pt-2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
        <p className="text-gray-700 leading-relaxed text-lg">
          {faq.answer}
        </p>
      </div>
    </details>
  ))}
</div>


        {/* CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-[#500d75] to-[#6b1a99] rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-gray-200 mb-6 text-lg">
            فريقنا جاهز لمساعدتك في أي وقت
          </p>
          <a
            href="#"
            className="inline-block bg-[#fe6813] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ff7b33] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;