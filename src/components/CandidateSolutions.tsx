
import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CandidateSolutions = () => {
  const benefits = [
    "Career coaching & development",
    "Exclusive job opportunities"
  ];

  return (
    <section id="candidates" className="section-padding bg-gradient-to-br from-hallmark-off-white to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-hallmark-light-blue/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-hallmark-light-green/10 blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-blue/20 text-hallmark-blue font-medium mb-6">
              <User size={16} strokeWidth={2} />
              <span>For Candidates</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-green bg-clip-text text-transparent">
              Accelerate Your<br />Career Growth
            </h2>
            
            <p className="text-hallmark-neutral-gray mb-6 text-lg max-w-lg">
              Unlock your full potential with our tailored career services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-hallmark-light-blue/20 bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div className="mt-1">
                    <User size={16} className="text-hallmark-blue" strokeWidth={1.5} />
                  </div>
                  <p className="text-hallmark-dark font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-hallmark-blue to-hallmark-dark-blue text-white hover:opacity-90 flex items-center gap-2 px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all">
              Explore Opportunities
              <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-hallmark-light-blue/20 rounded-full blur-3xl"></div>
            <div className="rounded-2xl overflow-hidden shadow-premium h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80" 
                alt="Professional candidate" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-premium transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-hallmark-blue to-hallmark-green flex items-center justify-center">
                  <User className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-hallmark-dark">Career Growth</h4>
                  <div className="h-1.5 w-20 bg-gray-100 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-gradient-to-r from-hallmark-green to-hallmark-blue w-[85%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSolutions;
