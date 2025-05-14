import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, ChevronUp, FileSearch, Briefcase, Users, Award, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { toast } from "@/hooks/use-toast";

// FAQ item type definition
interface FAQItem {
  question: string;
  answer: string;
}

// Case study type definition
interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  results: string[];
  industry: string;
  image: string;
}

// Blog post type definition
interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const SolutionsPage = () => {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleMoreInfo = () => {
    toast({
      title: "More information",
      description: "Additional details will be available soon!",
    });
  };

  // Sample FAQ data
  const faqs: FAQItem[] = [
    {
      question: "How long does it typically take to implement your solutions?",
      answer: "Implementation timelines vary based on your organization's size and specific needs. Most clients see our core solutions fully operational within 4-8 weeks, with ongoing optimization afterward. We provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer tailored solutions for specific industries?",
      answer: "Absolutely. We understand that different industries face unique HR challenges. Our team includes specialists with industry-specific expertise across healthcare, technology, manufacturing, financial services, and retail sectors to ensure our solutions address your particular needs."
    },
    {
      question: "How do you measure the success of your consulting engagements?",
      answer: "We establish clear key performance indicators (KPIs) at the beginning of each engagement. These typically include metrics like time-to-hire reduction, employee retention improvement, cost savings, and hiring quality metrics. We provide regular reports tracking these KPIs against your business objectives."
    },
    {
      question: "What makes Hallmark different from other HR consulting firms?",
      answer: "Our approach combines deep HR expertise with data-driven insights and technology integration. We focus not just on solving immediate issues but on building sustainable HR capabilities within your organization. Additionally, our consultants have hands-on industry experience, ensuring practical solutions that work in the real world."
    },
    {
      question: "Can you integrate your solutions with our existing HR systems?",
      answer: "Yes, we design our solutions to integrate seamlessly with your current HR technology stack. Our team includes technical specialists who ensure smooth integration with your existing HRIS, ATS, and other platforms to minimize disruption and maximize value from your current investments."
    },
  ];

  // Sample case studies with added images
  const caseStudies: CaseStudy[] = [
    {
      title: "Global Tech Company Reduces Time-to-Hire by 40%",
      problem: "A rapidly growing tech company was struggling with lengthy hiring processes, losing top candidates to competitors due to slow decision-making.",
      solution: "We redesigned their recruitment workflow, implemented AI-powered candidate screening, and developed a streamlined interview process with clear decision criteria.",
      results: [
        "Reduced time-to-hire from 45 days to 27 days",
        "Increased quality-of-hire metrics by 25%",
        "Improved candidate experience ratings by 35%"
      ],
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Healthcare Provider Reduces Turnover by 30%",
      problem: "A national healthcare provider was experiencing high turnover rates among clinical staff, leading to increased costs and reduced quality of care.",
      solution: "We implemented a comprehensive retention strategy including career pathing, targeted development programs, and a redesigned onboarding experience.",
      results: [
        "Reduced annual turnover from 22% to 15.4%",
        "Saved $3.2M in annual replacement costs",
        "Increased employee satisfaction scores by 42%"
      ],
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Manufacturing Firm Improves Leadership Pipeline by 60%",
      problem: "A leading manufacturing company struggled with succession planning, facing potential leadership gaps due to upcoming retirements.",
      solution: "We developed a structured leadership assessment program and implemented tailored development plans for high-potential employees.",
      results: [
        "Built a leadership pipeline covering 85% of critical roles",
        "Reduced external executive hires by 40%",
        "Improved leadership effectiveness scores by 28%"
      ],
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  // Sample blog posts
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Work: Navigating Remote and Hybrid Models",
      excerpt: "Explore how leading organizations are adapting their HR strategies to support distributed teams while maintaining culture and productivity.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Workplace Trends",
      date: "April 15, 2023"
    },
    {
      title: "AI in HR: Beyond the Recruitment Funnel",
      excerpt: "Discover how artificial intelligence is transforming all areas of HR from performance management to employee engagement.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Technology",
      date: "March 22, 2023"
    },
    {
      title: "Building an Inclusive Hiring Process: A Step-by-Step Guide",
      excerpt: "Learn practical strategies to remove bias from your recruitment process and build more diverse teams.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      category: "Diversity & Inclusion",
      date: "February 8, 2023"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="HR Solutions Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">HR Solutions That Transform Business</h1>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  Strategic consulting services that optimize your workforce and drive measurable business outcomes.
                </p>
                <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
                  Explore Our Approach
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Data-driven HR Solutions" 
                  className="rounded-lg shadow-xl max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Challenges Modern HR Teams Face - IMPROVED DESIGN */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-hallmark-off-white/50 to-white/0 opacity-80"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-block bg-gradient-to-r from-hallmark-light-green/20 to-hallmark-dark-blue/20 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider text-hallmark-dark-blue mb-4">
                MODERN HR CHALLENGES
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-hallmark-dark">The Challenges Modern HR Teams Face</h2>
              <p className="text-hallmark-neutral-gray max-w-2xl mx-auto">
                Today's businesses navigate an increasingly complex workforce landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-hallmark-off-white to-white rounded-xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="mt-1 mr-4 w-8 h-8 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={18} className="text-hallmark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hallmark-dark mb-1">Finding and retaining top talent</h3>
                      <p className="text-hallmark-neutral-gray text-sm">Competing in increasingly tight and specialized labor markets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="mt-1 mr-4 w-8 h-8 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={18} className="text-hallmark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hallmark-dark mb-1">Managing compliance requirements</h3>
                      <p className="text-hallmark-neutral-gray text-sm">Navigating complex and constantly changing regulatory landscapes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="mt-1 mr-4 w-8 h-8 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={18} className="text-hallmark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hallmark-dark mb-1">Building inclusive cultures</h3>
                      <p className="text-hallmark-neutral-gray text-sm">Creating cohesion across diverse and distributed teams</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="mt-1 mr-4 w-8 h-8 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={18} className="text-hallmark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hallmark-dark mb-1">Developing leadership capabilities</h3>
                      <p className="text-hallmark-neutral-gray text-sm">Preparing leaders for future organizational needs and challenges</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-hallmark-light-green/10 rounded-full blur-2xl"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-hallmark-blue/10 rounded-full blur-2xl"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-hallmark-off-white">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                    alt="HR Challenges" 
                    className="w-full h-full object-cover rounded-xl" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hallmark-dark-blue/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">We solve these challenges</h3>
                      <p className="text-white/80 text-sm">Our solutions are designed to address these exact pain points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section - IMPROVED DESIGN */}
        <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-white to-hallmark-off-white/30">
          <div className="absolute top-0 right-0 w-72 h-72 bg-hallmark-light-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-hallmark-blue/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-hallmark-green/20 to-hallmark-blue/20 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider text-hallmark-dark-blue mb-4">
                OUR SOLUTIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-hallmark-dark">Comprehensive HR Solutions</h2>
              <p className="text-hallmark-neutral-gray max-w-2xl mx-auto">
                Designed to address your most pressing HR challenges and transform your workforce
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FileSearch className="text-white" size={24} />,
                  title: "Talent Acquisition",
                  description: "Modernize your recruitment approach",
                  color: "from-hallmark-dark-blue to-hallmark-blue",
                  features: ["Employer branding", "Process optimization", "Candidate experience", "Tech implementation"]
                },
                {
                  icon: <Users className="text-white" size={24} />,
                  title: "Employee Engagement",
                  description: "Build a thriving workplace culture",
                  color: "from-hallmark-dark-green to-hallmark-green",
                  features: ["Engagement assessment", "Culture transformation", "Recognition programs", "Retention strategy"]
                },
                {
                  icon: <Briefcase className="text-white" size={24} />,
                  title: "HR Transformation",
                  description: "Modernize HR operations",
                  color: "from-hallmark-dark-blue to-hallmark-blue",
                  features: ["Process optimization", "HR technology roadmap", "Service delivery model", "Change management"]
                },
                {
                  icon: <Award className="text-white" size={24} />,
                  title: "Leadership Development",
                  description: "Build your leadership pipeline",
                  color: "from-hallmark-dark-green to-hallmark-green",
                  features: ["Leadership assessment", "High-potential development", "Succession planning", "Executive coaching"]
                },
                {
                  icon: <FileSearch className="text-white" size={24} />,
                  title: "Workforce Analytics",
                  description: "Data-driven HR decisions",
                  color: "from-hallmark-dark-blue to-hallmark-blue",
                  features: ["HR metrics framework", "Predictive analytics", "Data visualization", "Strategic insights"]
                },
                {
                  icon: <Users className="text-white" size={24} />,
                  title: "Diversity & Inclusion",
                  description: "Build inclusive workplaces",
                  color: "from-hallmark-dark-green to-hallmark-green",
                  features: ["DEI assessment", "Inclusive leadership", "Belonging initiatives", "Accountability measures"]
                }
              ].map((solution, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group h-full">
                  <div className={`bg-gradient-to-r ${solution.color} p-5 relative`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mt-10 -mr-10"></div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                        <p className="text-white/80 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                          <span className="text-hallmark-dark text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="mt-4 text-hallmark-dark-blue text-sm hover:text-hallmark-green transition-colors flex items-center"
                      onClick={handleMoreInfo}
                    >
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue text-white hover:opacity-90 transition-opacity px-6 py-2"
                onClick={handleMoreInfo}
              >
                Explore All Our Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Us Section - NEW STANDALONE SECTION */}
        <section className="py-12 md:py-16 bg-hallmark-dark-blue text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <div className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider text-white mb-4">
                CLIENT TRUST
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Clients Choose Us</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Delivering exceptional results and building lasting partnerships with our clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Check size={24} />,
                  title: "Proven Track Record",
                  description: "Over 200+ successful client engagements across industries with measurable results"
                },
                {
                  icon: <Users size={24} />,
                  title: "Expert Team",
                  description: "Certified HR professionals with deep industry expertise and practical experience"
                },
                {
                  icon: <FileSearch size={24} />,
                  title: "Data-Driven Approach",
                  description: "Evidence-based methodologies that deliver measurable business outcomes"
                },
                {
                  icon: <Award size={24} />,
                  title: "Customized Solutions",
                  description: "Tailored strategies designed specifically for your unique business needs"
                },
                {
                  icon: <Briefcase size={24} />,
                  title: "Ongoing Support",
                  description: "Comprehensive implementation assistance ensuring sustainable results"
                },
                {
                  icon: <BookOpen size={24} />,
                  title: "Knowledge Transfer",
                  description: "We build your internal capabilities while solving immediate challenges"
                }
              ].map((reason, index) => (
                <div key={index} className="bg-hallmark-dark-blue/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-hallmark-green/20 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-white/70">{reason.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                className="bg-white text-hallmark-dark-blue hover:bg-white/90 transition-colors"
                onClick={handleMoreInfo}
              >
                See Our Client Success Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-hallmark-dark text-center">Our Approach</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Step 1 */}
                <div className="flex md:items-center mb-12 relative">
                  <div className="hidden md:flex w-20 h-20 rounded-full bg-hallmark-dark-blue text-white text-xl font-bold items-center justify-center flex-shrink-0 mr-6 border-4 border-white shadow-lg z-10">
                    1
                  </div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-hallmark-dark-blue text-white text-lg font-bold flex items-center justify-center flex-shrink-0 mr-4 border-2 border-white shadow-lg z-10">
                    1
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-premium flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-hallmark-dark-blue">Discover</h3>
                    <p className="text-gray-700">
                      We begin with a thorough assessment of your current HR processes, challenges, and business objectives through stakeholder interviews, data analysis, and industry benchmarking.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex md:items-center mb-12 relative">
                  <div className="hidden md:flex w-20 h-20 rounded-full bg-hallmark-dark-green text-white text-xl font-bold items-center justify-center flex-shrink-0 mr-6 border-4 border-white shadow-lg z-10">
                    2
                  </div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-hallmark-dark-green text-white text-lg font-bold flex items-center justify-center flex-shrink-0 mr-4 border-2 border-white shadow-lg z-10">
                    2
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-premium flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-hallmark-green">Design</h3>
                    <p className="text-gray-700">
                      Based on our findings, we develop a customized solution blueprint that addresses your specific challenges, aligns with your business strategy, and includes detailed implementation plans.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex md:items-center mb-12 relative">
                  <div className="hidden md:flex w-20 h-20 rounded-full bg-hallmark-blue text-white text-xl font-bold items-center justify-center flex-shrink-0 mr-6 border-4 border-white shadow-lg z-10">
                    3
                  </div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-hallmark-blue text-white text-lg font-bold flex items-center justify-center flex-shrink-0 mr-4 border-2 border-white shadow-lg z-10">
                    3
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-premium flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-hallmark-blue">Implement</h3>
                    <p className="text-gray-700">
                      We work alongside your team to execute the solution while providing expert guidance, change management support, and addressing challenges as they arise to ensure seamless adoption.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex md:items-center relative">
                  <div className="hidden md:flex w-20 h-20 rounded-full bg-hallmark-dark-blue text-white text-xl font-bold items-center justify-center flex-shrink-0 mr-6 border-4 border-white shadow-lg z-10">
                    4
                  </div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-hallmark-dark-blue text-white text-lg font-bold flex items-center justify-center flex-shrink-0 mr-4 border-2 border-white shadow-lg z-10">
                    4
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-premium flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-hallmark-dark-blue">Sustain</h3>
                    <p className="text-gray-700">
                      We ensure long-term success through knowledge transfer, capability building, ongoing measurement, and optimization support tailored to evolving business needs.
                    </p>
                  </div>
                </div>
                
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-10 md:left-10 w-0.5 bg-gray-200 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics We Impact - IMPROVED DESIGN */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white to-hallmark-off-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-hallmark-light-green/20 to-hallmark-blue/20 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider text-hallmark-dark-blue mb-4">
                MEASURABLE IMPACT
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-hallmark-dark">Key Metrics We Impact</h2>
              <p className="text-hallmark-neutral-gray max-w-2xl mx-auto">
                Our solutions deliver tangible, measurable improvements to your HR operations
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: "40%", label: "Average Reduction in Time-to-Hire", color: "from-hallmark-blue/20 to-hallmark-dark-blue/20", textColor: "text-hallmark-dark-blue" },
                { value: "25%", label: "Improvement in Employee Retention", color: "from-hallmark-green/20 to-hallmark-dark-green/20", textColor: "text-hallmark-dark-green" },
                { value: "35%", label: "Increase in HR Team Productivity", color: "from-hallmark-blue/20 to-hallmark-dark-blue/20", textColor: "text-hallmark-dark-blue" },
                { value: "20%", label: "Reduction in HR Operational Costs", color: "from-hallmark-green/20 to-hallmark-dark-green/20", textColor: "text-hallmark-dark-green" }
              ].map((metric, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br rounded-xl blur-md opacity-70 transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to bottom right, ${metric.color.split('from-')[1].split(' ')[0].replace('/20', '')}, ${metric.color.split('to-')[1].split(' ')[0].replace('/20', '')})` }}>
                  </div>
                  <div className="bg-white rounded-xl p-6 relative z-10 h-full flex flex-col items-center justify-center text-center shadow-xl transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className={`text-4xl md:text-5xl font-bold ${metric.textColor} mb-2`}>{metric.value}</div>
                    <p className="text-hallmark-neutral-gray text-sm">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: <FileText size={24} />, title: "Reduced Risk", description: "Minimize compliance risks and penalties through improved processes" },
                  { icon: <Users size={24} />, title: "Employee Satisfaction", description: "Enhanced workforce experience leading to better engagement" },
                  { icon: <FileSearch size={24} />, title: "Data Visibility", description: "Comprehensive insights enabling better decision-making" },
                  { icon: <Briefcase size={24} />, title: "Faster Onboarding", description: "Accelerated time-to-productivity for new hires" }
                ].map((impact, index) => (
                  <div key={index} className={`p-6 group hover:bg-gradient-to-br hover:from-hallmark-off-white hover:to-white transition-all duration-300 ${index < 3 ? 'border-r border-gray-100' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-hallmark-light-green/20 flex items-center justify-center mb-4 group-hover:bg-hallmark-green/30 transition-colors">
                      <div className="text-hallmark-green">
                        {impact.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-hallmark-dark">{impact.title}</h3>
                    <p className="text-hallmark-neutral-gray">{impact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Showcase - Enhanced Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Problem & Solution Showcase</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
              Real-world examples of how our strategic HR solutions have transformed organizations across industries.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-premium overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue p-4 text-white">
                    <span className="text-sm uppercase tracking-wider text-hallmark-light-blue/80">{study.industry}</span>
                    <h3 className="text-xl font-semibold mt-1">{study.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="mb-4">
                      <h4 className="font-semibold text-hallmark-dark-blue mb-2">The Challenge</h4>
                      <p className="text-gray-700">{study.problem}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-hallmark-green mb-2">Our Solution</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-hallmark-dark mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center">
                            <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-hallmark-off-white border-t border-gray-100">
                    <Button variant="outline" className="w-full border-hallmark-dark-blue text-hallmark-dark-blue hover:bg-hallmark-dark-blue hover:text-white">
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Frequently Asked Questions</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Get answers to common questions about our solutions and approach.
            </p>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`mb-4 bg-white rounded-lg shadow-premium overflow-hidden ${
                    openFAQ === index ? 'border-l-4 border-hallmark-dark-blue' : ''
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-medium text-hallmark-dark">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp size={20} className="text-hallmark-dark-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-hallmark-dark-blue flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`px-5 transition-all duration-300 ${
                      openFAQ === index ? 'py-5 border-t border-gray-100' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs & Insights Section - New Implementation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Blogs & Insights</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
              Explore our latest thinking on HR trends, organizational design, and workforce strategies.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-premium hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-hallmark-light-blue/20 text-hallmark-blue px-2 py-1 rounded-full text-xs">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-hallmark-dark">{post.title}</h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <Link to="/blog" className="inline-flex items-center text-hallmark-dark-blue font-medium hover:text-hallmark-blue transition-colors">
                      <span className="mr-2">Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/blog" className="inline-flex items-center px-6 py-3 bg-hallmark-dark-green text-white rounded hover:bg-hallmark-green transition-colors">
                <span className="mr-2">View All Insights</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Us Form Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default SolutionsPage;
