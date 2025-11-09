import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Disability Claim Assist?",
    answer:
      "Disability Claim Assist helps individuals navigate and simplify the process of applying for and managing federal DisabilityClaimAssist  benefits. We handle the paperwork, communication, and appeals so you can focus on your health.",
  },
  {
    question: "How much does this service cost?",
    answer:
      "There are no upfront fees. Our assistance is provided on a contingency basis — meaning you only pay if your claim is approved.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. We prioritize your privacy with secure encryption and strict confidentiality policies that protect all personal and medical data.",
  },
  {
    question: "What types of disability benefits can I apply for?",
    answer:
      "We assist with Social Security DisabilityClaimAssist  Insurance (SSDI) and Supplemental Security Income (SSI) applications, appeals, and hearings.",
  },
  {
    question: "How does the process work?",
    answer:
      "Once you contact us, our team reviews your eligibility, gathers necessary medical records, and guides you through each step — from application to appeal if needed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9FAFB] py-16 px-6 md:px-20 text-[#00184E]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, delay: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Everything you need to know about DisabilityClaimAssist 
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-sm rounded-2xl border border-gray-200 p-6 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="text-[#00184E]" />
              ) : (
                <ChevronDown className="text-[#00184E]" />
              )}
            </div>

            {openIndex === index && (
              <motion.p
                className="text-gray-600 mt-3 text-base leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
