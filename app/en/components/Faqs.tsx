import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqsData = [
  {
    id: 1,
    question: `What is the "Azzka" system?`,
    answer: `It is an integrated ERP system that helps companies manage all their departments (accounting, tourism, marketing and sales, human resources, warehouses... and more) from one platform with intelligence and ease.`,
  },
  {
    id: 2,
    question: `What distinguishes the system from any other system?`,
    answer: `"Azzka" provides complete governance, integration between departments, artificial intelligence to support decision-making, and a simple user experience that supports company growth, in addition to using the latest technologies that support continuous development.`,
  },
  {
    id: 3,
    question: "Can the system be customized according to my company's nature?",
    answer: `Yes, the system is flexible and can be fully customized to match the type of activity, company size, and your way of working.`,
  },
  {
    id: 4,
    question: `Is the system suitable for small and medium-sized companies?`,
    answer: `Absolutely — the system is designed to serve all sizes, with appropriate tools for every stage of company growth.`,
  },
  {
    id: 5,
    question: `Does the system support managing more than one branch?`,
    answer: `Yes, you can monitor all branches at once, with separate and combined reports as needed.`,
  },
  {
    id: 6,
    question: `Is the system secure for storing company data?`,
    answer: `Yes, the system is equipped with advanced protection, periodic backups, and precise permission management for each user.`,
  },
  {
    id: 7,
    question: `Is there technical support?`,
    answer: `Certainly — continuous technical support is available to train your team and provide immediate assistance.`,
  },
  {
    id: 8,
    question: `Does the system include artificial intelligence?`,
    answer: `Yes, the smart assistant helps answer inquiries, analyze data, and give you recommendations that support your decisions.`,
  },
];

const Faqs = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50" dir="ltr">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#500d75] to-[#6b1a99] mb-4">
            <FaQuestionCircle className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick answers to the most common questions about our system
          </p>
        </div>

        {/* FAQs Accordion - Grid Layout */}
        <div className="grid gap-4 md:grid-cols-2">
          {faqsData.map((faq) => (
            <div key={faq.id} className="w-full">
              <details
                className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#fe6813]/30 transition-all duration-300 shadow-sm hover:shadow-lg w-full"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-200">
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
            Didn't find an answer to your question?
          </h3>
          <p className="text-gray-200 mb-6 text-lg">
            Our team is ready to help you anytime
          </p>
          <a
            href="https://wa.me/+201007020762"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fe6813] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ff7b33] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;