import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight, Minus } from 'lucide-react';

const SeniorPortfolio = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#121212] selection:bg-[#BEF264] selection:text-black font-sans antialiased">
      
      {/* 1. ARCHITECTURAL HEADER */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-start z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-lg font-bold tracking-tighter leading-none">ODISY</h1>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Sylhet / 24.89° N</span>
        </div>
        <div className="pointer-events-auto text-right">
          <div className="flex items-center gap-2 justify-end mb-1">
            <span className="w-2 h-2 rounded-full bg-[#BEF264] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Available for Q1 2026</span>
          </div>
          <a href="mailto:hello@odisy.agency" className="text-xs hover:line-through transition-all">Connect</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        
        {/* 2. VALUE PROPOSITION (Senior Messaging) */}
        <section className="mb-48 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs font-mono text-neutral-400 mb-8 uppercase tracking-[0.3em]"
          >
            Senior Full-Stack Engineer & Founder
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tight leading-[0.95] text-neutral-800"
          >
            Developing <span className="italic font-serif">robust</span> systems <br /> 
            and <span className="text-neutral-300">refined</span> interfaces.
          </motion.h2>
        </section>

        {/* 3. THE WORK LOG (Expanding Senior Index) */}
        <section className="mb-48 border-t border-neutral-100">
          <div className="py-4 text-[10px] font-mono text-neutral-300 uppercase tracking-widest flex justify-between">
            <span>Selected Projects</span>
            <span>Technical Documentation</span>
          </div>
          
          <div className="flex flex-col">
            <WorkRow 
              id="01" 
              title="ODISY Agency" 
              type="E-commerce Architecture" 
              tech="Node.js / Stripe / MongoDB"
              desc="Full-scale commerce platform for digital assets. Integrated complex webhook logic for instant PDF delivery and custom billing systems."
            />
            <WorkRow 
              id="02" 
              title="Leading University" 
              type="Education Platform" 
              tech="React / PostgreSQL / Framer"
              desc="Academic resource hub serving thousands of students. Focused on high-concurrency performance and intuitive content management."
            />
            <WorkRow 
              id="03" 
              title="AIGILS Web" 
              type="Interface Design" 
              tech="Next.js / Tailwind CSS"
              desc="A strictly minimal frontend deployment for a modern consulting firm. Zero-visual-clutter approach with micro-interaction focus."
            />
            <WorkRow 
              id="04" 
              title="Financial Ledger" 
              type="Mobile Application" 
              tech="Flutter / Dart / Firebase"
              desc="Engineered a secure, offline-first mobile ledger. Implemented custom charting libraries and real-time expense tracking."
            />
          </div>
        </section>

        {/* 4. CORE COMPETENCIES (Categorized) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-100 pt-12">
            <SkillCategory title="Backend & Infra" skills={["Distributed Systems", "API Design", "Database Modeling", "Python Automation"]} />
            <SkillCategory title="Frontend Engineering" skills={["React Ecosystem", "Performance Optimization", "Interaction Design", "TypeScript"]} />
            <SkillCategory title="Mobile & Tooling" skills={["Flutter Development", "CI/CD Pipelines", "System Architecture", "Payment Integrations"]} />
        </section>

      </main>

      <footer className="p-10 border-t border-neutral-50 flex flex-col items-center">
         <p className="text-[10px] font-mono text-neutral-300 uppercase tracking-[0.5em] mb-4">Fin — 2026</p>
         <div className="h-20 w-[1px] bg-neutral-100" />
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const WorkRow = ({ id, title, type, tech, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-neutral-100 group transition-all"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="py-10 flex items-baseline justify-between cursor-pointer">
        <div className="flex items-baseline gap-8">
          <span className="text-xs font-mono text-neutral-300">{id}</span>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:pl-4 transition-all duration-500">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-12">
            <span className="hidden md:block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{type}</span>
            <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                {isOpen ? <ArrowUpRight size={16} /> : <Plus size={16} />}
            </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-16 flex flex-col md:flex-row gap-12 md:items-end">
              <div className="max-w-md">
                <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                  {desc}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-widest">Technology Stack</span>
                <span className="text-xs font-bold text-neutral-800 tracking-tight">{tech}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">{title}</h4>
    <ul className="space-y-2">
      {skills.map(skill => (
        <li key={skill} className="text-sm font-medium hover:text-[#BEF264] hover:bg-black w-fit px-1 transition-all cursor-default">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SeniorPortfolio;