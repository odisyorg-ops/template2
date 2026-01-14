import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useScroll, useTransform } from 'framer-motion';

// --- APPLE SPEC-SHEET COUNTER ---
const Counter = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-8 border-r border-black/[0.05] last:border-none">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-6xl font-semibold text-[#1d1d1f] tracking-tight">
          {displayValue.toLocaleString()}
        </span>
        <span className="text-xl font-medium text-[#0071e3]">+</span>
      </div>
      <span className="text-[13px] font-bold text-[#86868b] mt-2 uppercase tracking-widest leading-tight">
        {label}
      </span>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the background text
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="bg-white py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: THE BIG STATEMENT */}
        <div className="flex flex-col items-center text-center mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[17px] font-semibold text-[#0071e3] mb-8"
          >
            01. Who We Are
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] max-w-4xl"
          >
            Empowering businesses through <br />
            <span className="text-[#86868b]">smarter infrastructure.</span>
          </motion.h3>
        </div>

        {/* SECTION 2: THE "VISION" STAGE */}
        <div className="relative mb-60">
          {/* Abstract background floating text */}
          <motion.div 
            style={{ y }}
            className="absolute -top-20 left-0 w-full text-center pointer-events-none select-none overflow-hidden"
          >
            <span className="text-[20vw] font-bold text-black/[0.02] whitespace-nowrap uppercase tracking-tighter">
              Connectivity Redefined
            </span>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-[#f5f5f7] rounded-[48px] overflow-hidden flex items-center justify-center p-12"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-black/5 mx-auto mb-8 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-[#0071e3]" />
                </div>
                <p className="text-2xl font-medium text-[#1d1d1f] italic leading-snug">
                  "Personal support that cannot be rivaled."
                </p>
              </div>
            </motion.div>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <h4 className="text-[13px] font-bold text-[#86868b] uppercase tracking-widest mb-6">Our Vision</h4>
                <p className="text-3xl text-[#1d1d1f] font-semibold leading-tight">
                  A future where technical resources are <span className="text-[#0071e3]">never a barrier</span> to your growth.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-12 border-t border-black/[0.05]"
              >
                <h4 className="text-[13px] font-bold text-[#86868b] uppercase tracking-widest mb-6">Our Mission</h4>
                <p className="text-lg text-[#86868b] font-medium leading-relaxed max-w-lg">
                  At ADET IT, we leverage cloud-based technologies and expert reviews to fill technical gaps, 
                  reduce operational costs, and heighten productivity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 3: THE SPEC SHEET (Stats) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fbfbfd] rounded-[40px] border border-black/[0.03] p-12 md:p-20"
        >
          <div className="mb-16 text-center">
             <h4 className="text-[13px] font-bold text-[#86868b] uppercase tracking-[0.3em] mb-4">Adet IT by the numbers</h4>
             <div className="h-px w-20 bg-[#0071e3] mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16">
            <Counter value={150} label="Client Locations" />
            <Counter value={500} label="Scopes of Work" />
            <Counter value={1200} label="Technician Network" />
            <Counter value={20} label="Years Expertise" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;