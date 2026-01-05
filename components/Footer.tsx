import React from 'react';
import { Instagram, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-tight mb-2">MockupStudio</h3>
          <p className="text-gray-400 text-sm">Helping brands look their best since 2019.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white text-gray-400 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white text-gray-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white text-gray-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white text-gray-400 transition-colors">
            <Dribbble size={20} />
          </a>
        </div>

        <div className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} MockupStudio. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;