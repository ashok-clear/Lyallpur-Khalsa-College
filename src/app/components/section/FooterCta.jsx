"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Samsung", logo: "/Images/Footer-cta/samsung.png" },
  { name: "HP", logo: "/Images/Footer-cta/hp.png" },
  { name: "Acer", logo: "/Images/Footer-cta/acer.png" },
  { name: "Flipkart", logo: "/Images/Footer-cta/flipkart.png" },
  { name: "ICICI", logo: "/Images/Footer-cta/icic.png" },
  { name: "Dell", logo: "/Images/Footer-cta/dell.png" },
  { name: "LinkedIn", logo: "/Images/Footer-cta/linkden.png" },
];
export default function FooterCTA() {

  return (
    <section className="relative w-full bg-white py-16 text-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-50"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 uppercase tracking-wide mb-3"
        >
          We collaborate with
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-[#0c62ae] mb-10"
        >
          Placement Companies
        </motion.h2>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-24 h-12 flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#0c62ae] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
        >
          Career Counselling & Placement Cell
        </motion.a>
      </div>
    </section>
  );
}
