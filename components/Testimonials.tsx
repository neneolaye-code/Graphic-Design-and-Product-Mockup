import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "The product mockups completely transformed our pitch deck. We secured funding two weeks later. Best investment we made.",
    author: "Sarah Jenkins",
    role: "Founder, EcoWare"
  },
  {
    text: "Incredible attention to detail. The branding kit delivered was exactly what we envisioned but couldn't articulate. Highly recommended.",
    author: "Mark Davis",
    role: "Marketing Director, TechSaaS"
  },
  {
    text: "Fast, professional, and minimal back-and-forth. The social media templates have saved us hours of work every week.",
    author: "Elena Rodriguez",
    role: "Content Creator"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-primary font-medium italic mb-6 flex-grow">"{review.text}"</p>
              <div>
                <p className="font-bold text-primary">{review.author}</p>
                <p className="text-xs text-secondary uppercase tracking-wide">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;