import React from "react";
import quiz from "../components/Images/quiz.jpg";
import check from "../components/Images/check2.jpg";
import notifiapp from "../components/Images/app.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BenifitSection = () => {
  const items = [
    {
      title: "Who qualifies?",
      image: quiz, // replace with your image path
      points: [
        "Adults who can’t hold a job due to a serious medical problem.",
        "People who worked at least 5 of the last 10 years.",
      ],
      link: "#",
    },
    {
      title: "What do you get?",
      image: check, // replace with your image path
      points: [
        "A monthly check from Social Security.",
        "Free health insurance from Medicare.",
      ],
      link: "#",
    },
    {
      title: "How can we help?",
      image: notifiapp, // replace with your image path
      points: [
        "Get all your SSDI Benefits  questions answered, for free.",
        "We will find a lawyer to help win your claim.",
      ],
      link: "#",
    },
  ];

  return (
  <section className="w-full py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {items.map((item, index) => (
     <motion.div
     key={index}
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
     <div
        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-60 h-48 object-contain mb-6 transition-transform duration-300 group-hover:scale-110"
        />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          {item.title}
        </h2>
        <ul className="text-gray-700 text-base mb-6 text-left list-disc list-inside">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <Link
          to="/survey"
          className="group text-blue-600 font-semibold flex items-center gap-1 transition-all duration-200 hover:text-red-600"
        >
          See if you qualify
          <span className="text-xl transform transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default BenifitSection;
