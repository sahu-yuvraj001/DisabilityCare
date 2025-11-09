import React from "react";
import logo from "./Images/mainlogo.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-[#00184E] text-white py-10 px-6 md:px-20">
  <motion.div
    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {/* Legal */}
    <div className="flex justify-center items-start gap-40">
    <div>
      <h2 className="font-semibold text-lg mb-3">Legal</h2>
      <ul className="space-y-2 text-gray-300">
        <li>
          <a href="#" className="hover:text-white">
            Terms and Conditions
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="font-semibold text-lg mb-3">Contact</h2>
      <ul className="space-y-2 text-gray-300">
        <li>
          <a href="#" className="hover:text-white">
            (855) 536-4572
          </a>
        </li>
      </ul>
    </div>
    </div>
  </motion.div>

  {/* Bottom Copyright */}
  <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300 text-sm">
    © 2025 Disability Claim Assist.
  </div>
</footer>

  );
};

export default Footer;
