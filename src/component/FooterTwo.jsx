import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const FooterTwo = () => {
  return (
    <footer className="relative bg-[#0A0A0A] pt-32 pb-12 px-6 overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-white leading-none">COLLAB</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          
          {/* Left Side: Massive CTA */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12"
            >
              Let’s build <br /> 
              <span className="text-[#D1FF00]">something</span> <br /> 
              legendary.
            </motion.h2>

            <div className="flex flex-col gap-6">
              <div className="group cursor-pointer">
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2">Email us</p>
                <a href="mailto:hello@agency.com" className="text-2xl md:text-3xl font-medium text-white group-hover:text-[#D1FF00] transition-colors flex items-center gap-3">
                  hello@agency.com <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2">Visit us</p>
                <p className="text-2xl md:text-3xl font-medium text-white transition-colors">
                  Studio 402, Brooklyn, NY
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Minimalist Lead Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-zinc-800 pb-4 focus-within:border-[#D1FF00] transition-colors">
                  <input type="text" placeholder="Name" className="bg-transparent w-full text-white outline-none placeholder:text-zinc-600" />
                </div>
                <div className="border-b border-zinc-800 pb-4 focus-within:border-[#D1FF00] transition-colors">
                  <input type="email" placeholder="Email" className="bg-transparent w-full text-white outline-none placeholder:text-zinc-600" />
                </div>
              </div>
              <div className="border-b border-zinc-800 pb-4 focus-within:border-[#D1FF00] transition-colors">
                <textarea placeholder="Tell us about your project" rows="4" className="bg-transparent w-full text-white outline-none placeholder:text-zinc-600 resize-none" />
              </div>
              <button className="w-full py-5 bg-[#D1FF00] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                Send Inquiry
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <Instagram className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          </div>
          
          <p className="text-zinc-600 font-mono text-xs">
            © 2026 DIGITAL AGENCY — BUILT FOR THE FUTURE
          </p>

          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5 }}
            className="text-zinc-500 uppercase text-[10px] font-bold tracking-[0.3em]"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;