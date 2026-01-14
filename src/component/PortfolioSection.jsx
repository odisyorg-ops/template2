import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Aether Carbon",
    category: "Web3 / FinTech",
    year: "2025",
    size: "col-span-2 md:col-span-8", // Larger focus item
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Lumina Studio",
    category: "Art & Culture",
    year: "2026",
    size: "col-span-2 md:col-span-4",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Nexus OS",
    category: "SaaS / Design",
    year: "2026",
    size: "col-span-2 md:col-span-5",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Vortex VR",
    category: "Hardware / E-com",
    year: "2024",
    size: "col-span-2 md:col-span-7",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2670&auto=format&fit=crop"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${project.size} group relative cursor-none`}
    >
      <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[16/10] md:aspect-auto md:h-[600px]">
        {/* Project Image */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />

        {/* Custom "Hover" Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-[#D1FF00] text-black rounded-full p-6 scale-0 group-hover:scale-100 transition-transform duration-500 font-bold uppercase tracking-tighter flex items-center gap-2">
            View <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Project Meta */}
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold dark:text-white mb-1 uppercase italic tracking-tighter">{project.title}</h3>
          <p className="text-gray-500 dark:text-zinc-500 font-medium">{project.category}</p>
        </div>
        <span className="font-mono text-sm text-gray-400">{project.year}</span>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0A0A0A] px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter dark:text-white">
            Selected <br /> <span className="text-[#D1FF00]">Works</span>
          </h2>
          <p className="max-w-md text-gray-500 dark:text-zinc-400 text-lg">
            A curated selection of digital products we’ve built for brands that refuse to be ordinary.
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Bottom CTA for Work */}
        <div className="mt-24 text-center">
          <button className="text-xl font-bold border-b-2 border-[#D1FF00] pb-2 dark:text-white hover:text-[#D1FF00] transition-colors">
            View all 42 projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;