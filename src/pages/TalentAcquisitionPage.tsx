
import { ArrowRight, Check, Users, Search, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const TalentAcquisitionPage = () => {
  const benefits = [
    "Reduce time-to-hire by up to 50%",
    "Improve quality of hire metrics",
    "Build stronger employer brand",
    "Streamline recruitment processes"
  ];

  const services = [
    {
      icon: <Search className="h-8 w-8 text-hallmark-dark-blue" />,
      title: "Strategic Sourcing",
      description: "Advanced sourcing strategies to identify and attract top talent from diverse channels."
    },
    {
      icon: <Target className="h-8 w-8 text-hallmark-dark-green" />,
      title: "Employer Branding",
      description: "Build a compelling employer brand that attracts and retains the best candidates."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-hallmark-blue" />,
      title: "Process Optimization",
      description: "Streamline your recruitment workflow for maximum efficiency and candidate experience."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
              alt="Talent Acquisition Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Talent Acquisition Excellence</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Transform your hiring process with strategic talent acquisition solutions that attract, engage, and secure top performers.
                </p>
                <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
                  Start Your Transformation
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Talent Acquisition Solutions" 
                  className="rounded-lg shadow-xl max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">Why Our Talent Acquisition Solutions Work</h2>
                <p className="text-gray-700 mb-8">
                  Our proven methodology combines cutting-edge technology with human expertise to deliver exceptional hiring outcomes.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 flex-shrink-0">
                        <Check size={16} className="text-hallmark-blue" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-hallmark-off-white p-8 rounded-lg shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1573164713712-03790a178651" 
                  alt="Talent Acquisition Benefits" 
                  className="rounded-lg max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Our Talent Acquisition Services</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Comprehensive solutions designed to optimize every aspect of your talent acquisition strategy.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-blue">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-hallmark-dark-green to-hallmark-green text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Transform Your Hiring Process?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our talent acquisition solutions can help you build a world-class team.
            </p>
            <Button className="bg-white text-hallmark-dark-green hover:bg-white/90">
              Schedule a Consultation
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

export default TalentAcquisitionPage;
