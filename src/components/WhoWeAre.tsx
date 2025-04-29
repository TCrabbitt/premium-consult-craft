
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-consulting-light-blue/10 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?auto=format&fit=crop&w=500&q=80" 
                  alt="Team members collaborating" 
                  className="rounded-lg h-48 object-cover w-full shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=500&q=80" 
                  alt="Office environment" 
                  className="rounded-lg h-64 object-cover w-full shadow-md"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80" 
                  alt="Business meeting" 
                  className="rounded-lg h-64 object-cover w-full shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551836022-aadb801c60ae?auto=format&fit=crop&w=500&q=80" 
                  alt="Teamwork" 
                  className="rounded-lg h-48 object-cover w-full shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-consulting-light-green/20 text-consulting-green font-medium mb-6">
              <Users size={16} />
              <span>Who We Are</span>
            </div>
            
            <h2 className="section-title">Transforming Businesses Through Strategic Expertise</h2>
            
            <div className="space-y-6 text-consulting-neutral-gray">
              <p>
                We are a premier consulting firm with over 15 years of experience delivering exceptional results for businesses across industries. Our team of seasoned experts combines deep industry knowledge with innovative thinking to create customized solutions that drive growth and success.
              </p>
              <p>
                Our collaborative approach ensures that we understand your unique challenges and opportunities, allowing us to develop strategies that align with your specific goals and vision.
              </p>
              
              <div className="flex flex-wrap gap-8 py-4">
                <div>
                  <h3 className="text-xl font-semibold text-consulting-dark-blue mb-2">Mission</h3>
                  <p className="text-sm">To empower businesses with the insights and strategies they need to thrive in an ever-changing landscape.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-consulting-dark-blue mb-2">Vision</h3>
                  <p className="text-sm">To be the trusted partner that organizations turn to for transformative business solutions.</p>
                </div>
              </div>
              
              <div>
                <Button className="bg-consulting-green text-white hover:bg-consulting-green/90">
                  Contact Us
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
