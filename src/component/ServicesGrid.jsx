import React from 'react';
import { motion } from 'framer-motion';
// Asset Imports
import fiveg from "../assets/5g.png";
import audio from "../assets/audioVisual.png";
import cyber from "../assets/cyberSecurity.png";
import dataCen from "../assets/dataCenter.png";
import dataNet from "../assets/dataNetworking.png";
import manageit from "../assets/manageIt.png";
import manageProj from "../assets/projectManagement.png";
import serveillance from "../assets/serveillance.png";

import { 
  ShieldCheck, Settings, Database, LineChart, 
  Zap, Eye, Video, Network, ChevronRight, ArrowRight 
} from 'lucide-react';

const services = [
  { 
    title: "Cyber Security", 
    icon: <ShieldCheck strokeWidth={1.5} size={24} />, 
    size: "lg", 
    img: cyber,
    desc: "Safeguard sensitive data and maintain continuity." 
  },
  { 
    title: "Project Management", 
    icon: <Settings strokeWidth={1.5} size={20} />, 
    size: "sm", 
    img: manageProj,
    desc: "Swift, proven results." 
  },
  { 
    title: "Data Centers", 
    icon: <Database strokeWidth={1.5} size={20} />, 
    size: "sm", 
    img: dataCen,
    desc: "24/7 Monitoring & uptime." 
  },
  { 
    title: "Managed I.T", 
    icon: <LineChart strokeWidth={1.5} size={22} />, 
    size: "md", 
    img: manageit,
    desc: "Tailored solutions for unique business needs." 
  },
  { 
    title: "Surveillance", 
    icon: <Eye strokeWidth={1.5} size={24} />, 
    size: "lg", 
    img: serveillance,
    desc: "Proactive AI-driven vision systems." 
  },
  { 
    title: "5G / FWA", 
    icon: <Zap strokeWidth={1.5} size={20} />, 
    size: "sm", 
    img: fiveg,
    desc: "High-speed deployment." 
  },
  { 
    title: "Audio Visual", 
    icon: <Video strokeWidth={1.5} size={20} />, 
    size: "sm", 
    img: audio,
    desc: "Seamless collaboration." 
  },
  { 
    title: "Data Networking", 
    icon: <Network strokeWidth={1.5} size={20} />, 
    size: "sm", 
    img: dataNet,
    desc: "Efficient infrastructure." 
  },
  { 
    title: "Custom Solutions", 
    icon: <Settings strokeWidth={1.5} size={20} />, 
    size: "sm", 
    isCustom: true, // Special flag for the black card
    desc: "Engineered specifically for your unique challenges." 
  },
];

const ServiceCard = ({ service, index }) => {
  const isLarge = service.size === "lg";
  const isMedium = service.size === "md";
  const isCustom = service.isCustom;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      whileHover={{ scale: 1.015 }}
      className={`relative group flex flex-col justify-end overflow-hidden rounded-[32px] border shadow-2xl transition-all cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2 min-h-[450px]' : 
        isMedium ? 'md:col-span-2 min-h-[220px]' : 'col-span-1 min-h-[220px]'
      } ${isCustom ? 'bg-[#1d1d1f] border-white/5' : 'bg-white border-white/10'}`}
    >
      {/* BACKGROUND LAYER */}
      {!isCustom ? (
        <motion.div 
          className="absolute inset-0 z-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={service.img} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </motion.div>
      ) : (
        /* Custom Solution Animated Background */
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#0071e315,transparent_70%)]" />
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-[#0071e3] blur-[80px] rounded-full opacity-20"
          />
        </div>
      )}

      {/* CONTENT LAYER */}
      <div className="relative z-10 p-8 w-full">
        <div className="flex justify-between items-start mb-4">
          <div className={`backdrop-blur-md p-2 rounded-xl border ${isCustom ? 'text-[#0071e3] bg-white/5 border-white/10' : 'text-white/90 bg-white/10 border-white/10'}`}>
            {service.icon}
          </div>
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
            <ChevronRight size={18} className="text-white" />
          </div>
        </div>

        <div>
          <h4 className={`font-semibold tracking-tight text-white mb-2 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
            {service.title}
          </h4>
          <p className={`font-medium text-white/60 leading-tight ${isLarge ? 'text-lg max-w-xs' : 'text-[13px] max-w-[180px]'}`}>
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="bg-[#fbfbfd] py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[17px] font-semibold text-[#1d1d1f] mb-4"
          >
            Capabilities
          </motion.h2>
          <h3 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tight leading-[1.1]">
            Technology <span className="text-[#86868b]">Solutions.</span>
          </h3>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>

        {/* SEPARATE CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 md:p-20 bg-white rounded-[40px] border border-black/[0.03] shadow-[0_20px_40px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-md text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
              Need a custom scope?
            </h4>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              We engineer specialized infrastructure for businesses with unique technical requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-[#0071e3] text-white rounded-full text-[17px] font-semibold hover:bg-[#0077ed] transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-blue-500/20">
              Request an Audit <ArrowRight size={18} />
            </button>
            <button className="px-10 py-4 bg-[#f5f5f7] text-[#1d1d1f] rounded-full text-[17px] font-semibold hover:bg-[#e8e8ed] transition-all border border-black/[0.03]">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;