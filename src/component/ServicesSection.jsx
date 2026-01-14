import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Paintbrush2, Zap, Globe } from 'lucide-react';

const services = [
  {
    title: "Brand Identity",
    description: "Creating distinct visual languages for modern startups.",
    icon: <Paintbrush2 className="w-6 h-6" />,
    tag: "Visual"
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces optimized for conversion and delight.",
    icon: <Zap className="w-6 h-6" />,
    tag: "Experience"
  },
  {
    title: "Web Development",
    description: "High-performance, scalable codebases built with React & Next.js.",
    icon: <Code2 className="w-6 h-6" />,
    tag: "Performance"
  },
  {
    title: "Digital Strategy",
    description: "Data-driven roadmaps to scale your product effectively.",
    icon: <Globe className="w-6 h-6" />,
    tag: "Strategy"
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">
              Our Expertise
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-black leading-tight">
              We solve complex problems through <span className="text-gray-300 italic">elegant design</span> and robust engineering.
            </p>
          </div>
          <motion.div 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 font-bold text-black cursor-pointer group"
          >
            All Services <ArrowRight className="group-hover:text-[#D1FF00] transition-colors" />
          </motion.div>
        </div>

        {/* Services List */}
        <div className="border-t border-gray-100">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative border-b border-gray-100 py-10 md:py-14 cursor-pointer overflow-hidden group"
            >
              {/* Animated Background Highlight */}
              <motion.div 
                initial={false}
                animate={{ 
                  height: hoveredIndex === index ? '100%' : '0%' 
                }}
                className="absolute left-0 bottom-0 w-full bg-[#FAFAFA] -z-10 transition-all duration-300 ease-out"
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
                <div className="flex items-center gap-8">
                  <span className="hidden md:block text-sm font-mono text-gray-300">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="md:hidden text-[#D1FF00]">{service.icon}</span>
                      <h3 className="text-3xl md:text-5xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className={`text-gray-500 max-w-md transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'md:opacity-0'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-6">
                  <span className="px-4 py-1 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest group-hover:border-[#D1FF00] group-hover:bg-[#D1FF00] transition-colors">
                    {service.tag}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;