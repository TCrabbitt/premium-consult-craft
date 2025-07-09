
import { ArrowRight, Check, Users, TrendingUp, Shield, Star, Zap, Target, Globe, Award, FileCheck, HeartHandshake, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Solution1Page = () => {
  const internationalServices = [
    {
      title: "Global Talent Deployment",
      description: "End-to-end manpower sourcing for both blue-collar and white-collar professionals across key international markets",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "International Compliance & Documentation",
      description: "Complete visa processing, labor clearances, and strict adherence to international labor laws",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Sector Expertise",
      description: "Deep hiring knowledge in healthcare, logistics, hospitality, construction, engineering, IT, and more",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Global Partner Network",
      description: "Strategic collaborations with recruitment firms and local partners for smooth onboarding",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Training & Pre-Deployment Orientation",
      description: "Cultural sensitivity, language training, and job-specific technical evaluations",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Post-Deployment Support",
      description: "Continuous engagement, feedback management, and performance monitoring",
      icon: <HeartHandshake className="h-6 w-6" />
    }
  ];

  const futureReadyServices = [
    {
      title: "Global Talent Mapping",
      description: "We identify and engage you with international talents as per your requirements across USA, Europe, Asia, UAE and beyond",
      icon: <MapPin className="h-8 w-8 text-hallmark-blue" />
    },
    {
      title: "End to End Overseas Recruitment",
      description: "From sourcing to onboarding, our team manages every aspect of hiring with speed, transparency and full-compliance",
      icon: <Zap className="h-8 w-8 text-hallmark-green" />
    },
    {
      title: "Role Based Alignment",
      description: "Every candidate goes through a vetting process for skills, adaptability and communication fit",
      icon: <Target className="h-8 w-8 text-hallmark-dark-green" />
    },
    {
      title: "Post-Hiring Support & Retention",
      description: "We provide ongoing support to ensure new hires successfully adapt, perform, and stay engaged",
      icon: <TrendingUp className="h-8 w-8 text-hallmark-dark-blue" />
    }
  ];

  const whyChooseHws = [
    {
      title: "Proven Track Record",
      description: "Over a decade of delivering reliable workforce solutions with measurable results"
    },
    {
      title: "Global Compliance Expertise",
      description: "Complete knowledge of international labor laws and visa processing requirements"
    },
    {
      title: "Industry Specialization",
      description: "Deep expertise across healthcare, IT, engineering, logistics, and construction sectors"
    },
    {
      title: "End-to-End Service",
      description: "From initial sourcing to post-deployment support, we handle every aspect of international hiring"
    },
    {
      title: "Cultural Integration Focus",
      description: "Specialized training programs to ensure seamless workplace integration across cultures"
    }
  ];

  const globalMetrics = [
    { number: "10+", label: "Years of Experience", subtitle: "Over a decade of delivering reliable workforce solutions", color: "text-hallmark-blue" },
    { number: "7+", label: "Countries", subtitle: "Global reach spanning key international markets", color: "text-hallmark-dark-green" },
    { number: "100+", label: "Clients Served", subtitle: "Trusted by organizations across diverse sectors", color: "text-hallmark-green" },
    { number: "1000+", label: "Global Deployments", subtitle: "Contractual employees successfully deployed worldwide", color: "text-hallmark-dark-blue" }
  ];

  const faqs = [
    {
      question: "What industries does HWS India specialize in for international talent deployment?",
      answer: "HWS India provides deployment services to a wide range of industries worldwide including Healthcare, Logistics, Hospitality, Construction, IT Management, Finance, IT, Engineering and more."
    },
    {
      question: "How does HWS India ensure compliance with different borders?",
      answer: "We handle all aspects of international compliance by providing comprehensive visa processing, labor clearances, background checks, skill validation, and medical certifications, ensuring strict adherence to destination country labor laws."
    },
    {
      question: "What is the Hire–Train–Deploy (HTD) model, and how does it benefit my business?",
      answer: "Our HTD model focuses on rapidly hiring, upskilling, and deploying talent for project-based or turnkey requirements. It helps businesses access skilled workforce quickly while ensuring low attrition and competency in niche skills."
    },
    {
      question: "How does HWS India support global talent post-deployment?",
      answer: "We provide continuous post-deployment support, including feedback management, grievance redressal, performance monitoring, and employee engagement initiatives to ensure high retention rates and satisfaction."
    },
    {
      question: "Can HWS India help with both short-term and long-term talent requirements?",
      answer: "Yes! Whether you need temporary staffing for specific projects, permanent placements, or gig workers for short-term assignments, HWS India offers flexible solutions tailored to your unique talent requirements."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-dark-blue via-hallmark-blue to-hallmark-light-blue text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-hallmark-green/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Global Talent Solutions
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-bold leading-tight">
                Hire the World's
                <span className="bg-gradient-to-r from-hallmark-light-green to-hallmark-green bg-clip-text text-transparent"> Top Talent</span>
                <br />Today
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                HWS India helps you connect with the world and hire globally from your location with smarter, faster, and fully compliant international hiring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/90 font-semibold text-lg px-8 py-4">
                  Start Global Hiring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge + Solution Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  Mastering the Complexities of
                  <span className="text-hallmark-blue"> International Talent</span> Deployment
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-4xl mx-auto leading-relaxed">
                  Expanding your talent pool across the USA, Europe, and the UAE presents unique challenges. At Hallmark Workforce Solutions, we specialize in overcoming these hurdles with comprehensive, tailored solutions.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {internationalServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-hallmark-off-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-hallmark-blue/5 to-hallmark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-hallmark-blue to-hallmark-light-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-hallmark-dark mb-4">{service.title}</h3>
                      <p className="text-hallmark-neutral-gray leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future-Ready Teams Section */}
        <section className="py-24 bg-gradient-to-br from-hallmark-off-white via-white to-hallmark-off-white relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-hallmark-blue to-hallmark-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-hallmark-green to-hallmark-dark-green rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  Beyond Hiring: HWS India
                  <span className="text-hallmark-green"> Building Future-Ready</span> Teams
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-4xl mx-auto leading-relaxed">
                  We empower global talent to help businesses build future-ready teams that are equipped to thrive in a dynamic global landscape. We help you combine talent with agility, cultural intelligence and international compliance.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {futureReadyServices.map((service, index) => (
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

        {/* Why Choose HWS Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  Why Choose
                  <span className="text-hallmark-dark-green"> HWS India</span> for Overseas Hiring
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-3xl mx-auto">
                  Our comprehensive approach and proven expertise make us the trusted partner for international talent acquisition
                </p>
              </div>

              <div className="space-y-6">
                {whyChooseHws.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-hallmark-green">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-hallmark-green to-hallmark-dark-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-hallmark-dark mb-2">{item.title}</h3>
                          <p className="text-hallmark-neutral-gray">{item.description}</p>
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
                <h2 className="text-5xl font-display font-bold mb-6">Global Growth Indicators</h2>
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
                  Get answers to common questions about our international talent deployment services
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
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-5xl font-display font-bold">Ready to Expand Your Global Talent Pool?</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Partner with HWS India and access world-class talent with complete compliance and ongoing support. Let's build your future-ready team together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/90 font-semibold text-lg px-8 py-4">
                  Start Your Global Hiring Journey
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

export default Solution1Page;
