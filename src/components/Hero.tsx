import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/20 flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <img 
            src="/assets/logo_vector-v3.svg" 
            alt="Grand Vector Logo" 
            className="w-12 h-12 animate-glow"
          />
          <span className="ml-4 text-3xl font-bold text-gradient-primary">
            Grand Vector
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            Automate.
          </span>
          <br />
          <span className="text-gradient-primary text-shadow-glow">
            Integrate.
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Dominate.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in">
          Scale your business with intelligent AI agents that automate customer engagement, 
          generate infinite qualified leads, and integrate seamlessly across all channels.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
          <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Book a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button className="group glass-effect hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl flex items-center gap-3 border border-white/20 hover:border-blue-400/50">
            <Play className="w-5 h-5" />
            Explore Services
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-5xl font-black text-gradient-primary mb-3 animate-glow">500%</div>
            <div className="text-gray-300 font-medium">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-gradient-primary mb-3 animate-glow">24/7</div>
            <div className="text-gray-300 font-medium">AI Agent Availability</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-gradient-primary mb-3 animate-glow">∞</div>
            <div className="text-gray-300 font-medium">Lead Generation Capacity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;