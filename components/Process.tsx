import React from 'react';

const steps = [
  {
    id: "01",
    title: "Request",
    desc: "Fill out the simple brief form. Tell me what you need and share your inspiration."
  },
  {
    id: "02",
    title: "Concept",
    desc: "I'll create initial concepts or mockups and send them for your review."
  },
  {
    id: "03",
    title: "Refine",
    desc: "We iterate based on your feedback until the design is pixel-perfect."
  },
  {
    id: "04",
    title: "Deliver",
    desc: "Receive final high-res files (PNG, JPG, PDF) and source files."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple, streamlined process</h2>
          <p className="text-lg text-secondary">From idea to final file in four easy steps.</p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 text-accent font-bold text-3xl flex items-center justify-center mb-6 shadow-sm group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-secondary text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;