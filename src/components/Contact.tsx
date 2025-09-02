import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-32 bg-gradient-to-br from-black via-gray-900/30 to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold">Get Started</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Scale with <span className="text-gradient-primary">AI</span>?
            </h2>
            
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              Join hundreds of businesses already using AI automation to 
              generate more leads, engage customers better, and scale faster.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {[
                'Free consultation and strategy session',
                'Custom AI solution designed for your business',
                'Implementation support and training',
                'Ongoing optimization and scaling'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1 rounded-full">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="glass-effect border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 animate-scale-in">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold">Get Started Today</h3>
              </div>
              <p className="text-gray-300 font-light">
                Book a 30-minute demo call to see how AI automation can transform your business operations.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="glass-effect border border-white/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 animate-scale-in">
            <h3 className="text-3xl font-black mb-8 text-center text-gradient-primary">
              Book Your Demo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full glass-effect border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-500 hover:bg-white/10 font-medium"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full glass-effect border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-500 hover:bg-white/10 font-medium"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full glass-effect border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-500 hover:bg-white/10 font-medium"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your automation needs..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full glass-effect border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-500 resize-none hover:bg-white/10 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Schedule Demo Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>

            <p className="text-center text-gray-300 mt-6 font-light">
              We'll respond within 2 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;