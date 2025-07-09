
import { ArrowRight, Check, Users, TrendingUp, Shield, Star, Zap, Target, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Solution1Page = () => {
  const howHwsHelping = [
    {
      title: "Streamline Operations",
      description: "Automate complex workflows and reduce manual processes by up to 75%",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Cost Reduction",
      description: "Achieve 40% operational cost savings through intelligent optimization",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Enhanced Productivity",
      description: "Boost team efficiency with integrated collaboration tools",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Global Scalability",
      description: "Seamlessly scale operations across multiple regions and time zones",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const whyHws = [
    {
      icon: <Shield className="h-8 w-8 text-hallmark-blue" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols with 99.9% uptime guarantee and comprehensive data protection"
    },
    {
      icon: <Award className="h-8 w-8 text-hallmark-dark-green" />,
      title: "Proven Track Record",
      description: "Trusted by 500+ Fortune companies worldwide with measurable ROI within 90 days"
    },
    {
      icon: <Users className="h-8 w-8 text-hallmark-green" />,
      title: "24/7 Expert Support",
      description: "Dedicated account managers and technical support team available around the clock"
    }
  ];

  const globalStats = [
    { number: "500+", label: "Global Clients", color: "text-hallmark-blue" },
    { number: "40%", label: "Cost Reduction", color: "text-hallmark-dark-green" },
    { number: "99.9%", label: "Uptime Guarantee", color: "text-hallmark-green" },
    { number: "24/7", label: "Support Available", color: "text-hallmark-dark-blue" }
  ];

  const faqs = [
    {
      question: "How quickly can we see results?",
      answer: "Most clients see measurable improvements within 30 days, with full ROI typically achieved within 90 days of implementation."
    },
    {
      question: "What kind of training and support do you provide?",
      answer: "We provide comprehensive onboarding, user training, and 24/7 ongoing support with dedicated account managers for enterprise clients."
    },
    {
      question: "How does the solution integrate with existing systems?",
      answer: "Our platform offers seamless integration with 200+ popular business tools and systems through APIs and pre-built connectors."
    },
    {
      question: "What security measures are in place?",
      answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, and compliance with SOC 2, GDPR, and ISO 27001 standards."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-hallmark-dark-blue via-hallmark-blue to-hallmark-light-blue text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dots opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  Trusted by 500+ Companies
                </div>
                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                  Advanced Workforce
                  <span className="bg-gradient-to-r from-hallmark-light-green to-hallmark-green bg-clip-text text-transparent"> Solutions</span>
                </h1>
                <p className="text-xl opacity-90 leading-relaxed max-w-lg">
                  Transform your global workforce management with our comprehensive platform designed to optimize operations and drive sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/90 font-semibold">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-hallmark-green/20 to-hallmark-blue/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0" 
                  alt="Advanced Workforce Solutions" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full max-h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement + Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Problem Statement */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-display font-bold text-hallmark-dark">The Challenge</h2>
                  <p className="text-lg text-hallmark-neutral-gray leading-relaxed">
                    Modern organizations face unprecedented workforce management challenges that traditional solutions can't address.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-hallmark-dark mb-2">Fragmented Systems</h3>
                      <p className="text-hallmark-neutral-gray">Disconnected tools creating operational silos and data inconsistencies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-hallmark-dark mb-2">Global Complexity</h3>
                      <p className="text-hallmark-neutral-gray">Managing distributed teams across time zones and regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-hallmark-dark mb-2">Rising Costs</h3>
                      <p className="text-hallmark-neutral-gray">Inefficient processes leading to increased operational expenses</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-display font-bold text-hallmark-dark">Our Solution</h2>
                  <p className="text-lg text-hallmark-neutral-gray leading-relaxed">
                    A unified platform that transforms how you manage your global workforce with intelligent automation and real-time insights.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-hallmark-off-white to-white p-8 rounded-2xl border border-hallmark-light-blue/10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-hallmark-blue/10 rounded-lg flex items-center justify-center">
                        <Check className="h-5 w-5 text-hallmark-blue" />
                      </div>
                      <span className="font-medium text-hallmark-dark">Unified Dashboard & Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-hallmark-green/10 rounded-lg flex items-center justify-center">
                        <Check className="h-5 w-5 text-hallmark-green" />
                      </div>
                      <span className="font-medium text-hallmark-dark">Intelligent Workflow Automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-hallmark-dark-green/10 rounded-lg flex items-center justify-center">
                        <Check className="h-5 w-5 text-hallmark-dark-green" />
                      </div>
                      <span className="font-medium text-hallmark-dark">Global Compliance Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-hallmark-dark-blue/10 rounded-lg flex items-center justify-center">
                        <Check className="h-5 w-5 text-hallmark-dark-blue" />
                      </div>
                      <span className="font-medium text-hallmark-dark">Real-time Performance Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How HWS is Helping */}
        <section className="py-20 bg-gradient-to-br from-hallmark-off-white to-white">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-display font-bold text-hallmark-dark">How HWS is Helping</h2>
              <p className="text-xl text-hallmark-neutral-gray max-w-3xl mx-auto">
                Delivering measurable results that transform your workforce operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howHwsHelping.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-hallmark-blue to-hallmark-light-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-hallmark-dark">{item.title}</h3>
                    <p className="text-hallmark-neutral-gray leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why HWS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-display font-bold text-hallmark-dark">Why Choose HWS</h2>
              <p className="text-xl text-hallmark-neutral-gray max-w-3xl mx-auto">
                The trusted partner for global workforce transformation
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {whyHws.map((item, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-hallmark-off-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-hallmark-blue/5 to-hallmark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-hallmark-off-white to-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {item.icon}
                    </div>
                    <CardTitle className="text-2xl text-hallmark-dark">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-hallmark-neutral-gray leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Growth Indicators */}
        <section className="py-20 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dots opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-display font-bold">Global Impact & Growth</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our worldwide footprint and measurable results speak for themselves
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {globalStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className={`text-5xl font-bold mb-4 ${stat.color.replace('hallmark-', 'white')} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-lg font-medium opacity-90">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-display font-bold text-hallmark-dark">Frequently Asked Questions</h2>
              <p className="text-xl text-hallmark-neutral-gray max-w-3xl mx-auto">
                Get answers to common questions about our workforce solutions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-hallmark-light-blue/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-hallmark-dark mb-4 group-hover:text-hallmark-blue transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-hallmark-neutral-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-hallmark-dark-green to-hallmark-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dots opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-display font-bold">Ready to Transform Your Workforce?</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Join 500+ companies that have revolutionized their workforce management with HWS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-hallmark-dark-green hover:bg-white/90 font-semibold">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Solution1Page;
