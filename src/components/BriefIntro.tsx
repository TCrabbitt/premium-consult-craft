
import { Info } from "lucide-react";

const BriefIntro = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-hallmark-off-white to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-blue/20 text-hallmark-blue font-medium">
              <Info size={16} />
              <span>About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Global HR & Payroll Expertise, <span className="text-hallmark-green">Personalized Solutions</span>
            </h2>
            
            <p className="text-hallmark-neutral-gray text-lg">
              With over 15 years of expertise, we deliver comprehensive HR and payroll solutions 
              across 32 countries, serving businesses of all sizes from startups to enterprises.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-medium text-lg mb-2 text-hallmark-dark-blue">Global Reach</h3>
                <p className="text-hallmark-neutral-gray">
                  Operating in 32 countries with localized expertise and compliance knowledge.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-medium text-lg mb-2 text-hallmark-dark-green">Industry Coverage</h3>
                <p className="text-hallmark-neutral-gray">
                  Specialized solutions for technology, healthcare, finance, retail, and manufacturing.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-hallmark-light-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hallmark-light-green/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-premium h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" 
                    alt="Professional consulting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-premium p-6">
                  <h4 className="font-medium text-xl mb-2 text-hallmark-dark">2,500+</h4>
                  <p className="text-sm text-hallmark-neutral-gray">Clients worldwide</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-xl shadow-premium p-6">
                  <h4 className="font-medium text-xl mb-2 text-hallmark-dark">15+ Years</h4>
                  <p className="text-sm text-hallmark-neutral-gray">Industry experience</p>
                </div>
                <div className="bg-white rounded-xl shadow-premium h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefIntro;
