import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can AI automation be implemented?',
      answer: 'Most AI solutions can be deployed within 2-4 weeks. Simple voice callers and chatbots can be live in days, while complex multi-channel automations may take 4-6 weeks for full implementation.'
    },
    {
      question: 'What makes your lead generation "infinite"?',
      answer: 'Our AI system continuously identifies new prospects, personalizes outreach, and scales without human intervention. Unlike traditional methods limited by manual effort, our system can process thousands of leads simultaneously.'
    },
    {
      question: 'Can you integrate with our existing CRM and tools?',
      answer: 'Yes, we integrate with virtually any platform through APIs, webhooks, or custom connections. Our team has experience with 500+ different tools and platforms.'
    },
    {
      question: 'What kind of businesses benefit most from AI automation?',
      answer: 'Any business that relies on customer engagement, lead generation, or repetitive processes. This includes SaaS companies, e-commerce, professional services, real estate, healthcare, and financial services.'
    },
    {
      question: 'How do you ensure AI responses sound natural?',
      answer: 'We use advanced language models trained on your specific industry and brand voice. Each AI agent is customized with your terminology, tone, and business rules to ensure authentic interactions.'
    },
    {
      question: 'What ongoing support do you provide?',
      answer: 'We provide 24/7 monitoring, regular optimization, performance reports, and dedicated support. As your business grows, we continuously improve and scale your AI systems.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900/50 via-black to-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            Everything you need to know about AI automation and our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-white/10 transition-all duration-500 group"
              >
                <span className="text-xl font-bold pr-4 group-hover:text-blue-400 transition-colors duration-300">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-400 transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;