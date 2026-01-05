import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Design that solves problems, not just fills space.
            </h2>
            <p className="text-lg text-secondary mb-8">
              You need a designer who understands business, not just Photoshop. I focus on creating assets that are usable, scalable, and designed to perform.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Conversion-Focused",
                  desc: "Every pixel is placed with a purpose: to guide the eye and drive action."
                },
                {
                  title: "Fast Turnaround",
                  desc: "Initial concepts in 48 hours. No ghosting, no endless delays."
                },
                {
                  title: "Full Ownership",
                  desc: "You get all source files (AI, PSD, FIG) upon completion. It's your asset."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center justify-center aspect-square hover:shadow-lg transition-shadow">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-lg">On-Time</h4>
                <p className="text-xs text-secondary mt-2">Never missing deadlines</p>
             </div>
             <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex flex-col items-center text-center justify-center aspect-square hover:shadow-lg transition-shadow">
                <Zap className="w-10 h-10 text-accent mb-4" />
                <h4 className="font-bold text-lg">High Impact</h4>
                <p className="text-xs text-secondary mt-2">Designs that pop</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center justify-center aspect-square hover:shadow-lg transition-shadow">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-lg">Reliable</h4>
                <p className="text-xs text-secondary mt-2">Consistent quality</p>
             </div>
             <div className="bg-primary p-6 rounded-2xl border border-primary flex flex-col items-center text-center justify-center aspect-square shadow-xl">
                <span className="text-4xl font-bold text-white mb-2">5+</span>
                <h4 className="font-bold text-orange-200 text-sm">Years Exp.</h4>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;