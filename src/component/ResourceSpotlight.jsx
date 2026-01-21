import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const AppleStyleIndex = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, amount: 0.2 });

  const notes = [
    { code: "CSE 101", title: "Logic Gate Basics", course: "Introduction to CSE", author: "A. Rahman", color: "bg-blue-50 text-blue-600" },
    { code: "MAT 202", title: "Fourier Series Cheat Sheet", course: "Advanced Calculus", author: "S. Islam", color: "bg-purple-50 text-purple-600" },
    { code: "PHY 103", title: "Wave Mechanics", course: "Physics II", author: "T. Ahmed", color: "bg-orange-50 text-orange-600" },
    { code: "ENG 105", title: "Modern Poetry Analysis", course: "English Lit", author: "R. Gupta", color: "bg-rose-50 text-rose-600" },
    { code: "CSE 221", title: "Algorithm Complexities", course: "Algorithms", author: "M. Nasir", color: "bg-indigo-50 text-indigo-600" },
    { code: "EEE 301", title: "Microprocessor Pins", course: "Microprocessors", author: "K. Fatema", color: "bg-cyan-50 text-cyan-600" },
    { code: "BUS 101", title: "Marketing Mix Case", course: "Principles of Marketing", author: "H. Kabir", color: "bg-emerald-50 text-emerald-600" },
    { code: "LAW 402", title: "Constitutional Laws", course: "Political Science", author: "J. Uddin", color: "bg-red-50 text-red-600" },
    { code: "CSE 302", title: "SQL Normalization", course: "Database Systems", author: "L. Khan", color: "bg-sky-50 text-sky-600" },
    { code: "MAT 101", title: "Limits & Continuity", course: "Differential Calculus", author: "P. Barua", color: "bg-lime-50 text-lime-600" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    <section className="bg-[#F5F5F7] py-24 overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* HEADER WITH GLASSMORPHISM BUTTONS */}
        <div className="flex justify-between items-end mb-12">
          <div>
             <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3 block"
              >
                Updated Today
              </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight"
            >
              The Archive Index.
            </motion.h2>
          </div>

          {/* SCROLL CONTROLS (Frosted Glass) */}
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-white/40 flex items-center justify-center text-slate-600 hover:bg-white transition-all active:scale-95 shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-white/40 flex items-center justify-center text-slate-600 hover:bg-white transition-all active:scale-95 shadow-sm">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-6 overflow-x-auto pb-12 -mx-6 px-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {notes.map((note, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="min-w-[300px] md:min-w-[340px] snap-start"
            >
              {/* APPLE STYLE CARD */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02, shadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-[2rem] p-8 h-full flex flex-col justify-between shadow-[0_8px_24px_-10px_rgba(0,0,0,0.05)] border border-slate-100/50 cursor-pointer group relative overflow-hidden"
              >
                <div>
                  {/* Course Code Badge (Translucent) */}
                  <div className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6 ${note.color} bg-opacity-60 backdrop-blur-sm`}>
                    {note.code}
                  </div>

                  <h3 className="text-2xl font-bold text-[#1D1D1F] leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    {note.course}
                  </p>
                </div>
                
                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-400">
                    Added by <span className="text-slate-600">{note.author}</span>
                  </span>
                  
                  {/* Subtle Hover Icon */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW ALL BUTTON (iOS Style) */}
        <div className="mt-4 flex justify-center">
          <button className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-slate-200/50">
            <FileText size={18} />
            Browse Full Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleIndex;