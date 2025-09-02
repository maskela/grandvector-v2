import React from 'react';
import { Sparkles } from 'lucide-react';

const TrustedBy = () => {
  const partners = [
    'Salesforce', 'HubSpot', 'Slack', 'Discord', 'WhatsApp', 'Zoom'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900/30 via-black to-gray-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <p className="text-gray-400 uppercase tracking-wider font-semibold">
              Trusted by industry leaders
            </p>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center animate-scale-in">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-500 hover:text-blue-400 transition-all duration-500 font-bold text-xl cursor-pointer hover:scale-110 hover:drop-shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;