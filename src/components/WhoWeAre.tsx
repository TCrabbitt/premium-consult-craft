
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-hallmark-off-white rounded-bl-[100px] -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-hallmark-light-blue/10 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80" 
                  alt="Team members collaborating" 
                  className="rounded-lg h-48 object-cover w-full shadow-premium"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80" 
                  alt="Office environment" 
                  className="rounded-lg h-64 object-cover w-full shadow-premium"
                />
              </div>
              <div className="space-y-6 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=500&q=80" 
                  alt="Business meeting" 
                  className="rounded-lg h-64 object-cover w-full shadow-premium"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?auto=format&fit=crop&w=500&q=80" 
                  alt="Teamwork" 
                  className="rounded-lg h-48 object-cover w-full shadow-premium"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 right-10 bg-white rounded-lg p-4 shadow-premium z-10 border-l-4 border-hallmark-green">
              <p className="text-sm font-semibold text-hallmark-dark">Trusted by Fortune 500</p>
              <p className="text-xs text-hallmark-neutral-gray">Industry Leaders</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-green/20 text-hallmark-green font-medium mb-6">
              <Users size={16} />
              <span>Who We Are</span>
            </div>
            
            <h2 className="section-title text-4xl md:text-5xl">Transforming Businesses Through Strategic Expertise</h2>
            
            <div className="space-y-6 text-hallmark-neutral-gray mt-8">
              <p className="text-lg">
                We are a premier consulting firm with over 15 years of experience delivering exceptional results for businesses across industries. Our team of seasoned experts combines deep industry knowledge with innovative thinking to create customized solutions that drive growth and success.
              </p>
              <p>
                Our collaborative approach ensures that we understand your unique challenges and opportunities, allowing us to develop strategies that align with your specific goals and vision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-hallmark-dark-blue mb-3">Mission</h3>
                  <p className="text-sm">To empower businesses with the insights and strategies they need to thrive in an ever-changing landscape.</p>
                </div>
                <div className="bg-hallmark-off-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-hallmark-dark-blue mb-3">Vision</h3>
                  <p className="text-sm">To be the trusted partner that organizations turn to for transformative business solutions.</p>
                </div>
              </div>
              
              <div>
                <Button className="bg-gradient-to-r from-hallmark-green to-hallmark-dark-blue text-white hover:opacity-90 flex items-center gap-2">
                  Contact Us
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
