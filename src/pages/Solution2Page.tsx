
import { ArrowRight, Check, Zap, Globe, Lock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Solution2Page = () => {
  const benefits = [
    "Accelerate time-to-market by 60%",
    "Enhance system reliability",
    "Reduce maintenance costs",
    "Scale seamlessly with growth"
  ];

  const uniquePoints = [
    {
      icon: <Zap className="h-8 w-8 text-hallmark-dark-blue" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times"
    },
    {
      icon: <Globe className="h-8 w-8 text-hallmark-dark-green" />,
      title: "Global Reach",
      description: "Multi-region deployment with 99.99% uptime guarantee"
    },
    {
      icon: <Lock className="h-8 w-8 text-hallmark-blue" />,
      title: "Advanced Security",
      description: "End-to-end encryption with compliance certifications"
    }
  ];

  const faqs = [
    {
      question: "How does this solution integrate with existing systems?",
      answer: "Our solution offers seamless integration through APIs and pre-built connectors for popular platforms."
    },
    {
      question: "What's the expected ROI?",
      answer: "Most clients see a positive ROI within 6 months, with average returns of 300% in the first year."
    },
    {
      question: "Do you provide migration assistance?",
      answer: "Yes, our expert team handles the complete migration process with zero downtime."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-green text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
              alt="Solution 2 Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Next-Gen Platform Solution</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Revolutionize your digital infrastructure with our cutting-edge platform designed for modern enterprises.
                </p>
                <Button className="bg-white text-hallmark-dark-green hover:bg-white/90">
                  Explore Platform
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" 
                  alt="Solution 2 Hero" 
                  className="rounded-lg shadow-xl max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">The Digital Transformation Challenge</h2>
              <p className="text-lg text-gray-700 mb-8">
                Organizations face mounting pressure to modernize their technology stack while maintaining operational excellence. 
                Legacy systems, security concerns, and scalability issues create barriers to innovation and growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Legacy Systems</h3>
                  <p className="text-gray-600">Outdated infrastructure limiting innovation</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Security Risks</h3>
                  <p className="text-gray-600">Vulnerable systems exposing critical data</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Performance Issues</h3>
                  <p className="text-gray-600">Slow systems affecting user experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">Advanced Platform Architecture</h2>
                <p className="text-gray-700 mb-6">
                  Our next-generation platform provides a robust foundation for digital transformation, 
                  combining cloud-native architecture with enterprise-grade security and performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Cloud-native microservices architecture</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Auto-scaling and load balancing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Advanced monitoring and analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Multi-cloud deployment options</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
                  alt="Platform Architecture" 
                  className="rounded-lg shadow-premium max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How This is Helping */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Transforming Business Operations</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Experience the power of modern technology with measurable business impact.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-hallmark-light-green/20 flex-shrink-0">
                        <Check size={16} className="text-hallmark-green" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-hallmark-off-white p-8 rounded-lg shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Business Transformation" 
                  className="rounded-lg max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why This */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Why Our Platform Leads</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Built with cutting-edge technology and backed by industry expertise.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {uniquePoints.map((point, index) => (
                <Card key={index} className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-green">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mb-4">
                      {point.icon}
                    </div>
                    <CardTitle>{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Growth Indicators */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Platform Performance</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Real metrics from our global platform deployment.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-dark-green mb-2">99.99%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-dark-blue mb-2">300%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-green mb-2">50ms</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-blue mb-2">1000+</div>
                <div className="text-gray-600">Deployments</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-premium">
                  <h3 className="font-semibold text-hallmark-dark mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Take the first step towards digital transformation with our platform.
            </p>
            <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
              Request Demo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Solution2Page;
