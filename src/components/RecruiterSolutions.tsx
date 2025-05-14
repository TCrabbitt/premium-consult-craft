
import { ArrowRight, Search, Users, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const RecruiterSolutions = () => {
  const solutions = [
    {
      icon: <Search className="h-6 w-6 text-hallmark-green" />,
      title: "Talent Acquisition Strategy",
      description: "Develop comprehensive strategies to attract and retain top talent in your industry."
    },
    {
      icon: <Users className="h-6 w-6 text-hallmark-green" />,
      title: "Candidate Experience",
      description: "Optimize your recruitment process to provide an exceptional experience for candidates."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-hallmark-green" />,
      title: "Employer Branding",
      description: "Build a strong employer brand that resonates with your target talent pool."
    },
    {
      icon: <Award className="h-6 w-6 text-hallmark-green" />,
      title: "Recruitment Technology",
      description: "Implement cutting-edge technology to streamline your recruitment processes."
    }
  ];

  const handleLearnMore = () => {
    toast({
      title: "Feature coming soon!",
      description: "This feature will be available in the next update.",
    });
  };

  return (
    <section id="recruiters" className="section-padding bg-white relative overflow-hidden">
      {/* Background accent element */}
      <div className="absolute top-0 left-0 h-full w-1/3 bg-hallmark-off-white rounded-r-[100px] -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-green/20 text-hallmark-green font-medium mb-6">
            <Briefcase size={16} />
            <span>For Recruiters</span>
          </div>
          <h2 className="section-title">Innovative Solutions for Recruiters</h2>
          <p className="section-subtitle max-w-3xl">
            We provide specialized consulting services to help recruitment professionals excel in a competitive market and achieve outstanding hiring results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-premium h-full flex flex-col">
              <div className="bg-hallmark-light-green/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-hallmark-dark">{solution.title}</h3>
              <p className="text-hallmark-neutral-gray mb-6 flex-grow">{solution.description}</p>
              <button 
                onClick={handleLearnMore}
                className="inline-flex items-center font-medium text-hallmark-green hover:text-hallmark-blue transition-colors"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={handleLearnMore}
            className="px-6 py-3 border border-hallmark-dark-green text-hallmark-dark-green hover:bg-hallmark-dark-green hover:text-white transition-all duration-300 rounded-lg font-medium"
          >
            Explore All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSolutions;
