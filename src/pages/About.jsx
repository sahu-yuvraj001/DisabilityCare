import React from "react";
import aboutpic from "../components/Images/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="bg-[#00184E] text-white py-16 px-6 md:px-20">
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-sky-400">DisabilityClaimAssist </span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We are dedicated to helping individuals with disabilities receive
            the benefits, care, and respect they truly deserve. Our mission is
            to make every process simpler, more transparent, and full of
            compassion.
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutpic}
            alt="Helping Hands"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-sky-400">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At DisabilityClaimAssist , we believe that every person — regardless of
              physical or mental limitations — deserves fair access to support
              and opportunities. Our team works tirelessly to guide individuals
              through complex benefit systems and help them secure the
              assistance they need.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8 text-center">
      
        <div className="bg-[#012A80] p-8 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-1xl hover:shadow-white">
        <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
          <h3 className="text-xl font-semibold mb-3 text-sky-400 transition-colors duration-300 hover:text-white">
            Compassion
          </h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-gray-100">
            We treat every client with empathy and dignity, offering support
            every step of the way.
          </p>
          </motion.div>
        </div>

        <div className="bg-[#012A80] p-8 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-1xl hover:shadow-white">
         <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
          <h3 className="text-xl font-semibold mb-3 text-sky-400 transition-colors duration-300 hover:text-white">
            Integrity
          </h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-gray-100">
            We believe in honesty, transparency, and doing what’s right —
            always.
          </p>
          </motion.div>
        </div>

        <div className="bg-[#012A80] p-8 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-1xl hover:shadow-white">
         <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
          <h3 className="text-xl font-semibold mb-3 text-sky-400 transition-colors duration-300 hover:text-white">
            Commitment
          </h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-gray-100">
            Our mission doesn’t end with paperwork — we stand by you until
            results are achieved.
          </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
         <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4">
          Together, we can make a difference.
        </h3>
        <a
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-sky-400 transition"
        >
          Contact Us
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
