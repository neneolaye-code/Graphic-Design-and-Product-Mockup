import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Branding',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xykzvdgr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', type: 'Branding', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        if (data.errors) {
            // Formspree returns errors in an array
            setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
            setError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Ready to elevate your brand?</h2>
          <p className="text-xl text-secondary">
            Fill out the form below to get a quote or start your project.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200 border border-gray-100 relative overflow-hidden">
          {/* Decorative accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-accent"></div>

          {isSuccess ? (
             <div className="text-center py-16 animate-fade-in">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Send size={40} />
               </div>
               <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
               <p className="text-secondary">I'll get back to you within 24 hours.</p>
               <button 
                 onClick={() => setIsSuccess(false)}
                 className="mt-6 text-accent font-semibold hover:text-accentHover transition-colors"
               >
                 Send another message
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-lg bg-red-50 text-red-600 border border-red-100 flex items-center gap-2">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">{error}</span>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-semibold text-primary">Project Type</label>
                <select 
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white"
                >
                  <option>Branding Identity</option>
                  <option>Product Mockup</option>
                  <option>Social Media Assets</option>
                  <option>Packaging Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary">Project Details</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell me about your business and what you need designed..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 text-white font-bold text-lg rounded-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-orange-300 cursor-not-allowed' : 'bg-accent hover:bg-accentHover shadow-lg hover:shadow-orange-200'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
                {!isSubmitting && <Send size={20} />}
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                100% Secure. I respect your inbox and never spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;