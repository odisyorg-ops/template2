import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MousePointer2, ChevronDown, Menu, X } from 'lucide-react';

const NewHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] px-6 overflow-hidden transition-colors duration-500">
      
      {/* --- FIXED NAVIGATION --- */}
      {/* <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
        isScrolled ? 'bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-black dark:text-white"
          >
            ODISY<span className="text-[#D1FF00]">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black dark:hover:text-[#D1FF00] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black dark:bg-[#D1FF00] text-white dark:text-black px-6 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-[#D1FF00] hover:text-black dark:hover:bg-white transition-all"
            >
              Start a Project
            </motion.button>
          </div>

          <button className="md:hidden text-black dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav> */}

      {/* --- HERO CONTENT --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl text-center"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest uppercase bg-black text-white dark:bg-[#D1FF00] dark:text-black"
        >
          ODISY / Digital Agency 2026
        </motion.span>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black text-[#111] dark:text-white leading-[0.9] tracking-tighter mb-8"
        >
          We build digital products that <span className="text-gray-400 dark:text-zinc-700">define the future.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-zinc-400 font-medium leading-relaxed mb-12"
        >
          A boutique design & development agency focused on high-performance web experiences.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative flex items-center gap-2 bg-[#D1FF00] text-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-[#D1FF00] transition-colors duration-300">
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-2 border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
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
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Floating Decorative Icon */}
      <div className="absolute top-1/4 right-[10%] opacity-[0.05] dark:opacity-[0.1] hidden lg:block text-black dark:text-white">
        <MousePointer2 size={120} strokeWidth={1} />
      </div>
    </section>
  );
};

export default NewHero;