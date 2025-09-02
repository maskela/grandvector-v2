import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      company: 'TechFlow',
      content: 'Grand Vector transformed our lead generation. We went from 50 qualified leads per month to 500+ with their AI email marketing system.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, ScaleUp Ventures',
      company: 'ScaleUp',
      content: 'The AI voice callers handle our customer inquiries better than our human team did. 24/7 availability with perfect consistency.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Watson',
      role: 'Operations Director, GrowthCorp',
      company: 'GrowthCorp',
      content: 'Their custom dashboard gives us real-time insights we never had before. The automation saves us 40+ hours per week.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Client <span className="text-gradient-primary">Success</span>
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            Real results from businesses that chose to automate and scale
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glass-effect hover:bg-white/10 rounded-3xl p-8 transition-all duration-700 hover:transform hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in border border-white/10 hover:border-blue-400/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Stars */}
              <div className="relative flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Quote */}
              <p className="relative text-gray-300 mb-8 leading-relaxed font-light text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-blue-400/50 transition-all duration-500 group-hover:scale-110"
                />
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-400 font-medium">{testimonial.role}</div>
                  <div className="text-blue-400 font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;