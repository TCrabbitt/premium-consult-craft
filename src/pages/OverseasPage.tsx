import { ArrowRight, Check, Users, TrendingUp, Shield, Star, Zap, Target, Globe, Award, FileCheck, HeartHandshake, MapPin, Calendar, Building2, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const OverseasPage = () => {
  const globalServices = [
    {
      title: "Global Talent Deployment",
      description: "End-to-end manpower sourcing for both white-collar professionals (healthcare, finance, IT, engineering) and blue-collar (drivers, technicians, warehouse staff)",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "International Compliance & Documentation",
      description: "We handle comprehensive visa processing, labor clearances, and ensure strict adherence to international labor laws and standards",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Sector Expertise",
      description: "We have experts with deep knowledge in hiring across various sectors, including Healthcare, Logistics, Hospitality, Construction, Engineering, IT",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Global Partner Network",
      description: "Our global network helps us to identify the best talent for our clients, along with strategic collaborations with recruitment firms",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Training & Pre-Deployment Orientation",
      description: "Cultural sensitivity, language training, and job-specific technical evaluations to ensure workplace readiness",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Post-Deployment Support",
      description: "Continuous engagement, feedback management, grievance redressal, and performance monitoring to enhance employee retention",
      icon: <HeartHandshake className="h-6 w-6" />
    }
  ];

  const whyEmployersTrust = [
    {
      title: "End-to-End Recruitment Support",
      description: "From sourcing to onboarding, our team takes care of every aspect of hiring with speed, transparency, and full compliance with international labor laws",
      icon: <Zap className="h-8 w-8 text-hallmark-blue" />
    },
    {
      title: "Role-Based Alignment",
      description: "Every candidate we place on your team undergoes a vetting process to assess their skills, adaptability, communication, and cultural fit",
      icon: <Target className="h-8 w-8 text-hallmark-green" />
    },
    {
      title: "Post-Hiring Support & Retention",
      description: "We go beyond recruitment by providing ongoing support to ensure new hires successfully adapt, perform, and stay engaged",
      icon: <TrendingUp className="h-8 w-8 text-hallmark-dark-green" />
    },
    {
      title: "ISO Certified",
      description: "We are ISO-certified, ensuring that we deliver quality, consistency, and compliance with international standards",
      icon: <Shield className="h-8 w-8 text-hallmark-dark-blue" />
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
      question: "What types of healthcare professionals can HWS provide from overseas?",
      answer: "HWS specializes in sourcing highly qualified international healthcare professionals, including registered nurses, physical therapists, medical technologists, and other allied health workers. We ensure they meet all licensure, language, and credentialing requirements for U.S. practice."
    },
    {
      question: "How does HWS ensure the quality and readiness of international candidates?",
      answer: "We implement a rigorous screening, training, and credential verification process. Candidates undergo language proficiency assessments and cultural orientation to ensure clinical and professional readiness before arrival."
    },
    {
      question: "What support does HWS provide during the immigration and relocation process?",
      answer: "HWS offers end-to-end support, including visa sponsorship (such as EB-3 or H-1B), immigration filing, and relocation assistance. Our team guides candidates through every step to ensure a smooth transition for both the healthcare facility and the professional."
    },
    {
      question: "How long does it take to place an international healthcare professional at our facility?",
      answer: "The timeline can vary based on visa processing, credentialing, and individual case details. We keep clients informed throughout the process and help plan for workforce needs accordingly."
    },
    {
      question: "Why should we choose HWS over other international staffing agencies?",
      answer: "HWS combines deep expertise in healthcare staffing with personalized support and compliance-driven processes. Our integrated approach ensures long-term retention, cultural fit, and regulatory adherence, making us a trusted partner in addressing healthcare workforce shortages."
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
                Global Recruitment Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                HWS India: Your Trusted Partner in
                <span className="bg-gradient-to-r from-hallmark-light-green to-hallmark-green bg-clip-text text-transparent"> Global Hiring</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                HWS India helps Founders, Recruiters, and job seekers connect with the world and hire globally from their location with smarter, faster, and fully compliant international hiring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/90 font-semibold text-lg px-8 py-4">
                  Start Global Hiring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  View Our Services
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
                  We help you expand your talent pool across the USA, Europe, and the UAE. Every country has its unique challenges, including compliance, documentation and many more. At HWS India, we help you source skilled white-collar and blue-collar professionals promptly by taking care of all country regulations, employee benefits, and everything else.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {globalServices.map((service, index) => (
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

        {/* Why Employers Trust Section */}
        <section className="py-24 bg-gradient-to-br from-hallmark-off-white via-white to-hallmark-off-white relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-hallmark-blue to-hallmark-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-hallmark-green to-hallmark-dark-green rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-display font-bold text-hallmark-dark mb-6">
                  Why Employers Trust
                  <span className="text-hallmark-green"> HWS India</span> For Building Future-Ready Teams
                </h2>
                <p className="text-xl text-hallmark-neutral-gray max-w-4xl mx-auto leading-relaxed">
                  Hallmark Workforce Solutions empowers global talent to help businesses build future-ready teams that are equipped to thrive in a dynamic global landscape. We enable you to combine top-tier talent with agility, cultural intelligence, international compliance, and cost-efficiency.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {whyEmployersTrust.map((service, index) => (
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
                  Get answers to common questions about our global recruitment and talent deployment services
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
              <h2 className="text-5xl font-display font-bold mb-6">Ready to Build Your Global Team?</h2>
              <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
                Partner with HWS India to access the world's top talent and expand your business globally with confidence, compliance, and lasting workforce success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-hallmark-dark-blue hover:bg-white/90 font-semibold text-lg px-8 py-4">
                  Get Started Today
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

export default OverseasPage;