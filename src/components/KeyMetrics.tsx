
import React from 'react';
import { TrendingUp, ChartBar, Database, DollarSign, Award, Star, ShieldCheck } from "lucide-react";

const impactMetrics = [
  {
    title: "Cost Reduction",
    value: "42%",
    description: "Average reduction in expenses",
    icon: <DollarSign className="h-5 w-5 text-hallmark-green" strokeWidth={1.5} />,
  },
  {
    title: "Time Savings",
    value: "68%",
    description: "Process efficiency improvement",
    icon: <ChartBar className="h-5 w-5 text-hallmark-blue" strokeWidth={1.5} />,
  },
  {
    title: "Compliance",
    value: "99.8%",
    description: "Regulatory compliance accuracy",
    icon: <ShieldCheck className="h-5 w-5 text-hallmark-dark-blue" strokeWidth={1.5} />,
  },
  {
    title: "Client Success",
    value: "4.8",
    description: "Average satisfaction score",
    icon: <Star className="h-5 w-5 text-hallmark-dark-green" strokeWidth={1.5} />,
  }
];

const KeyMetrics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hallmark-blue text-hallmark-blue text-sm font-medium mb-3">
            <TrendingUp size={14} strokeWidth={1.5} />
            <span>Key Performance</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mb-3">Metrics We Impact</h2>
          <p className="text-hallmark-neutral-gray text-sm">
            Measurable business impact that drives sustainable growth
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="group">
              <div className="flex flex-col items-center text-center bg-hallmark-off-white/30 px-6 py-8 rounded-lg hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 group-hover:border-hallmark-green/50 transition-colors">
                  {metric.icon}
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-display font-bold text-hallmark-dark">{metric.value}</span>
                </div>
                <h3 className="font-medium text-sm mb-1 text-hallmark-dark">{metric.title}</h3>
                <p className="text-hallmark-neutral-gray text-xs">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-3">
              <div className="bg-hallmark-dark-blue text-white p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold mb-6">Why Clients Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Award className="h-5 w-5" strokeWidth={1.5} />,
                      title: "Industry Expertise",
                      description: "15+ years specialized knowledge across 32 countries"
                    },
                    {
                      icon: <Star className="h-5 w-5" strokeWidth={1.5} />,
                      title: "Proven Results",
                      description: "94% client satisfaction with measurable ROI"
                    },
                    {
                      icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />,
                      title: "Continuous Support",
                      description: "Dedicated teams ensuring peak performance"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <div className="p-2 rounded-full bg-white/10 mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-base mb-2">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
