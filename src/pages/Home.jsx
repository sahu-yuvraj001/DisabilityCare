import { Link } from "react-router-dom";
import disablepic from "../components/Images/disable2.jpg";
import BenifitSection from "./BenifitSection";
import { motion } from "framer-motion";
import FAQ from "./FAQ";


const Home = () => {
  return (
   <>
   <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 bg-[#E9F5FF] min-h-screen">
      {/* Left Text */}
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-[40px] md:text-[80px] font-['DM_Sans',sans-serif] font-semibold text-[#001A54] leading-tight max-w-3xl mb-6">
          Social Security Disability (SSDI) Assistance
        </h1>
        <p className="text-[24px] md:text-[32px] text-[#001A54] max-w-2xl mb-10 leading-snug font-['Work_Sans',sans-serif]">
          If a medical condition is keeping you from working a year or more, you
          may qualify for Social Security Disability Insurance (SSDI).
        </p>

        <div className="relative">
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-44 h-44 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
          <Link to="/survey">
            <button className="relative bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg hover:bg-red-700 transition">
              See if you qualify
            </button>
          </Link>
        </div>
      </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="flex-1 flex justify-center">
        <img
          src={disablepic}
          alt="Supportive people"
          className="rounded-xl shadow-lg w-full max-w-md h-auto md:h-[440px] object-cover"
        />
      </div>
      </motion.div>
    </section>
    <BenifitSection/>
   <FAQ/>
    </>
  );
};

export default Home;
