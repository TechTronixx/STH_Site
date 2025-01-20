import { motion } from "framer-motion";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is $STH?",
      answer:
        "SolTimeHigh is a community-driven token built on the Solana blockchain, to celebrate the ath of Solana and Trump's Presidency",
    },
    {
      question: "How can I buy $STH?",
      answer:
        "You can buy SolTimeHigh through our website using the Buy Now button, or through decentralized exchanges like Raydium. Make sure you have a Solana wallet with SOL for transactions.",
    },
    {
      question: "lorem lorem loremlorem lorem lorem",
      answer:
        "lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem",
    },
    {
      question: "lorem lorem",
      answer: "lorem lorem loremlorem lorem loremlorem lorem lorem",
    },
    {
      question: "lorem lorem lorem",
      answer:
        "lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem lorem",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            Frequently Asked <span className="text-goldAccent">Questions</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-goldAccent"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 text-left rounded-lg bg-zinc-800 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-goldAccent transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
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
                {openIndex === index && (
                  <p className="mt-4 text-gray-300">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
