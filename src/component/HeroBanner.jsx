import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ArrowUpRight } from 'lucide-react';

const MonochromeHero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  const departments = [
    { id: "01", name: "Engineering", count: "1,240" },
    { id: "02", name: "Business", count: "856" },
    { id: "03", name: "Natural Science", count: "412" },
    { id: "04", name: "Law & Arts", count: "305" },
  ];

  const handleDeptClick = (dept) => {
    setSelectedDept(dept);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 2200);
  };

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center px-10 md:px-24 font-sans">
      
      {/* BACKGROUND: Pure White, No Text */}
      <div className="absolute inset-0 z-0 bg-white" />

      <div className="relative z-10 w-full grid lg:grid-cols-2 gap-24 items-center">
        
        {/* LEFT SIDE: Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-slate-400 italic">Leading University Archive</span>
          </div>

          <h1 className="text-8xl md:text-[120px] font-black text-slate-900 leading-[0.8] tracking-tighter">
            SHARE <br />
            KNOWLEDGE. <br />
            <span className="text-slate-100 drop-shadow-[1px_1px_0_#e2e8f0]">BUILD THE</span> <br />
            <span className="relative inline-block">
              FUTURE.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="absolute -bottom-4 left-0 h-1 bg-slate-900" 
              />
            </span>
          </h1>

          <div className="mt-20 flex flex-wrap gap-12 items-center">
            <button 
              onClick={() => handleDeptClick({name: "Archive"})}
              className="group flex items-center gap-6 text-slate-900 font-bold text-2xl tracking-tight"
            >
              <span>Explore</span>
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500">
                <ArrowRight size={24} />
              </div>
            </button>
            
            <div className="relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Find a resource..." 
                className="bg-transparent border-b border-slate-100 py-3 pl-8 pr-4 outline-none text-slate-900 placeholder:text-slate-300 font-medium w-64 focus:border-slate-900 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: The Minimalist Ruler */}
        <div className="hidden lg:flex justify-end h-[500px]">
          <div className="relative flex flex-col justify-between items-end pr-16">
            <div className="absolute right-0 top-0 w-[1px] h-full bg-slate-100" />

            {departments.map((dept, idx) => (
              <div 
                key={dept.id}
                className="relative flex items-center group cursor-pointer py-6"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleDeptClick(dept)}
              >
                <AnimatePresence mode="wait">
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: -30 }}
                      exit={{ opacity: 0, x: 5 }}
                      className="absolute right-full whitespace-nowrap text-right pr-6"
                    >
                      <span className="block text-[10px] font-bold text-slate-400 mb-2 tracking-[.2em]">{dept.count} FILES</span>
                      <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">{dept.name}</h4>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-8">
                  <span className={`text-[13px] font-bold transition-colors duration-500 ${hoveredIndex === idx ? 'text-slate-900' : 'text-slate-200'}`}>
                    {dept.id}
                  </span>
                  <motion.div 
                    animate={{ 
                      scale: hoveredIndex === idx ? 1.5 : 1,
                      backgroundColor: hoveredIndex === idx ? '#0f172a' : '#f1f5f9',
                      width: hoveredIndex === idx ? '40px' : '12px',
                    }}
                    className="h-1 rounded-full z-10 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CINEMATIC TRANSITION OVERLAY --- */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[100] bg-slate-900 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-white text-[8vw] font-black uppercase tracking-tighter leading-none">
                {selectedDept?.name}
              </h2>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-slate-700" />
                <span className="text-slate-500 text-xs font-bold uppercase tracking-[.5em]">Initializing</span>
                <div className="h-[1px] w-12 bg-slate-700" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </section>
  );
};

export default MonochromeHero;