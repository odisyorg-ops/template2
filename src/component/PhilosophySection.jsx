import { motion } from 'framer-motion';
import React from 'react';
const PhilosophySection = () => {
  return (
    <section className="bg-[#fbfbfd] py-40 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-12"
        >
          Our Philosophy
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.1] mb-24 max-w-4xl mx-auto"
        >
          Customized IT Solutions <br /> 
          <span className="text-[#86868b]">for Your Unique Challenges.</span>
        </motion.h2>

        <div className="pt-20 border-t border-black/[0.05]">
          <p className="text-[17px] font-semibold text-[#1d1d1f] mb-12">Our Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['STARBUCKS', 'SIEMENS', '5G READY', 'ENTERPRISE IT'].map((client) => (
              <div key={client} className="flex items-center justify-center font-black text-2xl tracking-tighter text-[#1d1d1f]">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;