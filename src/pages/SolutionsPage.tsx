import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, ChevronUp, FileSearch, Briefcase, Users, Award, BookOpen, FileText, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

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

        {/* State the Problem Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark">The Challenges Modern HR Teams Face</h2>
                <p className="text-gray-700 mb-6">
                  Today's businesses navigate an increasingly complex workforce landscape with challenges that traditional HR approaches struggle to address effectively.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={16} className="text-hallmark-green" />
                    </div>
                    <p className="text-gray-700">Finding and retaining top talent in competitive markets</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={16} className="text-hallmark-green" />
                    </div>
                    <p className="text-gray-700">Managing increasingly complex compliance requirements</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={16} className="text-hallmark-green" />
                    </div>
                    <p className="text-gray-700">Building inclusive cultures across distributed teams</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                      <Check size={16} className="text-hallmark-green" />
                    </div>
                    <p className="text-gray-700">Developing future-ready leadership capabilities</p>
                  </div>
                </div>
              </div>
              <div className="bg-hallmark-off-white p-8 rounded-lg shadow-premium">
                <div className="flex items-center justify-center h-full">
                  <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt="HR Challenges" className="rounded-lg max-h-80 object-cover w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Our Solutions</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              We offer comprehensive consulting services designed to address your most pressing HR challenges and transform your workforce into a strategic advantage.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-blue">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
                    <FileSearch size={24} className="text-hallmark-blue" />
                  </div>
                  <CardTitle>Talent Acquisition Strategy</CardTitle>
                  <CardDescription>Modernize your recruitment approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Employer brand development</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Recruitment process optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Candidate experience enhancement</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Technology implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-green">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mb-4">
                    <Users size={24} className="text-hallmark-green" />
                  </div>
                  <CardTitle>Employee Engagement</CardTitle>
                  <CardDescription>Build a thriving workplace culture</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Engagement assessment</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Culture transformation</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Recognition program design</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Retention strategy development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-blue">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
                    <Briefcase size={24} className="text-hallmark-blue" />
                  </div>
                  <CardTitle>HR Transformation</CardTitle>
                  <CardDescription>Modernize HR operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Process optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>HR technology roadmap</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Service delivery model design</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Change management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-green">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mb-4">
                    <Award size={24} className="text-hallmark-green" />
                  </div>
                  <CardTitle>Leadership Development</CardTitle>
                  <CardDescription>Build your leadership pipeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Leadership assessment</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>High-potential development</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Succession planning</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Executive coaching</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-blue">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
                    <FileSearch size={24} className="text-hallmark-blue" />
                  </div>
                  <CardTitle>Workforce Analytics</CardTitle>
                  <CardDescription>Data-driven HR decisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>HR metrics framework</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Predictive workforce analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Data visualization</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Strategic insights reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-green">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mb-4">
                    <Users size={24} className="text-hallmark-green" />
                  </div>
                  <CardTitle>Diversity & Inclusion</CardTitle>
                  <CardDescription>Build inclusive workplaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>DEI assessment & strategy</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Inclusive leadership training</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Belonging initiatives</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="mr-2 text-hallmark-green flex-shrink-0" />
                      <span>Measurement & accountability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why HWS Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-hallmark-dark-green to-hallmark-dark-blue p-8 rounded-lg text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                      alt="Background Pattern" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-6">Why clients choose us:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check size={20} className="mr-3 text-hallmark-light-green flex-shrink-0 mt-1" />
                        <p>Proven track record with over 200+ successful client engagements across industries</p>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-3 text-hallmark-light-green flex-shrink-0 mt-1" />
                        <p>Team of certified HR professionals with deep industry expertise</p>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-3 text-hallmark-light-green flex-shrink-0 mt-1" />
                        <p>Data-driven approach that delivers measurable business outcomes</p>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-3 text-hallmark-light-green flex-shrink-0 mt-1" />
                        <p>Customized solutions tailored to your specific business needs</p>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-3 text-hallmark-light-green flex-shrink-0 mt-1" />
                        <p>Ongoing support that ensures sustainable implementation</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark">Why Choose Hallmark</h2>
                <p className="text-gray-700 mb-6">
                  We bring a unique combination of deep HR expertise, business acumen, and proven methodologies that drive tangible results. Our consultants average 15+ years of experience in their fields and are committed to your organization's success.
                </p>
                <p className="text-gray-700">
                  Unlike traditional consulting firms, we focus on building your internal capabilities while solving immediate challenges. This approach ensures sustainable improvements that continue to deliver value long after our engagement ends.
                </p>
              </div>
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

        {/* Key Metrics Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-hallmark-dark text-center">Key Metrics We Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-hallmark-off-white p-6 rounded-lg text-center shadow-premium hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-hallmark-dark-blue mb-2">40%</div>
                <p className="text-gray-700">Average Reduction in Time-to-Hire</p>
              </div>
              <div className="bg-hallmark-off-white p-6 rounded-lg text-center shadow-premium hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-hallmark-dark-green mb-2">25%</div>
                <p className="text-gray-700">Improvement in Employee Retention</p>
              </div>
              <div className="bg-hallmark-off-white p-6 rounded-lg text-center shadow-premium hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-hallmark-dark-blue mb-2">35%</div>
                <p className="text-gray-700">Increase in HR Team Productivity</p>
              </div>
              <div className="bg-hallmark-off-white p-6 rounded-lg text-center shadow-premium hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-hallmark-dark-green mb-2">20%</div>
                <p className="text-gray-700">Reduction in HR Operational Costs</p>
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
