
import { useState } from "react";
import { 
  ArrowRight,
  Search,
  Settings,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: 1,
    icon: <Search className="h-8 w-8 text-consulting-dark-purple" />,
    title: "Strategic Analysis",
    description: "Comprehensive market research and competitor analysis to identify opportunities and threats.",
    link: "#"
  },
  {
    id: 2,
    icon: <Settings className="h-8 w-8 text-consulting-dark-purple" />,
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency to reduce costs and increase productivity.",
    link: "#"
  },
  {
    id: 3,
    icon: <User className="h-8 w-8 text-consulting-dark-purple" />,
    title: "Leadership Development",
    description: "Cultivate strong leadership skills and build high-performing teams for sustainable growth.",
    link: "#"
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Our Solutions</h2>
          <p className="text-consulting-neutral-gray max-w-2xl mx-auto">
            Tailored consulting services designed to address your specific business challenges and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`p-6 transition-all duration-300 border border-gray-100 hover:border-consulting-light-purple/30 hover:shadow-xl h-full flex flex-col ${
                hoveredCard === service.id ? "transform -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-consulting-soft-gray rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
              <p className="text-consulting-neutral-gray mb-6 flex-grow">{service.description}</p>
              <a 
                href={service.link} 
                className="inline-flex items-center font-medium text-consulting-dark-purple hover:text-consulting-light-purple transition-colors"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="btn-secondary">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
