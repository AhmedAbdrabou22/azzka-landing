import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqsData = [
  {
    id: 1,
    question: ` ما هو نظام "أذكى"؟`,
    answer: `
هو نظام ERP متكامل يساعد الشركات على إدارة جميع أقسامها (المحاسبة، السياحة،  التسويق والمبيعات، الموارد البشرية، المخازن… وغيرها) من منصة واحدة بذكاء وسهولة.`,
  },
  {
    id: 2,
    question: `ما  الذي يميز النظام عن أي نظام آخر؟`,
    answer: `يوفر "أذكى" حوكمة كاملة، تكامل بين الأقسام، ذكاء اصطناعي لدعم اتخاذ القرارات، وتجربة استخدام بسيطة تدعم نمو الشركة، بالاضافة إلي استخدام احدث التقنيات التي تدعم التطوير المستمر`,
  },
  {
    id: 3,
    question: "هل يمكن تخصيص النظام حسب طبيعة شركتي؟",
    answer: `نعم، النظام مرن ويمكن تخصيصه بالكامل ليتوافق مع نوع النشاط، حجم الشركة، وطريقة عملك.`,
  },
  {
    id: 4,
    question: `هل النظام مناسب للشركات الصغيرة والمتوسطة؟`,
    answer: `تمامًا — النظام مصمم ليخدم جميع الأحجام، مع أدوات مناسبة لكل مرحلة من مراحل نمو الشركة.`,
  },
  {
    id: 5,
    question: `هل يدعم النظام إدارة أكثر من فرع؟`,
    answer: `نعم، يمكنك متابعة كل الفروع في وقت واحد، مع تقارير منفصلة ومجمّعة حسب الحاجة.`,
  },
  {
    id: 6,
    question: `هل النظام آمن لحفظ بيانات الشركة؟`,
    answer: `نعم، النظام مزوّد بحماية متقدمة، نسخ احتياطي دوري، وإدارة صلاحيات دقيقة لكل مستخدم.`,
  },
  {
    id: 7,
    question: `هل يوجد دعم فني؟`,
    answer: `بالتأكيد — يتوفر دعم فني مستمر لتدريب فريقك وتقديم المساعدة فورًا.
`,
  },
  {
    id: 8,
    question: `هل النظام يتضمن ذكاء اصطناعي؟`,
    answer: `نعم، المساعد الذكي يساعد في الرد على الاستفسارات، تحليل البيانات، وإعطائك توصيات تدعم قراراتك.
`,
  },
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
    <div key={faq.id} className="w-full">
      <details
        className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#fe6813]/30 transition-all duration-300 shadow-sm hover:shadow-lg w-full"
      >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </summary>

        <div className="px-6 pb-5 pt-2">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {faq.answer}
          </p>
        </div>
      </details>
    </div>
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
            href="https://wa.me/+201007020762"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fe6813] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ff7b33] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            تواصل معنا علي الواتساب
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
