
import { ArrowRight, Briefcase, Search, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RecruiterSolutions = () => {
  const solutions = [
    {
      icon: <Search className="h-6 w-6 text-consulting-green" />,
      title: "Talent Acquisition Strategy",
      description: "Develop comprehensive strategies to attract and retain top talent in your industry."
    },
    {
      icon: <Users className="h-6 w-6 text-consulting-green" />,
      title: "Candidate Experience",
      description: "Optimize your recruitment process to provide an exceptional experience for candidates."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-consulting-green" />,
      title: "Employer Branding",
      description: "Build a strong employer brand that resonates with your target talent pool."
    },
    {
      icon: <Award className="h-6 w-6 text-consulting-green" />,
      title: "Recruitment Technology",
      description: "Implement cutting-edge technology to streamline your recruitment processes."
    }
  ];

  return (
    <section id="recruiters" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-consulting-light-green/20 text-consulting-green font-medium mb-6">
            <Briefcase size={16} />
            <span>For Recruiters</span>
          </div>
          <h2 className="section-title">Innovative Solutions for Recruiters</h2>
          <p className="section-subtitle">
            We provide specialized consulting services to help recruitment professionals excel in a competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-gray-100 hover:border-consulting-light-green/30">
              <div className="bg-consulting-light-green/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{solution.title}</h3>
              <p className="text-consulting-neutral-gray mb-6">{solution.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center font-medium text-consulting-green hover:text-consulting-blue transition-colors"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="btn-secondary">
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSolutions;
