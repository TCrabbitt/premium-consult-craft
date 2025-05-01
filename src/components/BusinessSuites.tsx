
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRound, CreditCard, Laptop, BadgeDollarSign, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
      icon: <BadgeDollarSign className="h-6 w-6 text-hallmark-blue" />,
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

  return (
    <section id="business-suites" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
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

        <Tabs defaultValue="payroll" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="flex flex-wrap justify-center w-full gap-4 mb-8 bg-transparent h-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-premium data-[state=active]:scale-105 data-[state=inactive]:bg-hallmark-off-white data-[state=inactive]:opacity-70 hover:opacity-90 h-auto"
              >
                <div
                  className={`h-14 w-14 rounded-lg flex items-center justify-center mb-2 ${
                    tab.id ? "bg-hallmark-light-green/10" : "bg-gray-100"
                  }`}
                >
                  {tab.icon}
                </div>
                <span className="font-medium">{tab.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div className="mt-8">
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <div className="bg-gradient-to-br from-hallmark-dark-blue to-hallmark-dark rounded-xl overflow-hidden shadow-premium">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="p-8 md:p-12 lg:col-span-9 mx-auto">
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        {tab.content.title}
                      </h3>
                      <p className="text-white/80 mb-8 text-lg">
                        {tab.content.description}
                      </p>
                      
                      <Button className="bg-hallmark-green hover:bg-hallmark-dark-green text-white mb-8">
                        Learn more
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {tab.content.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            className="flex items-center justify-between p-4 rounded-md bg-white/10 hover:bg-white/20 text-white transition-all duration-300 group"
                          >
                            <span>{link.text}</span>
                            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default BusinessSuites;
