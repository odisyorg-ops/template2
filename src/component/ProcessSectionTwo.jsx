import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market positioning to create a data-driven roadmap.",
    icon: <Search className="w-6 h-6" />
  },
  {
    number: "02",
    title: "High-Fidelity Design",
    description: "Using the latest UI/UX principles, we craft bespoke interfaces that prioritize both aesthetic beauty and conversion.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    number: "03",
    title: "Development & QA",
    description: "Our engineers build with modern stacks (React, Next.js) ensuring lightning-fast load times and flawless performance.",
    icon: <Code className="w-6 h-6" />
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "We deploy with precision and provide ongoing support to ensure your product continues to lead the market.",
    icon: <Rocket className="w-6 h-6" />
  }
];

const ProcessSectionTwo = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0A0A0A] px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-[#D1FF00] mb-4">
            The Methodology
          </h2>
          <p className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter">
            How we bring <br /> <span className="text-zinc-300 dark:text-zinc-700">vision to life.</span>
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-100 dark:border-zinc-800 ml-4 md:ml-12 pl-8 md:pl-20 space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[89px] top-0 w-4 h-4 rounded-full bg-white dark:bg-[#0A0A0A] border-4 border-[#D1FF00] z-10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-black dark:text-white group-hover:bg-[#D1FF00] transition-colors">
                    {step.icon}
                  </div>
                </div>

                <div className="max-w-xl">
                  <span className="font-mono text-[#D1FF00] font-bold text-lg mb-2 block">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[-35px] md:left-[-83px] top-0 w-[2px] bg-gradient-to-b from-[#D1FF00] to-transparent origin-top"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionTwo;