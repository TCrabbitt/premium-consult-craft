
import { ArrowRight, Globe, DollarSign, Euro, IndianRupee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GlobalSolutions = () => {
  return (
    <section id="global-solutions" className="section-padding bg-hallmark-off-white relative overflow-hidden">
      {/* Background accent element */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-white rounded-l-[100px] -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Main illustration with overlapping cards */}
            <div className="relative">
              <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Global team collaboration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Team card */}
              <Card className="absolute -top-10 -left-5 md:-left-10 bg-white p-4 rounded-lg shadow-premium w-64 z-20">
                <h4 className="font-medium text-hallmark-dark mb-2 text-left">Team</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-hallmark-light-green/20 flex items-center justify-center overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
                      </div>
                      <span className="text-sm font-medium">Christopher S</span>
                    </div>
                    <span className="text-sm text-hallmark-dark-green">€ 45,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-hallmark-light-blue/20 flex items-center justify-center overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Team Member" />
                      </div>
                      <span className="text-sm font-medium">Wilson D</span>
                    </div>
                    <span className="text-sm text-hallmark-dark-green">$ 78,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-hallmark-light-green/20 flex items-center justify-center overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
                      </div>
                      <span className="text-sm font-medium">Charlotte L</span>
                    </div>
                    <span className="text-sm text-hallmark-dark-green">$ 62,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-hallmark-dark-blue hover:bg-hallmark-blue">
                  Process Payroll
                </Button>
              </Card>

              {/* Currency bubbles */}
              <div className="absolute bottom-10 right-5 bg-white rounded-full py-2 px-4 shadow-premium flex items-center gap-2">
                <Euro className="text-hallmark-dark-blue w-4 h-4" />
                <span className="text-xs font-medium">EUR 4,923</span>
              </div>
              
              <div className="absolute bottom-24 right-16 bg-white rounded-full py-2 px-4 shadow-premium flex items-center gap-2">
                <DollarSign className="text-hallmark-blue w-4 h-4" />
                <span className="text-xs font-medium">USD 6,340</span>
              </div>
              
              <div className="absolute bottom-40 right-8 bg-white rounded-full py-2 px-4 shadow-premium flex items-center gap-2">
                <IndianRupee className="text-hallmark-green w-4 h-4" />
                <span className="text-xs font-medium">INR 30,560</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Global staffing <span className="text-hallmark-green">made simple</span>
            </h2>
            <p className="text-lg text-hallmark-neutral-gray mb-8">
              No matter how many locations or currencies you're working with, we keep all your global talent acquisition and management in one place.
            </p>
            
            <Card className="bg-hallmark-light-green/10 border-0 p-8 mb-6">
              <div className="flex flex-col space-y-4">
                <div className="h-10 w-10 rounded-full bg-hallmark-light-green/20 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-hallmark-green" />
                </div>
                <h3 className="text-xl font-semibold">International Talent Solutions</h3>
                <p className="text-hallmark-neutral-gray">
                  Access our network of candidates across 40+ countries with expertise in navigating local employment laws.
                </p>
                <div>
                  <Button variant="ghost" className="p-0 h-auto text-hallmark-green hover:text-hallmark-blue hover:bg-transparent">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="bg-hallmark-light-blue/10 border-0 p-8">
              <div className="flex flex-col space-y-4">
                <div className="h-10 w-10 rounded-full bg-hallmark-light-blue/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-hallmark-blue" />
                </div>
                <h3 className="text-xl font-semibold">Multi-Currency Payroll Services</h3>
                <p className="text-hallmark-neutral-gray">
                  Simplify payroll management across different currencies and tax jurisdictions with our integrated services.
                </p>
                <div>
                  <Button variant="ghost" className="p-0 h-auto text-hallmark-blue hover:text-hallmark-dark-blue hover:bg-transparent">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSolutions;
