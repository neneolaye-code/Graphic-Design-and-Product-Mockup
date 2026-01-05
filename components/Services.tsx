import React from 'react';
import { PenTool, Box, Monitor, LayoutTemplate } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-accent" />,
    title: "Brand Identity",
    description: "Complete visual identity systems including logos, typography, and color palettes that define your business.",
    target: "New startups & Rebrands"
  },
  {
    icon: <Box className="w-8 h-8 text-accent" />,
    title: "Product Mockups",
    description: "Photorealistic 3D mockups for packaging, apparel, and digital products to boost marketing materials.",
    target: "E-commerce & SaaS"
  },
  {
    icon: <Monitor className="w-8 h-8 text-accent" />,
    title: "Social Media Assets",
    description: "High-converting templates, post designs, and ad creatives tailored for Instagram, LinkedIn, and X.",
    target: "Creators & Influencers"
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-accent" />,
    title: "Marketing Materials",
    description: "Brochures, flyers, pitch decks, and one-pagers designed to communicate value and close deals.",
    target: "Sales Teams & B2B"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Expertise tailored to your growth</h2>
          <p className="text-lg text-secondary">
            I don't just "make things look pretty." I design assets that communicate value, build authority, and help you sell more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-100 rounded-2xl bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group"
            >
              <div className="mb-6 bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-secondary mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="text-xs font-semibold text-accent uppercase tracking-wide pt-4 border-t border-gray-100">
                Best for: {service.target}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;