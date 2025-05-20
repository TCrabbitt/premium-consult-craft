
import { 
  ShieldCheck, 
  Users, 
  BarChart, 
  Rocket, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyHWS = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-hallmark-dark-blue" size={24} strokeWidth={1.5} />,
      title: "Compliance Expertise",
      description: "Navigate complex regulations with confidence"
    },
    {
      icon: <Users className="text-hallmark-dark-blue" size={24} strokeWidth={1.5} />,
      title: "Employee Experience",
      description: "Boost engagement and satisfaction"
    },
    {
      icon: <BarChart className="text-hallmark-dark-blue" size={24} strokeWidth={1.5} />,
      title: "Data Insights",
      description: "Make informed strategic decisions"
    },
    {
      icon: <Rocket className="text-hallmark-dark-blue" size={24} strokeWidth={1.5} />,
      title: "Rapid Implementation",
      description: "Quick deployment with minimal disruption"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-white to-hallmark-off-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hallmark-green to-hallmark-blue"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-hallmark-light-blue/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-hallmark-light-green/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The Clear Choice for<br />
            <span className="bg-gradient-to-r from-hallmark-dark-blue to-hallmark-green bg-clip-text text-transparent">
              HR & Payroll Solutions
            </span>
          </h2>
          <p className="text-hallmark-neutral-gray max-w-2xl mx-auto text-lg">
            Partner with us to transform your HR operations and unlock your organization's full potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hallmark-light-blue/30 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-hallmark-light-blue/10 to-hallmark-light-green/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-xl mb-2 text-hallmark-dark">{feature.title}</h3>
              <p className="text-hallmark-neutral-gray">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-hallmark-dark-blue to-hallmark-green text-white hover:opacity-90 flex items-center gap-2 px-8 py-6 rounded-lg text-lg font-medium shadow-md hover:shadow-xl transition-all mx-auto"
          >
            Discover Our Solutions
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyHWS;
