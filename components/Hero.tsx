import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-accent uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Accepting New Projects
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
            Design that builds <span className="text-accent">trust</span> and drives <span className="text-accent">sales</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed max-w-lg">
            Turn your ideas into conversion-ready visuals. I create professional branding, packaging, and high-quality product mockups for modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accentHover transition-all shadow-lg shadow-orange-100 hover:shadow-orange-200 transform hover:-translate-y-1"
            >
              Request a Design
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#work" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border border-gray-200 font-semibold rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              View My Work
            </a>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-secondary">
            <div className="flex -space-x-2">
               {[1, 2, 3, 4].map((i) => (
                 <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" />
               ))}
            </div>
            <p className="font-medium">Trusted by 100+ Founders</p>
          </div>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-[4/3] group">
            {/* Abstract Design UI Mockup */}
            <img 
              src="https://picsum.photos/seed/graphics1/800/600" 
              alt="Design Showcase" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating Elements for "Pop" */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <Layers size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Assets Delivered</p>
                  <p className="text-sm font-bold text-primary">High Resolution</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;