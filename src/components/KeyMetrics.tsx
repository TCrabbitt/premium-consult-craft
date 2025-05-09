import React from 'react';
import { TrendingUp, ChartBar, BarChart4, Database, DollarSign, Award, Star, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ChartContainer,
  ChartTooltipContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { cn } from "@/lib/utils";

const metricsData = [
  { name: '2021', value: 55 },
  { name: '2022', value: 72 },
  { name: '2023', value: 89 },
  { name: '2024', value: 95 }
];

const KeyMetrics = () => {
  const chartConfig = {
    roi: { label: "ROI", color: "#1A9971" },
    savings: { label: "Savings", color: "#2E7BC4" },
    efficiency: { label: "Efficiency", color: "#5362D5" },
    satisfaction: { label: "Satisfaction", color: "#924FB5" }
  };

  const impactMetrics = [
    {
      title: "Cost Reduction",
      value: "42%",
      description: "Average reduction in operational expenses",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-hallmark-green to-hallmark-light-green"
    },
    {
      title: "Time Savings",
      value: "68%",
      description: "Increase in process efficiency",
      icon: <BarChart4 className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue"
    },
    {
      title: "Compliance",
      value: "99.8%",
      description: "Accuracy in regulatory compliance",
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue"
    },
    {
      title: "Client Success",
      value: "4.8",
      description: "Average client satisfaction (out of 5)",
      icon: <Star className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-hallmark-dark-green to-hallmark-green"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-hallmark-light-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-hallmark-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-hallmark-light-blue/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-hallmark-light-blue/30 to-hallmark-light-green/30 text-hallmark-dark-blue font-medium mb-4">
            <TrendingUp size={18} className="text-hallmark-blue" />
            <span>Key Performance Indicators</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hallmark-dark to-hallmark-dark-blue bg-clip-text text-transparent">
            Key Metrics We Impact
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto">
            Our solutions create measurable business impact that drives sustainable growth and operational excellence.
          </p>
        </div>
        
        {/* Enhanced metric cards with improved visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-hallmark-green to-hallmark-light-green"></div>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${metric.gradient.replace('bg-', '')} rounded-full blur-lg transform scale-75 group-hover:scale-90 transition-all opacity-20`}></div>
                    <div className={`relative h-24 w-24 rounded-full ${metric.gradient} flex items-center justify-center transition-transform group-hover:scale-105`}>
                      {React.cloneElement(metric.icon as React.ReactElement, { size: 32 })}
                    </div>
                  </div>
                  <div className="mt-2 mb-3">
                    <span className="text-4xl font-display font-bold text-hallmark-dark">{metric.value}</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3 text-hallmark-dark">{metric.title}</h3>
                  <p className="text-hallmark-neutral-gray">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Client satisfaction and business impact section - vertical layout as requested */}
        <div className="mt-16 grid grid-cols-1 gap-8">
          <div className="bg-gradient-to-r from-hallmark-off-white to-white p-8 rounded-xl shadow-premium border border-gray-100/50">
            <h3 className="text-2xl font-display font-semibold mb-6 text-hallmark-dark">Why clients choose us:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-hallmark-green" />,
                  title: "Industry Expertise",
                  description: "Over 15 years of specialized knowledge in HR and payroll compliance across 32 countries."
                },
                {
                  icon: <Star className="h-8 w-8 text-hallmark-blue" />,
                  title: "Proven Results",
                  description: "94% client satisfaction rate with measurable improvements in efficiency and cost savings."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-hallmark-dark-blue" />,
                  title: "Continuous Support",
                  description: "Dedicated service teams available to ensure your systems operate at peak performance."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100/50">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-hallmark-dark">{item.title}</h4>
                    <p className="text-sm text-hallmark-neutral-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-premium border border-gray-100/50">
            <h3 className="text-2xl font-display font-semibold mb-6 text-hallmark-dark">Why Choose Hallmark</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                {[
                  {
                    title: "Customized Solutions",
                    description: "Tailored to your specific business needs and industry requirements.",
                    icon: <div className="p-3 rounded-full bg-hallmark-light-green/20 text-hallmark-green">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  },
                  {
                    title: "Advanced Technology",
                    description: "Cutting-edge platforms that evolve with your business.",
                    icon: <div className="p-3 rounded-full bg-hallmark-light-blue/20 text-hallmark-blue">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    {item.icon}
                    <div>
                      <h4 className="font-medium text-hallmark-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-hallmark-neutral-gray">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col space-y-6">
                {[
                  {
                    title: "Dedicated Support",
                    description: "Personalized assistance throughout implementation and beyond.",
                    icon: <div className="p-3 rounded-full bg-hallmark-blue/20 text-hallmark-dark-blue">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                  },
                  {
                    title: "Proven ROI",
                    description: "Tangible business results with measurable impact on your bottom line.",
                    icon: <div className="p-3 rounded-full bg-hallmark-green/20 text-hallmark-dark-green">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    {item.icon}
                    <div>
                      <h4 className="font-medium text-hallmark-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-hallmark-neutral-gray">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Problem & Solution Showcase - simplified to one problem/solution */}
          <div className="bg-gradient-to-r from-hallmark-off-white to-white p-8 rounded-xl shadow-premium border border-gray-100/50">
            <h3 className="text-2xl font-display font-semibold mb-6 text-hallmark-dark text-center">Problem & Solution Showcase</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg shadow-md border border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16">
                  <div className="absolute transform rotate-45 bg-red-500 text-xs text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    CHALLENGE
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-hallmark-dark mt-6">Complex Global Compliance</h4>
                <p className="text-hallmark-neutral-gray mb-4">
                  A multinational company struggled with managing payroll across 12 countries, 
                  facing compliance issues, inconsistent reporting, and high administrative costs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm text-hallmark-neutral-gray">58% of time spent on manual compliance checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm text-hallmark-neutral-gray">Multiple systems leading to data inconsistencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm text-hallmark-neutral-gray">$145,000 in annual compliance penalties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16">
                  <div className="absolute transform rotate-45 bg-green-500 text-xs text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    SOLUTION
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-hallmark-dark mt-6">Integrated Global Platform</h4>
                <p className="text-hallmark-neutral-gray mb-4">
                  Our unified global payroll solution with built-in compliance monitoring transformed 
                  their operations across all regions with centralized management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-sm text-hallmark-neutral-gray">92% reduction in compliance-related tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-sm text-hallmark-neutral-gray">Single source of truth for all payroll data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-sm text-hallmark-neutral-gray">$320,000 annual savings in operational costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
