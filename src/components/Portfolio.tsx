import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const integrations = [
    { name: 'Salesforce', category: 'CRM', color: 'from-blue-500 to-cyan-500' },
    { name: 'HubSpot', category: 'Marketing', color: 'from-orange-500 to-red-500' },
    { name: 'Slack', category: 'Communication', color: 'from-purple-500 to-pink-500' },
    { name: 'Discord', category: 'Community', color: 'from-indigo-500 to-purple-500' },
    { name: 'WhatsApp', category: 'Messaging', color: 'from-green-500 to-emerald-500' },
    { name: 'Zoom', category: 'Video', color: 'from-blue-500 to-indigo-500' },
    { name: 'Stripe', category: 'Payments', color: 'from-purple-500 to-blue-500' },
    { name: 'Shopify', category: 'E-commerce', color: 'from-green-500 to-teal-500' },
    { name: 'WordPress', category: 'CMS', color: 'from-blue-500 to-gray-600' },
    { name: 'Zapier', category: 'Automation', color: 'from-orange-500 to-yellow-500' },
    { name: 'Monday.com', category: 'Project Management', color: 'from-pink-500 to-red-500' },
    { name: 'Mailchimp', category: 'Email Marketing', color: 'from-yellow-500 to-orange-500' }
  ];

  const categories = ['All', 'CRM', 'Marketing', 'Communication', 'E-commerce'];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900/30 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Integrations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Platform <span className="text-gradient-primary">Integrations</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-10 font-light">
            Connect with any tool in your tech stack. Our AI agents work seamlessly across all platforms.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'glass-effect border border-white/20 text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group glass-effect border border-white/20 hover:border-blue-500/50 rounded-2xl p-6 text-center transition-all duration-500 hover:transform hover:scale-110 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer animate-scale-in hover:bg-white/10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${integration.color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <span className="text-white font-black">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <div className="font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {integration.name}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {integration.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <div className="glass-effect border border-white/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-3xl font-black mb-6 text-gradient-primary">
              Don't see your platform?
            </h3>
            <p className="text-xl text-gray-300 mb-8 font-light">
              We integrate with any platform through APIs, webhooks, or custom connections.
            </p>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 flex items-center gap-3 mx-auto">
              Request Custom Integration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;