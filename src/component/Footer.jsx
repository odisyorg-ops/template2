import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuGroups = [
    {
      title: "Solutions",
      links: ["Cyber Security", "Managed I.T.", "Data Centers", "5G / FWA", "Surveillance", "Audio Visual"]
    },
    {
      title: "Company",
      links: ["Our Story", "The Process", "Client Network", "Careers", "Newsroom"]
    },
    {
      title: "Support",
      links: ["Contact Experts", "System Status", "Documentation", "Global Technicians"]
    }
  ];

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f] border-t border-black/[0.05]">
      {/* DESKTOP: 70vh - Immersive Site Map 
        MOBILE: auto - Stacked for scrolling
      */}
      <div className="min-h-screen md:min-h-[70vh] flex flex-col justify-between px-6 md:px-20 py-20 md:py-24">
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            
            {/* BRAND SECTION (4 Columns) */}
            <div className="md:col-span-4 flex flex-col justify-between gap-12">
              <div>
                <div className="text-3xl font-semibold tracking-tighter mb-8">
                  ADET<span className="opacity-30 font-medium">IT</span>
                </div>
                <p className="text-xl text-[#86868b] font-medium leading-relaxed max-w-sm">
                  Engineering the next generation of global IT infrastructure. 
                  Building for 2026 and beyond.
                </p>
              </div>
              
              <div className="flex gap-4">
                {[<Linkedin />, <Twitter />, <Instagram />].map((icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full bg-white border border-black/[0.05] flex items-center justify-center text-[#86868b] hover:text-[#0071e3] hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                    {React.cloneElement(icon, { size: 20, strokeWidth: 1.5 })}
                  </button>
                ))}
              </div>
            </div>

            {/* LINKS SECTION (8 Columns) */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
              {menuGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-[13px] font-bold text-[#1d1d1f] uppercase tracking-[0.2em] mb-8">
                    {group.title}
                  </h4>
                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="group text-lg text-[#86868b] font-medium hover:text-[#0071e3] transition-colors flex items-center gap-2">
                          {link}
                          <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM BAR: LEGAL & STATUS */}
        <div className="max-w-7xl mx-auto w-full pt-20 mt-20 border-t border-black/[0.05]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-[13px] font-medium text-[#86868b]">
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              <span className="text-[#1d1d1f]">Copyright © {currentYear} ADET IT Global.</span>
              <a href="#" className="hover:text-[#1d1d1f] underline underline-offset-4 decoration-black/10">Privacy Policy</a>
              <a href="#" className="hover:text-[#1d1d1f] underline underline-offset-4 decoration-black/10">Terms of Use</a>
              <a href="#" className="hover:text-[#1d1d1f] underline underline-offset-4 decoration-black/10">Sales & Refunds</a>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-black/[0.03] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-wider">Cloud Systems Active</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                <Globe size={16} strokeWidth={1.5} />
                <span>United States (English)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;