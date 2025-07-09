
import { ArrowRight, Check, Users, TrendingUp, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Solution1Page = () => {
  const benefits = [
    "Streamline complex workflows",
    "Reduce operational costs by 40%",
    "Improve team productivity",
    "Enhance customer satisfaction"
  ];

  const uniquePoints = [
    {
      icon: <Shield className="h-8 w-8 text-hallmark-dark-blue" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your sensitive data"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-hallmark-dark-green" />,
      title: "Proven Results",
      description: "Trusted by 500+ companies worldwide with measurable outcomes"
    },
    {
      icon: <Users className="h-8 w-8 text-hallmark-blue" />,
      title: "Expert Support",
      description: "24/7 dedicated support team to ensure seamless implementation"
    }
  ];

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Typically 2-4 weeks depending on your organization size and complexity."
    },
    {
      question: "Is training included?",
      answer: "Yes, we provide comprehensive training for all users and administrators."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 support via phone, email, and live chat with dedicated account managers."
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
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0" 
              alt="Solution 1 Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Advanced Business Solution</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Transform your operations with our comprehensive solution designed to streamline processes and drive growth.
                </p>
                <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
                  Get Started Today
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0" 
                  alt="Solution 1 Hero" 
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
              <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">The Challenge</h2>
              <p className="text-lg text-gray-700 mb-8">
                Modern businesses struggle with fragmented systems, inefficient processes, and lack of real-time visibility. 
                This leads to increased costs, delayed decisions, and missed opportunities in today's competitive market.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Inefficient Processes</h3>
                  <p className="text-gray-600">Manual workflows causing delays and errors</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Data Silos</h3>
                  <p className="text-gray-600">Disconnected systems preventing unified insights</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Scaling Challenges</h3>
                  <p className="text-gray-600">Difficulty adapting to growing business needs</p>
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
                <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">Our Solution</h2>
                <p className="text-gray-700 mb-6">
                  Our comprehensive platform integrates all your business processes into one unified system, 
                  providing real-time insights and automated workflows that scale with your organization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Unified dashboard for all operations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Automated workflow management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Real-time analytics and reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Seamless integration capabilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Solution Overview" 
                  className="rounded-lg shadow-premium max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How This is Helping */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">How This is Helping</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              See the tangible benefits and value our solution brings to your organization.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                  alt="Benefits" 
                  className="rounded-lg max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why This */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Why Choose Our Solution</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Discover what sets us apart from the competition and why industry leaders trust us.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {uniquePoints.map((point, index) => (
                <Card key={index} className="shadow-premium hover:shadow-xl transition-all duration-300 border-t-4 border-t-hallmark-blue">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
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
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Global Impact</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              See how our solution is making a difference worldwide.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-dark-blue mb-2">500+</div>
                <div className="text-gray-600">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-dark-green mb-2">40%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-blue mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-green mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Frequently Asked Questions</h2>
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
        <section className="py-12 md:py-16 bg-gradient-to-r from-hallmark-dark-green to-hallmark-green text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solution can help you achieve your goals.
            </p>
            <Button className="bg-white text-hallmark-dark-green hover:bg-white/90">
              Schedule a Demo
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

export default Solution1Page;
