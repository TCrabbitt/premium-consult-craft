import { ArrowRight, Check, Users, TrendingUp, Shield, Star, Zap, Target, Globe, Award, FileCheck, HeartHandshake, MapPin, Calendar, Code, Monitor, Database, Cpu, Cloud, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ITStaffingPage = () => {
  const staffingSolutions = [
    {
      title: "End-to-End Contingent Workforce Management",
      description: "We deliver scalable, digital-first staffing solutions to meet dynamic business needs across contract, offshore, remote, and managed workforce models",
      features: [
        "Flexible Engagement Models: Hourly-Based, Contract-to-Hire, or Fixed Budget models",
        "Global Talent Access: Offshore, nearshore, and remote hiring options",
        "Interview-as-a-Service: Outsource technical interviews to our expert panel",
        "Proactive Bench & Talent Pooling: Pre-identified talent pipeline",
        "Managed Capacity Delivery: End-to-end workforce governance"
      ],
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "Contingent RPO – Smart Recruitment at Scale",
      description: "We offer scalable, cost-effective RPO models backed by technology and expert recruiters to streamline hiring across business functions",
      features: [
        "Enterprise RPO: Full-cycle recruitment management",
        "Function or Project-Based RPO: Targeted hiring support",
        "Technology/Skill-Based RPO: Focused tech talent hiring",
        "Hybrid & Agile RPO Models: Adaptable recruitment strategies",
        "On-Demand RPO: Rapid-response recruitment support"
      ],
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Hire-Train-Deploy-Deliver",
      description: "We bridge skill gaps by hiring fresh or junior talent, training them on specific technologies, and deploying them as job-ready resources",
      features: [
        "Centre of Excellence (CoE): Centralized training hubs",
        "Competency-Based Deployment: Resource allocation based on technical reviews",
        "Low Attrition, High Engagement: Our care model retains talent longer",
        "Learning Management Systems (LMS): Structured upskilling programs",
        "Niche Skill Fulfillment: Custom training for specialized resources"
      ],
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Gig Hiring – On-Demand Project-Based Workforce",
      description: "We provide businesses with flexible access to skilled freelancers or independent contractors for short-term and project-specific needs",
      features: [
        "Short-Term Specialists: Hire vetted professionals for project-based roles",
        "Freelancer Pool Access: Tap into a diverse, on-demand talent network",
        "Rapid Onboarding: Deploy qualified experts quickly",
        "Cost-Effective Engagements: Pay only for work done",
        "Flexible Scaling: Scale teams up or down easily"
      ],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const whyTrustHWS = [
    {
      title: "Scalable & Flexible Solutions",
      description: "We offer agile staffing solutions that seamlessly scale with your business, helping you adapt quickly to market shifts and evolving demands",
      icon: <TrendingUp className="h-8 w-8 text-hallmark-blue" />
    },
    {
      title: "Cost Efficiency",
      description: "We optimize your hiring budget by leveraging offshore, nearshore, and remote models, reducing costs while connecting you with top global talent",
      icon: <Target className="h-8 w-8 text-hallmark-green" />
    },
    {
      title: "Expert-Led Talent Pool",
      description: "Our network of highly qualified professionals is carefully curated through AI-driven screening and in-depth technical assessments",
      icon: <Code className="h-8 w-8 text-hallmark-dark-green" />
    },
    {
      title: "End-to-End Workforce Management",
      description: "We manage the complete employee lifecycle—from hiring and onboarding to compliance, payroll, and training",
      icon: <Settings className="h-8 w-8 text-hallmark-dark-blue" />
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Consultation & Needs Assessment",
      description: "Understand your staffing needs and define job roles with our experts",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Talent Sourcing & Evaluation",
      description: "Our platform efficiently matches you with pre-screened candidates",
      icon: <Database className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Onboarding & Training",
      description: "We handle onboarding, compliance, and provide training to ensure seamless integration",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Performance & Upskilling",
      description: "Post-hire, we track performance and offer upskilling programs to ensure continuous growth",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const globalMetrics = [
    { number: "10+", label: "Years of Experience", subtitle: "Over a decade of delivering reliable and expert workforce solutions across industries", color: "text-hallmark-blue" },
    { number: "7+", label: "Countries", subtitle: "Extensive presence and operations spanning key international markets worldwide", color: "text-hallmark-dark-green" },
    { number: "100+", label: "Clients Served", subtitle: "Trusted by over 100 organizations across diverse sectors for their staffing and HR needs", color: "text-hallmark-green" },
    { number: "1000+", label: "Global Deployments", subtitle: "Successfully deployed contractual employees globally, powering businesses everywhere", color: "text-hallmark-dark-blue" }
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We primarily focus on IT and tech-driven sectors, but our staffing solutions also extend to BFSI, healthcare, retail, and more."
    },
    {
      question: "Can HWS India support short-term project hiring?",
      answer: "Absolutely! Our gig hiring and on-demand RPO models are built for project-based or temporary workforce needs."
    },
    {
      question: "How quickly can I onboard talent through HWS India?",
      answer: "With our digital platform and ready talent bench, onboarding can happen in as little as 48–72 hours, depending on the role."
    },
    {
      question: "Do you offer compliance and payroll services?",
      answer: "Yes, our high-touch payroll and compliance service ensures smooth processing while meeting all statutory requirements."
    },
    {
      question: "What makes your RPO model different?",
      answer: "We offer flexible RPO models—enterprise, functional, agile, and hybrid—customized to your hiring volume, skill needs, and project timelines."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-dark-blue via-hallmark-blue to-hallmark-light-blue text-white py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-15">
              <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-hallmark-green/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10">
              <div className="inline-flex items-center bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-base font-semibold mb-8 border border-white/20">
                <span className="w-3 h-3 bg-hallmark-green rounded-full mr-3 animate-pulse"></span>
                Solution 2 • IT Staffing Solutions
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="block text-white/90 text-2xl lg:text-3xl font-medium mb-4">Next-Gen IT Workforce</span>
                Your Trusted
                <span className="bg-gradient-to-r from-hallmark-light-green via-white to-hallmark-green bg-clip-text text-transparent block mt-2"> Future-Ready</span>
                <span className="block mt-2">Workforce Partner</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-95 leading-relaxed max-w-4xl mx-auto font-light">
                Our staffing solutions are tailored to meet evolving business needs with speed, precision, and cost-efficiency across global markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
                <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/95 hover:scale-105 font-semibold text-lg px-10 py-5 shadow-2xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 text-lg px-10 py-5 backdrop-blur-sm transition-all duration-300">
                  Explore Solutions
                </Button>
              </div>
              <div className="mt-16 flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-hallmark-green" />
                  <span className="text-sm font-medium">AI-Driven Matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-hallmark-green" />
                  <span className="text-sm font-medium">48-72hr Onboarding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-hallmark-green" />
                  <span className="text-sm font-medium">100+ Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Staffing Solutions */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  Our Custom Staffing Solutions for
                  <span className="text-hallmark-blue"> Agility, Efficiency</span> & Growth
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-4xl mx-auto leading-relaxed">
                  Comprehensive IT staffing solutions designed to maximize efficiency, reduce costs, and improve your workforce's agility
                </p>
              </div>

              <div className="space-y-12">
                {staffingSolutions.map((solution, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-hallmark-off-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-hallmark-blue/5 to-hallmark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className="w-14 h-14 bg-gradient-to-br from-hallmark-blue to-hallmark-light-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white">
                              {solution.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-semibold text-hallmark-dark mb-4">{solution.title}</h3>
                          <p className="text-hallmark-neutral-gray leading-relaxed mb-6">{solution.description}</p>
                        </div>
                        <div className="lg:w-2/3">
                          <div className="grid gap-4">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-hallmark-green rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-hallmark-neutral-gray">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust HWS Section */}
        <section className="py-24 bg-gradient-to-br from-hallmark-off-white via-white to-hallmark-off-white relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-hallmark-blue to-hallmark-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-hallmark-green to-hallmark-dark-green rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  Why Recruiters, Businesses and Job Seekers
                  <span className="text-hallmark-green"> Trust HWS India?</span>
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-4xl mx-auto leading-relaxed">
                  In today's competitive market, HWS India stands out by offering innovative IT staffing solutions designed to maximize efficiency, reduce costs, and improve your workforce's agility.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {whyTrustHWS.map((service, index) => (
                  <div key={index} className="group">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-hallmark-blue bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-hallmark-off-white to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-hallmark-dark mb-4">{service.title}</h3>
                            <p className="text-hallmark-neutral-gray leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  How do
                  <span className="text-hallmark-dark-green"> We Work?</span>
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-3xl mx-auto">
                  Our streamlined process ensures efficient talent acquisition and seamless integration
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {workProcess.map((step, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-hallmark-off-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-hallmark-blue/5 to-hallmark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-hallmark-blue to-hallmark-light-blue rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <div className="text-white font-bold text-lg">{step.step}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-hallmark-dark mb-3">{step.title}</h3>
                          <p className="text-hallmark-neutral-gray leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Growth Indicators */}
        <section className="py-24 bg-gradient-to-r from-hallmark-dark-green to-hallmark-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dots opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold mb-6">Key Metrics</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  The impact, as demonstrated through key global metrics, is proven by our expertise and experience, which drive business success worldwide.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {globalMetrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <Card className="bg-white/15 backdrop-blur-sm border-white/20 hover:bg-white/25 transition-all duration-300 group-hover:scale-105">
                      <CardContent className="p-8">
                        <div className="text-5xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                          {metric.number}
                        </div>
                        <div className="text-xl font-semibold mb-2 text-white/90">{metric.label}</div>
                        <div className="text-sm text-white/70 leading-relaxed">{metric.subtitle}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-gradient-to-br from-white to-hallmark-off-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-3xl mx-auto">
                  Get answers to common questions about our IT staffing and workforce solutions
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dots opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-display font-bold mb-6">Ready to Transform Your IT Workforce?</h2>
              <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
                Partner with us to get the right talent, at the right time, and for the right price. Let's build your future-ready team together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/90 font-semibold text-lg px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Schedule Consultation
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

export default ITStaffingPage;