
import { ArrowRight, Check, Rocket, Brain, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Solution3Page = () => {
  const benefits = [
    "Boost innovation capacity by 80%",
    "Accelerate product development",
    "Enhance market competitiveness",
    "Future-proof your business"
  ];

  const uniquePoints = [
    {
      icon: <Rocket className="h-8 w-8 text-hallmark-dark-blue" />,
      title: "Innovation Accelerator",
      description: "Rapid prototyping and development frameworks for faster innovation"
    },
    {
      icon: <Brain className="h-8 w-8 text-hallmark-dark-green" />,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that predict trends and opportunities"
    },
    {
      icon: <Target className="h-8 w-8 text-hallmark-blue" />,
      title: "Strategic Focus",
      description: "Targeted solutions aligned with your business objectives"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we see results?",
      answer: "Initial results are typically visible within 30 days, with full impact realized in 3-6 months."
    },
    {
      question: "Is this suitable for small businesses?",
      answer: "Absolutely! Our solution scales from startups to enterprise, with flexible pricing models."
    },
    {
      question: "What ongoing support is provided?",
      answer: "We provide continuous monitoring, regular updates, and dedicated success management."
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
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Solution 3 Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Innovation & Growth Solution</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Unlock your organization's potential with our comprehensive innovation framework designed to drive sustainable growth.
                </p>
                <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
                  Innovate Now
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                  alt="Solution 3 Hero" 
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
              <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">The Innovation Gap</h2>
              <p className="text-lg text-gray-700 mb-8">
                In today's rapidly evolving market, organizations struggle to maintain competitive advantage. 
                Traditional approaches to innovation often fall short, leading to missed opportunities and stagnant growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Slow Innovation</h3>
                  <p className="text-gray-600">Lengthy development cycles hindering market response</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Resource Constraints</h3>
                  <p className="text-gray-600">Limited resources for R&D and innovation initiatives</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="font-semibold text-hallmark-dark mb-2">Market Uncertainty</h3>
                  <p className="text-gray-600">Difficulty predicting market trends and demands</p>
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
                <h2 className="text-3xl font-display font-bold mb-6 text-hallmark-dark">Comprehensive Innovation Framework</h2>
                <p className="text-gray-700 mb-6">
                  Our innovation solution combines strategic planning, rapid prototyping, and data-driven insights 
                  to create a sustainable competitive advantage for your organization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Strategic innovation roadmapping</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Rapid prototyping and testing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Market intelligence and trend analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-hallmark-green mr-3" />
                    <span>Innovation portfolio management</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Innovation Framework" 
                  className="rounded-lg shadow-premium max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How This is Helping */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Driving Innovation Success</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Transform your innovation capabilities with proven methodologies and cutting-edge tools.
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Innovation Success" 
                  className="rounded-lg max-h-80 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why This */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Innovation Excellence</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Experience the difference with our proven innovation methodology.
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
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Innovation Impact</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Measurable results from our innovation initiatives worldwide.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-dark-blue mb-2">200+</div>
                <div className="text-gray-600">Innovation Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-dark-green mb-2">80%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-blue mb-2">5x</div>
                <div className="text-gray-600">Faster Time-to-Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hallmark-green mb-2">150%</div>
                <div className="text-gray-600">Revenue Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Innovation FAQs</h2>
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
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Accelerate Innovation?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start your innovation journey with our comprehensive solution framework.
            </p>
            <Button className="bg-white text-hallmark-dark-green hover:bg-white/90">
              Begin Innovation
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

export default Solution3Page;
