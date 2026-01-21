import React from 'react';
import { motion } from 'framer-motion';

const FrameworkSection = () => {
  const principles = [
    {
      no: "01",
      title: "PEER VERIFICATION",
      description: "Every resource is rated and reviewed by students who have taken the course. We prioritize accuracy over quantity.",
      detail: "4.8/5 Avg. Resource Rating"
    },
    {
      no: "02",
      title: "OPEN ACCESSIBILITY",
      description: "No paywalls. No premium tiers. Just a shared ecosystem built on the principle of academic equity.",
      detail: "100% Free Access"
    },
    {
      no: "03",
      title: "SMART INDEXING",
      description: "Search by course code, professor name, or specific semester. Our system organizes data so you don't have to.",
      detail: "Sub-200ms Search Speed"
    }
  ];

  return (
    <section className="bg-white py-32 px-10 md:px-24">
      {/* SECTION LABEL */}
      <div className="mb-32">
        <div className="h-[1px] w-full bg-slate-100 mb-8" />
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400">
            System Philosophy
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400">
            Archive v.26
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-y-24">
        {/* LEFT: Massive Statement */}
        <div className="lg:col-span-5">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter"
          >
            A SYSTEM <br /> BUILT ON <br /> <span className="text-slate-200">INTEGRITY.</span>
          </motion.h2>
          <p className="mt-12 text-slate-500 max-w-xs leading-relaxed font-medium">
            We believe that the best academic support comes from those who have walked the path before you.
          </p>
        </div>

        {/* RIGHT: Detailed Principles */}
        <div className="lg:col-span-7 space-y-32">
          {principles.map((item, index) => (
            <motion.div 
              key={item.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-6 gap-8 items-start"
            >
              <div className="md:col-span-1">
                <span className="text-sm font-black text-slate-900 font-mono tracking-tighter">
                  [{item.no}]
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-6 uppercase">
                  {item.title}
                </h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8 max-w-lg">
                  {item.description}
                </p>
                <div className="inline-block px-4 py-2 border border-slate-100 rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                    {item.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER OF SECTION: Creative Stat Bar */}
      <div className="mt-40 pt-20 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { label: "Uptime", val: "99.9%" },
          { label: "Community Contributors", val: "4.2k" },
          { label: "Daily Queries", val: "18k" },
          { label: "Storage Capacity", val: "Unlimited" }
        ].map((stat, i) => (
          <div key={i}>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-2">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrameworkSection;