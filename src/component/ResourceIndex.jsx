import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, FileText, Download, Users } from 'lucide-react';

const ResourceIndex = () => {
  const categories = [
    { 
      id: "01", 
      title: "Computer Science", 
      stats: "1,240 Resources", 
      tags: ["Algorithms", "OS", "Web Dev"],
      desc: "Comprehensive lecture notes and project repositories for all undergraduate levels."
    },
    { 
      id: "02", 
      title: "Business Admin", 
      stats: "856 Resources", 
      tags: ["Finance", "Marketing", "HR"],
      desc: "Case studies, market research templates, and semester past papers."
    },
    { 
      id: "03", 
      title: "Electrical Engineering", 
      stats: "612 Resources", 
      tags: ["Circuits", "Signal Processing", "VLSI"],
      desc: "Detailed circuit diagrams, lab reports, and technical documentation."
    }
  ];

  return (
    <section className="bg-white py-32 px-10 md:px-24 border-t border-slate-100">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 mb-6 block">
            Featured Collections
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            CURATED <br /> REPOSITORIES.
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <p className="text-slate-400 font-medium max-w-[240px] text-sm leading-relaxed italic">
            "Knowledge grows when shared. Access peer-reviewed materials from every department."
          </p>
        </motion.div>
      </div>

      {/* THE INDEX LIST */}
      <div className="space-y-0">
        {categories.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative border-t border-slate-100 py-12 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-8 cursor-pointer hover:bg-slate-50 transition-colors duration-500 px-4 -mx-4 rounded-xl"
          >
            {/* ID & TITLE */}
            <div className="md:col-span-1 text-slate-200 group-hover:text-slate-900 transition-colors duration-500 font-black text-2xl tracking-tighter">
              {item.id}
            </div>
            
            <div className="md:col-span-5">
              <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tighter flex items-center gap-4">
                {item.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-slate-400" size={24} />
              </h3>
              <p className="text-slate-400 mt-2 text-sm font-medium max-w-sm">
                {item.desc}
              </p>
            </div>

            {/* TAGS (HIDDEN ON MOBILE) */}
            <div className="hidden md:flex md:col-span-4 flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* STATS */}
            <div className="md:col-span-2 text-right w-full md:w-auto">
              <span className="block text-xl font-black text-slate-900">{item.stats}</span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Active Files</span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-slate-100 w-full" />
      </div>

      {/* CALL TO ACTION GRID */}
      <div className="mt-32 grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-[2rem]">
        
        {/* ACTION BLOCK 1: UPLOAD */}
        <div className="bg-white p-12 hover:bg-slate-900 group transition-all duration-700 cursor-pointer">
          <Plus className="text-slate-300 group-hover:text-white mb-8 transition-colors" size={48} />
          <h4 className="text-4xl font-black text-slate-900 group-hover:text-white tracking-tighter mb-4">
            Contribute to <br /> the Archive.
          </h4>
          <p className="text-slate-400 group-hover:text-slate-500 font-medium mb-8">
            Upload your lecture notes or research papers to help your peers succeed.
          </p>
          <div className="flex items-center gap-3 text-slate-900 group-hover:text-white font-bold text-sm uppercase tracking-widest">
            <span>Start Uploading</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* ACTION BLOCK 2: COMMUNITY */}
        <div className="bg-white p-12 hover:bg-slate-900 group transition-all duration-700 cursor-pointer">
          <Users className="text-slate-300 group-hover:text-white mb-8 transition-colors" size={48} />
          <h4 className="text-4xl font-black text-slate-900 group-hover:text-white tracking-tighter mb-4">
            Join the <br /> Study Groups.
          </h4>
          <p className="text-slate-400 group-hover:text-slate-500 font-medium mb-8">
            Connect with students from your department for real-time collaboration.
          </p>
          <div className="flex items-center gap-3 text-slate-900 group-hover:text-white font-bold text-sm uppercase tracking-widest">
            <span>Find Groups</span>
            <ArrowRight size={16} />
          </div>
        </div>

      </div>
    </section>
  );
};

// Simple ArrowRight icon for the CTA buttons
const ArrowRight = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default ResourceIndex;