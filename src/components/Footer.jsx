import React from "react";
import logo from "./Images/mainlogo.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-[#00184E] text-white py-10 px-6 md:px-20">
     <motion.div
             className="flex-1 mb-10 md:mb-0"
             initial={{ opacity: 0, x: -80 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
           >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo + Our Services */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Example placeholder logo */}
            <div className="flex flex-col space-y-1">
              <img src={logo} 
               alt="Footer Logo"
              className="w-[120px] h-6 cursor-pointer"
              />
            </div>
          </div>

          <h2 className="font-semibold text-lg mb-3">Our Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Appeals</a></li>
            <li><a href="#" className="hover:text-white">ALJ Hearings</a></li>
            <li><a href="#" className="hover:text-white">Reconsideration</a></li>
            <li><a href="#" className="hover:text-white">SSDI</a></li>
            <li><a href="#" className="hover:text-white">SSI</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Resources</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Meet our Team</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Legal</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Contact</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">(888) 777-8886</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300 text-sm">
       © 2025 DISABILITY CARE CORP.
      </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
