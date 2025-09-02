import React from 'react';
import { Phone, Calendar, MessageCircle, Users, Mail, Code, Puzzle, Mic, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: 'AI Voice Callers',
      description: 'Intelligent voice agents that handle customer calls with human-like conversation',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0s'
    },
    {
      icon: Calendar,
      title: 'AI Appointment Setters',
      description: 'Automated scheduling that converts prospects into booked meetings seamlessly',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0.1s'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support',
      description: '24/7 intelligent support that resolves issues faster than human agents',
      gradient: 'from-green-500 to-emerald-500',
      delay: '0.2s'
    },
    {
      icon: Users,
      title: 'Lead Capture & Process Automation',
      description: 'Smart systems that capture, qualify, and nurture leads automatically',
      gradient: 'from-orange-500 to-red-500',
      delay: '0.3s'
    },
    {
      icon: Mail,
      title: 'Infinite Lead Generation',
      description: 'AI-powered email marketing that generates unlimited qualified prospects',
      gradient: 'from-indigo-500 to-purple-500',
      delay: '0.4s'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke websites, apps, and dashboards tailored to your workflow',
      gradient: 'from-teal-500 to-blue-500',
      delay: '0.5s'
    },
    {
      icon: Puzzle,
      title: 'Platform Integrations',
      description: 'Seamless connections with any CRM, tool, or multimedia channel',
      gradient: 'from-yellow-500 to-orange-500',
      delay: '0.6s'
    },
    {
      icon: Mic,
      title: 'Multimedia Channel AI',
      description: 'Voice, video, chat, and social media automation in one platform',
      gradient: 'from-pink-500 to-rose-500',
      delay: '0.7s'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900/30 to-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            AI-Powered <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive automation services that transform how you engage customers and scale operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect hover:bg-white/10 rounded-3xl p-8 transition-all duration-700 hover:transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in border border-white/10 hover:border-blue-400/50 relative overflow-hidden"
              style={{ animationDelay: service.delay }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Icon */}
              <div className={`relative bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-gray-300 leading-relaxed font-light mb-4">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="relative opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-blue-400 font-semibold flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;