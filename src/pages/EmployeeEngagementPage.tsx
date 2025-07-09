
import { ArrowRight, Check, Heart, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const EmployeeEngagementPage = () => {
  const benefits = [
    "Increase employee satisfaction by 40%",
    "Reduce turnover rates significantly",
    "Boost productivity and performance",
    "Create a positive workplace culture"
  ];

  const services = [
    {
      icon: <Heart className="h-8 w-8 text-hallmark-dark-green" />,
      title: "Culture Assessment",
      description: "Comprehensive analysis of your current workplace culture and engagement levels."
    },
    {
      icon: <Users className="h-8 w-8 text-hallmark-blue" />,
      title: "Engagement Programs",
      description: "Design and implement programs that foster connection and commitment among employees."
    },
    {
      icon: <Award className="h-8 w-8 text-hallmark-dark-blue" />,
      title: "Recognition Systems",
      description: "Build meaningful recognition and reward systems that motivate and retain talent."
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
              alt="Employee Engagement Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Employee Engagement Solutions</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Build a thriving workplace culture where employees are motivated, connected, and committed to your organization's success.
                </p>
                <Button className="bg-white text-hallmark-dark-green hover:bg-white/90">
                  Boost Your Culture
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                  alt="Employee Engagement Solutions" 
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
                <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">Transform Your Workplace Culture</h2>
                <p className="text-gray-700 mb-8">
                  Our employee engagement solutions create environments where people thrive, collaborate, and deliver their best work.
                </p>
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
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
                  alt="Employee Engagement Benefits" 
                  className="rounded-lg max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Our Employee Engagement Services</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Comprehensive strategies to build engagement, retention, and a positive workplace culture.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-green">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mb-4">
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
        <section className="py-12 md:py-16 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Energize Your Workforce?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Discover how our employee engagement solutions can transform your workplace culture.
            </p>
            <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
              Get Started Today
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

export default EmployeeEngagementPage;
