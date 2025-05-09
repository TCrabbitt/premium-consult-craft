
import { ChartBar, Globe, Users, Building, ShieldCheck, LightbulbIcon, PieChart, Clock } from "lucide-react";

const StatsItem = ({ icon, number, label, gradient }: { icon: React.ReactNode, number: string, label: string, gradient: string }) => (
  <div className="premium-card p-8 flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300">
    <div className={`mb-4 p-3 rounded-full ${gradient} w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform`}>
      {icon}
    </div>
    <span className="text-4xl font-display font-bold text-hallmark-dark mb-1">{number}</span>
    <span className="text-hallmark-neutral-gray text-center">{label}</span>
  </div>
);

const BusinessImpactItem = ({ icon, title, description, gradient }: { icon: React.ReactNode, title: string, description: string, gradient: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group hover:-translate-y-1 transform transition-all">
    <div className="flex flex-col items-center text-center">
      <div className={`p-3 rounded-full ${gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 text-hallmark-dark">{title}</h3>
      <p className="text-hallmark-neutral-gray">{description}</p>
    </div>
  </div>
);

const Stats = () => {
  const statsData = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      number: "2,500+",
      label: "Clients Served",
      gradient: "bg-gradient-to-r from-hallmark-dark-green to-hallmark-green"
    },
    {
      icon: <ChartBar className="h-6 w-6 text-white" />,
      number: "94%",
      label: "Client Satisfaction",
      gradient: "bg-gradient-to-r from-hallmark-green to-hallmark-blue"
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      number: "32",
      label: "Countries",
      gradient: "bg-gradient-to-r from-hallmark-blue to-hallmark-dark-blue"
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      number: "15+",
      label: "Years Experience",
      gradient: "bg-gradient-to-r from-hallmark-dark-blue to-hallmark-dark-green"
    }
  ];

  const businessImpactData = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Reduced Risk",
      description: "Minimize compliance risks and penalties",
      gradient: "bg-gradient-to-r from-hallmark-light-green to-hallmark-green"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Employee Satisfaction",
      description: "Improved experience and engagement",
      gradient: "bg-gradient-to-r from-hallmark-light-blue to-hallmark-blue"
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Data Visibility",
      description: "Enhanced insights for decision-making",
      gradient: "bg-gradient-to-r from-hallmark-blue to-hallmark-dark-blue"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Faster Onboarding",
      description: "Accelerated time-to-productivity",
      gradient: "bg-gradient-to-r from-hallmark-dark-green to-hallmark-green"
    }
  ];

  return (
    <section className="section-padding bg-hallmark-off-white relative overflow-hidden">
      {/* Accent shape */}
      <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-hallmark-light-blue/10"></div>
      <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-hallmark-light-green/10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle max-w-3xl">
            We have helped businesses worldwide achieve their goals and drive growth through our tailored solutions that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <StatsItem
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              gradient={stat.gradient}
            />
          ))}
        </div>

        {/* Measurable Impact & ROI section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-hallmark-dark">
            Measurable Impact & ROI
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto mb-12">
            Our solutions deliver tangible outcomes that transform your business operations and drive real value.
          </p>
        </div>

        {/* Business impact cards - moved up as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {businessImpactData.map((item, index) => (
            <BusinessImpactItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              gradient={item.gradient}
            />
          ))}
        </div>

        {/* Improved Proven Business Impact section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-xl shadow-premium border border-gray-100/50">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-hallmark-dark">Why We Stand Apart</h3>
            <p className="text-hallmark-neutral-gray mb-6">
              Our approach combines industry expertise, innovative technology, and personalized service to deliver 
              solutions that truly transform how businesses operate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-hallmark-light-green/20 text-hallmark-green shrink-0">
                  <ChartBar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-hallmark-dark mb-1">Strategic Partnership</h4>
                  <p className="text-sm text-hallmark-neutral-gray">We don't just provide software; we become your strategic partner in success.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-hallmark-light-blue/20 text-hallmark-blue shrink-0">
                  <LightbulbIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-hallmark-dark mb-1">Continuous Innovation</h4>
                  <p className="text-sm text-hallmark-neutral-gray">Our solutions evolve with your business needs and industry trends.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-hallmark-off-white to-white p-8 rounded-xl shadow-md border border-gray-100/50">
            <h4 className="text-xl font-medium mb-5 text-hallmark-dark flex items-center gap-2">
              <ChartBar className="text-hallmark-blue h-5 w-5" />
              Client Satisfaction Growth
            </h4>
            
            <div className="space-y-6 mt-6">
              {[
                { year: "2021", value: "55%", now: "95%", label: "Efficiency Increase" },
                { year: "2023", value: "83%", now: "97%", label: "Client Retention" },
                { year: "2024", value: "94%", now: "94%", label: "Client Satisfaction" }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-hallmark-neutral-gray">{item.year}</span>
                      <span className="font-medium text-hallmark-dark-blue">{item.now}</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-hallmark-off-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue rounded-full" 
                         style={{ width: item.now }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-hallmark-dark-blue">
                <ChartBar className="h-5 w-5" />
                <span className="font-semibold text-lg">95% of clients report measurable ROI within 6 months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced "Why Choose HWS" section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-hallmark-dark">
            Why Choose HWS
          </h2>
          <h3 className="text-xl md:text-2xl font-display font-medium mb-8 text-hallmark-blue bg-gradient-to-r from-hallmark-blue to-hallmark-green bg-clip-text text-transparent">
            The Clear Choice for HR & Payroll Solutions
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-hallmark-green to-hallmark-light-green flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-medium text-lg mb-3 text-hallmark-dark">Integration Expertise</h4>
              <p className="text-sm text-hallmark-neutral-gray">Seamlessly connect with your existing business systems.</p>
            </div>
            
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-medium text-lg mb-3 text-hallmark-dark">Dedicated Support</h4>
              <p className="text-sm text-hallmark-neutral-gray">Our experts are always available to assist you.</p>
            </div>
            
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-medium text-lg mb-3 text-hallmark-dark">Customized Solutions</h4>
              <p className="text-sm text-hallmark-neutral-gray">Tailored to your specific business requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
