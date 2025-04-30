
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRound, DollarSign, Laptop, CreditCard, ChevronRight } from "lucide-react";

// Tab interface
interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: {
    title: string;
    description: string;
    links: { text: string; url: string }[];
  };
}

const BusinessSuites = () => {
  // Tabs data
  const tabs: Tab[] = [
    {
      id: "hcm",
      name: "HCM",
      icon: <UserRound className="h-6 w-6 text-hallmark-light-green" />,
      content: {
        title: "Simplify HR management.",
        description: "Streamline your workforce management with our integrated HCM solutions.",
        links: [
          { text: "Talent Acquisition", url: "#" },
          { text: "Performance Management", url: "#" },
          { text: "Employee Experience", url: "#" },
        ],
      },
    },
    {
      id: "payroll",
      name: "Payroll",
      icon: <DollarSign className="h-6 w-6 text-hallmark-blue" />,
      content: {
        title: "Your business is complex. Payroll software shouldn't be.",
        description: "Pay employees and contractors around the world in one system with greater visibility, flexibility, and accuracy.",
        links: [
          { text: "Global Payroll", url: "#" },
          { text: "US Payroll", url: "#" },
          { text: "Employer of Record", url: "#" },
          { text: "Contractors", url: "#" },
        ],
      },
    },
    {
      id: "it",
      name: "IT",
      icon: <Laptop className="h-6 w-6 text-hallmark-green" />,
      content: {
        title: "Tech solutions for modern business.",
        description: "Manage your technology infrastructure effortlessly with our comprehensive IT solutions.",
        links: [
          { text: "Device Management", url: "#" },
          { text: "IT Security", url: "#" },
          { text: "Help Desk", url: "#" },
        ],
      },
    },
    {
      id: "spend",
      name: "Spend",
      icon: <CreditCard className="h-6 w-6 text-hallmark-dark-blue" />,
      content: {
        title: "Control business spending.",
        description: "Track, manage, and control all your business expenses in one place.",
        links: [
          { text: "Expense Management", url: "#" },
          { text: "Corporate Cards", url: "#" },
          { text: "Vendor Management", url: "#" },
        ],
      },
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("payroll");

  return (
    <section id="business-suites" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-medium uppercase tracking-wider text-hallmark-neutral-gray mb-4">
            BUSINESS SUITES
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Accelerate every part <br />
            of your business
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-2xl mx-auto">
            Everything you need to manage your business operations in one unified system.
            Our solutions work together seamlessly for optimal efficiency.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white shadow-premium scale-105"
                  : "bg-hallmark-off-white opacity-70 hover:opacity-90"
              }`}
            >
              <div
                className={`h-14 w-14 rounded-lg flex items-center justify-center mb-2 ${
                  activeTab === tab.id ? "bg-hallmark-light-green/10" : "bg-gray-100"
                }`}
              >
                {tab.icon}
              </div>
              <span className={`font-medium ${activeTab === tab.id ? "text-hallmark-dark" : "text-hallmark-neutral-gray"}`}>
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-hallmark-dark-blue to-hallmark-dark rounded-xl overflow-hidden shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ${
                    activeTab === tab.id ? "block" : "hidden"
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    {tab.content.title}
                  </h3>
                  <p className="text-white/80 mb-8 text-lg">
                    {tab.content.description}
                  </p>
                  
                  <Button className="bg-hallmark-green hover:bg-hallmark-dark-green text-white mb-8">
                    Learn more
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tab.content.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="flex items-center justify-between p-4 rounded-md bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                      >
                        <span>{link.text}</span>
                        <ChevronRight className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center justify-center p-12 relative overflow-hidden">
              {activeTab === "payroll" && (
                <div className="relative h-full w-full">
                  <div className="absolute right-0 top-1/4 animate-float">
                    <div className="w-40 h-40 rounded-full bg-hallmark-green/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-hallmark-green/30 flex items-center justify-center">
                        <DollarSign className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-20 top-1/2 animate-float" style={{ animationDelay: "0.5s" }}>
                    <div className="w-32 h-32 rounded-full bg-hallmark-blue/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-hallmark-blue/30 flex items-center justify-center">
                        <DollarSign className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-1/4 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="w-28 h-28 rounded-full bg-hallmark-light-green/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-hallmark-light-green/30 flex items-center justify-center">
                        <DollarSign className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "hcm" && (
                <div className="relative h-full w-full">
                  <div className="absolute right-10 top-1/3 animate-float">
                    <div className="w-40 h-40 rounded-full bg-hallmark-light-green/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-hallmark-light-green/30 flex items-center justify-center">
                        <UserRound className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-30 top-2/3 animate-float" style={{ animationDelay: "0.7s" }}>
                    <div className="w-32 h-32 rounded-full bg-hallmark-green/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-hallmark-green/30 flex items-center justify-center">
                        <UserRound className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "it" && (
                <div className="relative h-full w-full">
                  <div className="absolute right-10 top-1/4 animate-float">
                    <div className="w-40 h-40 rounded-full bg-hallmark-blue/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-hallmark-blue/30 flex items-center justify-center">
                        <Laptop className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-20 bottom-1/3 animate-float" style={{ animationDelay: "0.8s" }}>
                    <div className="w-30 h-30 rounded-full bg-hallmark-dark-blue/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-22 h-22 rounded-full bg-hallmark-dark-blue/30 flex items-center justify-center">
                        <Laptop className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "spend" && (
                <div className="relative h-full w-full">
                  <div className="absolute right-0 top-1/3 animate-float">
                    <div className="w-40 h-40 rounded-full bg-hallmark-dark-blue/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-hallmark-dark-blue/30 flex items-center justify-center">
                        <CreditCard className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-20 top-2/3 animate-float" style={{ animationDelay: "0.6s" }}>
                    <div className="w-32 h-32 rounded-full bg-hallmark-green/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-hallmark-green/30 flex items-center justify-center">
                        <CreditCard className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSuites;
