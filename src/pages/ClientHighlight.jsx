import React from "react";
import oldmanpic from '../components/Images/oldman.jpg'
import { motion } from "framer-motion";
const ClientHighlight = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col md:flex-row items-center mb-10">
     
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
        <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-teal-400 font-semibold mb-4 uppercase tracking-wide">
          Client highlight
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          “I lived in so much pain, but didn’t realize I was eligible.”
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Barry worked for 30 years as a law clerk. But when spinal stenosis
          made working impossible, even he couldn’t navigate the disability
          system on his own. After two denials, we helped him get approved.
        </p>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2">
       <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={oldmanpic} // replace with your actual image path
          alt="Client highlight"
          className="w-full h-full object-cover"
        />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientHighlight;
