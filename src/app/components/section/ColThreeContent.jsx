"use client";

import React from "react";

const programmes = [
  {
    title: "UNDERGRADUATE PROGRAMMES",
    desc: "Lyallpur Khalsa College offers a variety of undergraduate courses across multiple disciplines, including arts, science, commerce, computer science and IT.",
  },
  {
    title: "POSTGRADUATE PROGRAMMES",
    desc: "Lyallpur Khalsa College offers numerous postgraduate programs in various disciplines aimed at providing advanced knowledge and research opportunities.",
  },
  {
    title: "ONE YEAR DIPLOMA PROGRAMMES",
    desc: "Lyallpur Khalsa College offers various diploma courses designed to provide practical skills and specialized knowledge in specific fields.",
  },
];
export default function ColThreeContent() {

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Section Header */}
        <p className="text-gray-500 uppercase tracking-wide mb-2">
          Choose the Programme
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c62ae] mb-12">
          Our Programmes
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all rounded-md p-6 bg-white"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
