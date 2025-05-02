
import { ChartBar, Globe, Users, Building } from "lucide-react";

const StatsItem = ({ icon, number, label, gradient }: { icon: React.ReactNode, number: string, label: string, gradient: string }) => (
  <div className="premium-card p-8 flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300">
    <div className={`mb-4 p-3 rounded-full ${gradient} w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform`}>
      {icon}
    </div>
    <span className="text-4xl font-display font-bold text-hallmark-dark mb-1">{number}</span>
    <span className="text-hallmark-neutral-gray text-center">{label}</span>
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
      </div>
    </section>
  );
};

export default Stats;
