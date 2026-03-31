import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What areas do you service?",
      answer:
        "We provide electrical engineering services across Accra and surrounding regions, and we are available for projects nationwide upon request.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we offer emergency electrical services to handle urgent faults and ensure safety and continuity of power.",
    },
    {
      question: "How quickly can I receive a response?",
      answer:
        "We typically respond within a few hours during working hours, and within 24 hours at most.",
    },
    {
      question:
        "Do you provide consultations before starting a project?",
      answer:
        "Yes, we offer professional consultations to understand your needs and provide the best solutions before starting any project.",
    },
    {
      question: "What safety measures do you follow?",
      answer:
        "We strictly adhere to industry safety standards and regulations, ensuring the safety of personnel, equipment, and property at all times.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-center text-gray-500 text-sm">FAQ</h3>

      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Frequently Asked Questions: We're Here to Help
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b pb-3 cursor-pointer hover:text-blue-900 transition"
            onClick={() => toggleFAQ(i)}
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.question}</span>
              <span className="text-xl">
                {activeIndex === i ? "-" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === i ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}