
import { CheckCircle, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CandidateSolutions = () => {
  const benefits = [
    "Personalized career coaching and development plans",
    "Resume and interview preparation assistance",
    "Access to exclusive job opportunities",
    "Skill assessment and enhancement recommendations",
    "Networking opportunities with industry professionals",
    "Ongoing support throughout your career journey"
  ];

  return (
    <section id="candidates" className="section-padding bg-gradient-to-br from-consulting-off-white to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-consulting-light-blue/20 text-consulting-blue font-medium mb-6">
              <User size={16} />
              <span>For Candidates</span>
            </div>
            
            <h2 className="section-title">Accelerate Your Career Growth</h2>
            
            <p className="text-consulting-neutral-gray mb-8">
              Our candidate-focused services are designed to help professionals at all stages of their careers achieve their goals and reach their full potential.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-consulting-green shrink-0 mt-0.5" />
                  <p className="text-consulting-neutral-gray">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-consulting-blue text-white hover:bg-consulting-blue/90 flex items-center gap-2">
                Register Now
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="border-consulting-blue text-consulting-blue hover:bg-consulting-blue/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-consulting-light-blue/20 rounded-full blur-3xl"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=80" 
                alt="Professional candidate" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-consulting-light-green/30 flex items-center justify-center">
                  <User className="h-5 w-5 text-consulting-green" />
                </div>
                <div>
                  <h4 className="font-medium">Career Growth</h4>
                  <p className="text-xs text-consulting-neutral-gray">Personalized Support</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-consulting-green w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSolutions;
