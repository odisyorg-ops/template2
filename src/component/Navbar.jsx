import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Shield, Globe, Cpu } from 'lucide-react';

const navLinks = [
  {
    name: 'Solutions',
    dropdown: [
      { title: 'Cyber Security', desc: 'Enterprise-grade protection.', icon: <Shield size={18} /> },
      { title: 'Data Centers', desc: 'Uptime, redefined.', icon: <Cpu size={18} /> },
      { title: 'Global Network', desc: '5G & FWA deployment.', icon: <Globe size={18} /> },
    ]
  },
  { name: 'About', dropdown: null },
  { name: 'Network', dropdown: null },
  { name: 'Support', dropdown: null },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-center">
      {/* Main Nav Container */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl bg-white/70 backdrop-blur-xl border border-black/[0.05] rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#1d1d1f] rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <span className="font-bold text-xs">A</span>
          </div>
          <div className="text-sm font-semibold tracking-tighter text-[#1d1d1f]">
            ADET<span className="opacity-40">IT</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-[13px] font-medium text-[#1d1d1f]/70 hover:text-black hover:bg-black/[0.03] rounded-full transition-all flex items-center gap-1">
                {link.name}
                {link.dropdown && (
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-[24px] border border-black/[0.05] shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 overflow-hidden"
                  >
                    <div className="flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <button key={item.title} className="flex items-center gap-4 p-3 hover:bg-[#f5f5f7] rounded-xl transition-colors text-left group">
                          <div className="w-10 h-10 rounded-lg bg-[#f5f5f7] group-hover:bg-white flex items-center justify-center text-[#0071e3] transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-[#1d1d1f]">{item.title}</div>
                            <div className="text-[11px] text-[#86868b]">{item.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block text-[13px] font-medium text-[#1d1d1f]/60 hover:text-black transition-colors px-4">
            Sign In
          </button>
          <button className="bg-[#0071e3] text-white text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-[#0077ed] transition-all active:scale-95 shadow-lg shadow-blue-500/20">
            Work with us
          </button>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-[#1d1d1f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 bg-white rounded-[32px] border border-black/[0.05] shadow-2xl p-8 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <div className="text-2xl font-semibold text-[#1d1d1f] flex items-center justify-between">
                  {link.name}
                  <ArrowRight size={18} className="opacity-20" />
                </div>
                {link.dropdown && (
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {link.dropdown.map(d => (
                      <div key={d.title} className="text-[#86868b] font-medium">{d.title}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;