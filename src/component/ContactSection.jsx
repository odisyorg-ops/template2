import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative bg-[#fbfbfd] py-32 md:py-48 px-6 overflow-hidden">
      {/* Background Decor: Subtitles and Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[60%] bg-blue-50/50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start"
        >
          
          {/* LEFT COLUMN: THE INVITE (5 Columns) */}
          <div className="lg:col-span-5">
            <motion.h2 variants={itemVars} className="text-[17px] font-semibold text-[#0071e3] mb-8">
              Contact Us
            </motion.h2>
            
            <motion.h3 variants={itemVars} className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.05] mb-12">
              Let’s build your <br />
              <span className="text-[#86868b]">future ecosystem.</span>
            </motion.h3>

            <motion.div variants={itemVars} className="space-y-10 mt-16">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.03] shadow-sm flex items-center justify-center text-[#0071e3] group-hover:scale-110 transition-transform">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#86868b] uppercase tracking-widest mb-1">Email Our Experts</h4>
                  <p className="text-xl font-semibold text-[#1d1d1f]">solutions@adet-it.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.03] shadow-sm flex items-center justify-center text-[#0071e3] group-hover:scale-110 transition-transform">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#86868b] uppercase tracking-widest mb-1">Global HQ</h4>
                  <p className="text-xl font-semibold text-[#1d1d1f]">Redefined in the USA</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: THE FORM (7 Columns) */}
          <motion.div 
            variants={itemVars}
            className="lg:col-span-7 bg-white rounded-[40px] border border-black/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.03)] p-8 md:p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-[#1d1d1f] ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 text-[15px] focus:ring-2 focus:ring-[#0071e3] transition-all placeholder:opacity-30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-[#1d1d1f] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 text-[15px] focus:ring-2 focus:ring-[#0071e3] transition-all placeholder:opacity-30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-[#1d1d1f] ml-1">Service Required</label>
                <select className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 text-[15px] focus:ring-2 focus:ring-[#0071e3] transition-all appearance-none cursor-pointer">
                  <option>Managed I.T. & Security</option>
                  <option>5G / FWA Deployment</option>
                  <option>Data Center Infrastructure</option>
                  <option>Cyber Security Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-[#1d1d1f] ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help redefine your infrastructure?"
                  className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 text-[15px] focus:ring-2 focus:ring-[#0071e3] transition-all placeholder:opacity-30 resize-none"
                />
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-[#0071e3] text-white rounded-full text-[17px] font-semibold hover:bg-[#0077ed] transition-all active:scale-95 flex items-center justify-center gap-3 group">
                Send Inquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;