"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="bg-[#0676BD] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="flex-1 lg:flex-basis-1/2 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-[#0676BD] mb-6">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                Est. 1950 • Premier Education Institution
              </div>

              {/* Main Heading */}
              <h1 className="mb-8 font-clanpro text-5xl leading-[110%] font-bold">

                {"Welcome to<br/>Lyallpur Khalsa College, Jalandhar".split("<br/>").map((element, index) => {
                  return <motion.div key={`title-line-${index}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, ease: "easeInOut", delay: index }}>
                    {element}
                  </motion.div>
                })}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Nurturing excellence, fostering innovation, and empowering students to become leaders of tomorrow through quality education and holistic development.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-yellow-500 hover:bg-white text-blue-900 font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Admission Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">15K+</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">50+</div>
                  <div className="text-sm text-blue-200">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">200+</div>
                  <div className="text-sm text-blue-200">Faculty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">75+</div>
                  <div className="text-sm text-blue-200">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="flex-1 lg:flex-basis-1/2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/Images/hero-banner-img.webp"
                    alt="Lyallpur Khalsa College Campus"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality Education</h3>
                      <p className="text-sm text-gray-600">Since 1950</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-10"></div>
      </div>
    </section>
  );
}
