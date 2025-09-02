import React from 'react';
import { TrendingUp, Target, Mail, BarChart3, Sparkles, ArrowRight } from 'lucide-react';

const LeadGeneration = () => {
  const stats = [
    { label: 'Lead Quality', value: '95%', icon: Target, color: 'from-green-500 to-emerald-500' },
    { label: 'Open Rates', value: '78%', icon: Mail, color: 'from-blue-500 to-cyan-500' },
    { label: 'Conversion Rate', value: '34%', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { label: 'ROI Increase', value: '500%', icon: BarChart3, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold">Infinite Lead Generation</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Generate <span className="text-gradient-primary">Unlimited</span>
              <br />Qualified Leads
            </h2>
            
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              Our AI-powered email marketing system identifies, engages, and converts 
              prospects at scale—delivering an endless stream of high-quality leads 
              while you focus on closing deals.
            </p>

            <div className="space-y-6 mb-10">
              {[
                'Smart prospect identification across industries',
                'Personalized outreach at infinite scale',
                'Real-time lead scoring and qualification',
                'Automated follow-up sequences that convert'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Start Generating Leads
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group glass-effect hover:bg-white/10 rounded-3xl p-8 text-center transition-all duration-700 hover:transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in border border-white/10 hover:border-blue-400/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className={`relative bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="relative text-4xl font-black text-gradient-primary mb-3 animate-glow">
                  {stat.value}
                </div>
                <div className="relative text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;