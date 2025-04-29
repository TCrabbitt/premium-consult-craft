
import { ChartBar, Globe, Users, Building } from "lucide-react";

const StatsItem = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => (
  <div className="flex flex-col items-center p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 p-3 bg-consulting-light-blue/20 rounded-full">
      {icon}
    </div>
    <span className="text-4xl font-display font-semibold text-consulting-blue mb-1">{number}</span>
    <span className="text-consulting-neutral-gray text-center">{label}</span>
  </div>
);

const Stats = () => {
  const statsData = [
    {
      icon: <Users className="h-6 w-6 text-consulting-blue" />,
      number: "2,500+",
      label: "Clients Served"
    },
    {
      icon: <ChartBar className="h-6 w-6 text-consulting-blue" />,
      number: "94%",
      label: "Client Satisfaction"
    },
    {
      icon: <Globe className="h-6 w-6 text-consulting-blue" />,
      number: "32",
      label: "Countries"
    },
    {
      icon: <Building className="h-6 w-6 text-consulting-blue" />,
      number: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-consulting-off-white to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            We have helped businesses worldwide achieve their goals and drive growth through our tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatsItem
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
