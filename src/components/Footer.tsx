import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      'AI Voice Callers',
      'Appointment Setting',
      'Customer Support AI',
      'Lead Generation',
      'Custom Development'
    ],
    Company: [
      'About Us',
      'Case Studies',
      'Careers',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'API Reference',
      'Integration Guides',
      'Support Center',
      'Status Page'
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900/80 to-black border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Brand Section */}
          <div className="md:col-span-2 animate-fade-in">
            <div className="flex items-center mb-8">
              <img 
                src="/assets/logo_vector-v3.svg" 
                alt="Grand Vector Logo" 
                className="w-10 h-10 animate-glow"
              />
              <span className="ml-4 text-2xl font-black text-gradient-primary">
                Grand Vector
              </span>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg">
              Empowering businesses with AI automation that scales customer engagement, 
              generates infinite leads, and integrates seamlessly across all channels.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">hello@grandvector.ai</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${Object.keys(footerLinks).indexOf(category) * 0.1}s` }}>
              <h4 className="text-xl font-bold mb-6 text-white">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      {link}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <div className="text-gray-400 font-medium">
            © 2025 Grand Vector. All rights reserved.
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;