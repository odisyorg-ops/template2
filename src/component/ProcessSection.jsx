import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Users, PencilRuler, Headphones, CheckCircle2 } from 'lucide-react';

const steps = [
  { 
    id: "01", 
    title: "Collaboration", 
    desc: "We work with your business goals to develop a networking solution that fits your specific needs through visual and technical audits.",
    icon: <Users size={32} strokeWidth={1} />
  },
  { 
    id: "02", 
    title: "Planning", 
    desc: "Our experts apply frameworks and goal-setting to strategic initiatives, ensuring your network is set up for high-tier performance.",
    icon: <PencilRuler size={32} strokeWidth={1} />
  },
  { 
    id: "03", 
    title: "Support", 
    desc: "Transparency and response times are our priority. We keep you updated on the status of all ongoing network projects.",
    icon: <Headphones size={32} strokeWidth={1} />
  },
  { 
    id: "04", 
    title: "Delivery", 
    desc: "We deliver an unparalleled standard of excellence. Our clients expect the best—and our teams are proud to deliver it.",
    icon: <CheckCircle2 size={32} strokeWidth={1} />
  }
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the progress for the bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-[#fbfbfd] py-40 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Fixed to left on Desktop */}
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[17px] font-semibold text-[#0071e3] mb-4"
            >
              The Path to Redefinition
            </motion.h2>
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.05]">
              How we move <br /> your business forward.
            </h3>
          </div>
          <p className="text-xl text-[#86868b] font-medium max-w-xs mb-2">
            A methodical, four-stage approach to technical excellence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Progress Bar Tracker */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/[0.05]">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-[#0071e3]"
            />
          </div>

          <div className="space-y-40">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content Side */}
      <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} pl-12 md:pl-0`}>
        <span className="text-sm font-bold text-[#86868b] uppercase tracking-[0.3em] mb-4 block">
          Phase {step.id}
        </span>
        <h4 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-6">
          {step.title}
        </h4>
        <p className="text-lg text-[#86868b] font-medium leading-relaxed">
          {step.desc}
        </p>
      </div>

      {/* Center Icon Node */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          whileInView={{ scale: [0, 1.2, 1], backgroundColor: ["#f5f5f7", "#0071e3", "#ffffff"] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-12 h-12 rounded-full bg-white border-2 border-[#0071e3] flex items-center justify-center shadow-xl shadow-blue-500/10"
        >
          <div className="text-[#0071e3] scale-75">
            {step.icon}
          </div>
        </motion.div>
      </div>

      {/* Visual Side (Decorative Squircle) */}
      <div className="hidden md:block w-[45%]">
         <motion.div 
           whileInView={{ opacity: [0, 1], x: isEven ? [50, 0] : [-50, 0] }}
           viewport={{ once: true }}
           className="aspect-video bg-white rounded-[40px] border border-black/[0.03] shadow-[0_20px_40px_rgba(0,0,0,0.02)] overflow-hidden flex items-center justify-center relative group"
         >
           <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3]/[0.02] to-transparent" />
           <div className="text-[#86868b]/20 group-hover:text-[#0071e3]/10 transition-colors duration-700">
             {/* Large background decorative icon */}
             {React.cloneElement(step.icon, { size: 120, strokeWidth: 0.5 })}
           </div>
           
           {/* Minimal "Internal Specs" text decoration */}
           <div className="absolute bottom-6 right-8 font-mono text-[10px] text-[#86868b]/40 uppercase tracking-widest">
             Step_{step.id} // System_Ready
           </div>
         </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessSection;