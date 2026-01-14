import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import img1 from "../assets/Sleek Black Devices.png";

const Hero = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // The image expands slightly as it enters
  const imageReveal = {
    hidden: { y: 100, opacity: 0, scale: 0.9, rotateX: 10 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fbfbfd] text-[#1d1d1f]">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-44 pb-20">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center px-6"
        >
          {/* Headline Section */}
          <motion.div variants={fadeInUp} className="max-w-4xl mb-12">
            <span className="inline-block text-sm md:text-base font-semibold text-[#86868b] mb-6 tracking-wide">
              2026 Global Infrastructure
            </span>
            <h1 className="text-[13vw] md:text-[90px] lg:text-[110px] font-semibold leading-[0.95] tracking-[-0.04em] mb-10">
              Infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1d1d1f] to-[#86868b]">
                Redefined.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed">
              Building resilient IT ecosystems since 2014. From global 5G deployments 
              to enterprise data centers.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 mb-24">
            <button className="bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0077ed] transition-all active:scale-95 shadow-lg shadow-blue-500/20">
              Explore Solutions
            </button>
            <button className="group flex items-center gap-2 text-lg font-semibold text-[#0066cc] py-4 px-4 hover:underline underline-offset-4 transition-all">
              Watch the process
              <ChevronRight size={20} className="mt-0.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* THE STAGE: Massive Image Reveal */}
          <motion.div 
            variants={imageReveal}
            className="perspective-1000 w-full max-w-8xl md:px-0"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-[#f5f5f7] rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white/20">
               <img 
                 src={img1} 
                 alt="Hero" 
                 className="w-full h-full object-cover bg-bottom transform scale-105 group-hover:scale-100 transition-transform duration-[3s]" 
               />
               {/* Inner Glossy Overlay */}
               <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Final Stats bar */}
          <motion.div 
            variants={fadeInUp}
            className="mt-32 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-12 text-left"
          >
            {[
              { label: "Experience", val: "20+ Years" },
              { label: "Presence", val: "Global" },
              { label: "Deployment", val: "Enterprise" },
              { label: "Support", val: "24/7" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">{stat.val}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </main>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#86868b] opacity-50"
      >
        <ArrowDown size={20} />
      </motion.div>
    </div>
  );
};

export default Hero;