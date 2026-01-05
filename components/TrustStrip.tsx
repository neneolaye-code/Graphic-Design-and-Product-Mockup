import React from 'react';

const TrustStrip: React.FC = () => {
  // Using simple text placeholders for logos to ensure clean look, or use SVGs if available. 
  // For this output, we simulate logos with typography to maintain the "No image assets needed" constraint effectively.
  const brands = [
    "NexusCore", "Velvet & Vine", "AlphaStream", "Lumina", "BrightPath"
  ];

  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted by innovative brands and creators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
           {brands.map((brand, idx) => (
             <span key={idx} className="text-xl md:text-2xl font-bold font-serif text-gray-400 hover:text-gray-600 transition-colors cursor-default select-none">
               {brand}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;