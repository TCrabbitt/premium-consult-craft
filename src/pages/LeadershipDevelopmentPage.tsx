
import { ArrowRight, Check, Crown, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const LeadershipDevelopmentPage = () => {
  const benefits = [
    "Build strong leadership pipeline",
    "Improve team performance by 35%",
    "Enhance decision-making capabilities",
    "Increase employee engagement and retention"
  ];

  const services = [
    {
      icon: <Crown className="h-8 w-8 text-hallmark-dark-blue" />,
      title: "Executive Coaching",
      description: "One-on-one coaching for senior leaders to enhance their strategic thinking and leadership presence."
    },
    {
      icon: <Target className="h-8 w-8 text-hallmark-dark-green" />,
      title: "Leadership Assessment",
      description: "Comprehensive evaluation of leadership capabilities and potential across your organization."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-hallmark-blue" />,
      title: "Succession Planning",
      description: "Strategic planning to identify and develop future leaders within your organization."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-blue to-hallmark-dark-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
              alt="Leadership Development Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Leadership Development Programs</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Cultivate exceptional leaders who inspire teams, drive results, and navigate complex business challenges with confidence.
                </p>
                <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
                  Develop Your Leaders
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0" 
                  alt="Leadership Development Solutions" 
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
                <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">Build Tomorrow's Leaders Today</h2>
                <p className="text-gray-700 mb-8">
                  Our leadership development programs are designed to create impactful leaders who can drive organizational success and inspire high performance.
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Leadership Development Benefits" 
                  className="rounded-lg max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Our Leadership Development Services</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Comprehensive programs to identify, develop, and retain exceptional leaders at every level.
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
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Cultivate Great Leaders?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's create a leadership development program that drives lasting organizational success.
            </p>
            <Button className="bg-white text-hallmark-dark-green hover:bg-white/90">
              Start Building Leaders
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </Section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default LeadershipDevelopmentPage;
