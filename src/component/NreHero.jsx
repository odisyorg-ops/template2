import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MousePointer2, ChevronDown } from 'lucide-react';

const NewHero = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-6 overflow-hidden">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', size: '40px 40px' }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl text-center"
      >
        {/* Top Tagline */}
        <motion.span 
          variants={itemVariants}
          className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest uppercase bg-black text-white"
        >
          Est. 2026 / Digital Agency
        </motion.span>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black text-[#111] leading-[0.9] tracking-tighter mb-8"
        >
          We build digital products that <span className="text-gray-400">define the future.</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12"
        >
          A boutique design & development agency focused on high-performance web experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative flex items-center gap-2 bg-[#D1FF00] text-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-[#D1FF00] transition-colors duration-300">
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-2 border-2 border-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all duration-300">
            View Work
          </button>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Aesthetic Floating Icon */}
      <div className="absolute top-1/4 right-[10%] opacity-10 hidden lg:block">
        <MousePointer2 size={120} strokeWidth={1} />
      </div>
    </section>
  );
};

export default NewHero;