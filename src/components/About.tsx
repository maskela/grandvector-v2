import React from 'react';
import { Brain, Rocket, Zap, Target, Sparkles } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Intelligence',
      description: 'Advanced AI agents that learn and adapt to your business needs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Automate repetitive tasks and focus on what matters most',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Grow infinitely without increasing operational overhead',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Data-driven decisions with pinpoint accuracy and insights',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Why <span className="text-gradient-primary">Grand Vector</span>?
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We combine cutting-edge AI automation with custom development to create 
            limitless scalability for forward-thinking businesses.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group glass-effect hover:bg-white/10 rounded-3xl p-8 transition-all duration-700 hover:transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in border border-white/10 hover:border-blue-400/50`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-r ${pillar.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center animate-fade-in">
          <div className="glass-effect border border-white/20 rounded-3xl p-12 md:p-16 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient-primary">
              Our Mission
            </h3>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              To empower businesses with AI-driven automation that doesn't just improve efficiency—
              it fundamentally transforms how companies engage customers, generate leads, and scale operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;