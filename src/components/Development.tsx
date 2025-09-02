import React from 'react';
import { Monitor, Smartphone, Database, Palette, Sparkles, ArrowRight } from 'lucide-react';

const Development = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Custom websites and web apps built with modern frameworks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Dashboards',
      description: 'Real-time analytics and business intelligence platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900/30 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Development Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Custom <span className="text-gradient-primary">Development</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Beyond automation—we build the digital products and tools your business needs to thrive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Capabilities */}
          <div className="space-y-8 animate-fade-in">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group flex items-start gap-6 p-6 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 border border-white/10 hover:border-blue-400/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${capability.color} p-3 rounded-xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Integration Showcase */}
          <div className="relative animate-scale-in">
            <div className="glass-effect border border-white/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-3xl font-black mb-8 text-center text-gradient-primary">
                Multimedia Integration
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {['Voice', 'Video', 'Chat', 'Social', 'Email', 'SMS', 'CRM', 'API'].map((channel, index) => (
                  <div
                    key={index}
                    className="glass-effect border border-white/20 rounded-xl p-4 text-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-bold">{channel}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="font-bold">Unified AI Platform</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;