import React from "react";
import { motion } from 'framer-motion';

const ContactStage = () => {
  return (
    <section className="bg-white py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-[#1d1d1f] rounded-[48px] p-12 md:p-24 text-white overflow-hidden relative"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0071e3] opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
              Ready to redefine your infrastructure?
            </h3>
            <p className="text-xl text-white/60 font-medium leading-relaxed">
              Connect with our experts today for a comprehensive audit of your technical landscape.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-12 py-5 bg-[#0071e3] text-white rounded-full text-[17px] font-semibold hover:bg-[#0077ed] transition-all active:scale-95 shadow-xl shadow-blue-500/20">
              Contact Us
            </button>
            <button className="px-12 py-5 bg-white/10 text-white backdrop-blur-md rounded-full text-[17px] font-semibold hover:bg-white/20 transition-all active:scale-95">
              Email Experts
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactStage;