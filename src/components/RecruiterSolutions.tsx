
import { ArrowRight, Search, Users, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const RecruiterSolutions = () => {
  const solutions = [
    {
      icon: <Search className="h-6 w-6 text-hallmark-green" />,
      title: "Talent Acquisition",
      description: "Comprehensive strategies to attract top talent"
    },
    {
      icon: <Users className="h-6 w-6 text-hallmark-green" />,
      title: "Candidate Experience",
      description: "Optimized recruitment process for exceptional experiences"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-hallmark-green" />,
      title: "Employer Branding",
      description: "Build a strong employer brand that resonates"
    },
    {
      icon: <Award className="h-6 w-6 text-hallmark-green" />,
      title: "Recruitment Tech",
      description: "Cutting-edge technology for streamlined processes"
    }
  ];

  const handleLearnMore = () => {
    toast({
      title: "Feature coming soon!",
      description: "This feature will be available in the next update.",
    });
  };

  return (
    <section id="recruiters" className="py-20 bg-gradient-to-br from-white to-hallmark-off-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hallmark-green text-hallmark-green text-sm mb-3">
            <Briefcase size={14} strokeWidth={1.5} />
            <span>For Recruiters</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mb-3">Innovative Recruiting Solutions</h2>
          <p className="text-hallmark-neutral-gray text-sm">
            Specialized consulting to help you excel in a competitive market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all bg-white p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hallmark-green/30 mb-4">
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-hallmark-dark">{solution.title}</h3>
              <p className="text-hallmark-neutral-gray text-sm mb-4">{solution.description}</p>
              <button 
                onClick={handleLearnMore}
                className="inline-flex items-center text-sm font-medium text-hallmark-green hover:text-hallmark-blue transition-colors"
              >
                Details <ArrowRight size={14} className="ml-1" />
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button 
            onClick={handleLearnMore}
            className="px-6 py-2 border border-hallmark-dark-green text-hallmark-dark-green hover:bg-hallmark-dark-green hover:text-white transition-all duration-300 rounded-md text-sm font-medium"
          >
            All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSolutions;
