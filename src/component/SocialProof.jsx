import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const clients = [
  "AETHER", "NEXUS", "VORTEX", "LUMINA", "ORION", "QUANTUM", "VELOCITY", "SYNTH"
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#080808] overflow-hidden">
      {/* Kinetic Logo Marquee */}
      <div className="flex flex-col gap-8 mb-32">
        <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600">
          Trusted by Industry Leaders
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* Duplicate list for seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <span 
                key={i} 
                className="text-4xl md:text-6xl font-black mx-12 text-zinc-200 dark:text-zinc-800 hover:text-[#D1FF00] dark:hover:text-[#D1FF00] transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Large-Scale Testimonial */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Quote className="absolute -top-12 -left-8 w-24 h-24 text-[#D1FF00] opacity-20" />
          
          <blockquote className="relative z-10">
            <p className="text-3xl md:text-5xl font-medium leading-tight text-black dark:text-white tracking-tight">
              "Their ability to translate complex technical requirements into <span className="italic border-b-4 border-[#D1FF00]">seamless user experiences</span> is unparalleled. They didn't just build a site; they defined our digital identity."
            </p>
            
            <footer className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden">
                {/* Placeholder for User Avatar */}
                <div className="w-full h-full bg-gradient-to-tr from-[#D1FF00] to-zinc-400" />
              </div>
              <div>
                <cite className="not-italic font-bold text-lg dark:text-white">Alex Rivoli</cite>
                <p className="text-sm text-gray-500 dark:text-zinc-500 uppercase tracking-widest font-semibold">
                  Founder, Nexus OS
                </p>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>

      {/* Tailwind Animation Extension Required in Config */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
    </section>
  );
};

export default SocialProof;