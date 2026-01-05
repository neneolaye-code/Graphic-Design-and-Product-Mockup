import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Lumina Skin",
    category: "Packaging & Branding",
    image: "https://picsum.photos/seed/pkg1/800/800",
    desc: "Luxury skincare packaging design."
  },
  {
    title: "TechFlow App",
    category: "Product Mockup",
    image: "https://picsum.photos/seed/tech1/800/600",
    desc: "SaaS dashboard isometric mockup."
  },
  {
    title: "Urban Coffee",
    category: "Identity",
    image: "https://picsum.photos/seed/coffee/600/800",
    desc: "Full brand identity for a coffee chain."
  },
  {
    title: "Neon Energy",
    category: "Social Media",
    image: "https://picsum.photos/seed/can/800/800",
    desc: "High-energy ad campaign assets."
  },
  {
    title: "FinDeck",
    category: "Marketing",
    image: "https://picsum.photos/seed/deck/800/600",
    desc: "Investor pitch deck design."
  },
  {
    title: "EcoBottle",
    category: "Product Mockup",
    image: "https://picsum.photos/seed/bottle/600/800",
    desc: "Sustainable product 3D rendering."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Selected Work</h2>
            <p className="text-lg text-secondary">
              A collection of branding, mockups, and marketing designs created for clients worldwide.
            </p>
          </div>
          <a href="#contact" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Start your project <ExternalLink size={18} />
          </a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a 
              href="#contact" 
              className="inline-block px-10 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              See Full Portfolio
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;