
import { TrendingUp, ChartBar, BarChart4, Database, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { cn } from "@/lib/utils";

const metricsData = [
  { name: '2021', value: 55 },
  { name: '2022', value: 72 },
  { name: '2023', value: 89 },
  { name: '2024', value: 95 }
];

const KeyMetrics = () => {
  const chartConfig = {
    roi: { label: "ROI", color: "#1A9971" },
    savings: { label: "Savings", color: "#2E7BC4" },
    efficiency: { label: "Efficiency", color: "#5362D5" },
    satisfaction: { label: "Satisfaction", color: "#924FB5" }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-hallmark-light-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-hallmark-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-hallmark-light-blue/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-hallmark-light-blue/30 to-hallmark-light-green/30 text-hallmark-dark-blue font-medium mb-4">
            <TrendingUp size={18} className="text-hallmark-blue" />
            <span>Key Performance Indicators</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hallmark-dark to-hallmark-dark-blue bg-clip-text text-transparent">
            Measurable Impact & ROI
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto">
            Our solutions deliver tangible business results with proven returns on investment.
            Here's what our clients typically experience after implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced metric cards with hover animation */}
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-hallmark-green to-hallmark-light-green"></div>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-light-green/20 rounded-full blur-lg transform scale-75 group-hover:scale-90 transition-all"></div>
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-hallmark-green to-hallmark-light-green flex items-center justify-center transition-transform group-hover:scale-105">
                    <span className="text-5xl font-display font-bold text-white">42<span className="text-2xl">%</span></span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Time Savings</h3>
                <p className="text-hallmark-neutral-gray">
                  Reduction in time spent on HR administrative tasks
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue"></div>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-light-blue/20 rounded-full blur-lg transform scale-75 group-hover:scale-90 transition-all"></div>
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-hallmark-blue to-hallmark-light-blue flex items-center justify-center transition-transform group-hover:scale-105">
                    <span className="text-5xl font-display font-bold text-white">31<span className="text-2xl">%</span></span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Cost Reduction</h3>
                <p className="text-hallmark-neutral-gray">
                  Average decrease in payroll processing costs
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue"></div>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-dark-blue/20 rounded-full blur-lg transform scale-75 group-hover:scale-90 transition-all"></div>
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-hallmark-dark-blue to-hallmark-blue flex items-center justify-center transition-transform group-hover:scale-105">
                    <span className="text-5xl font-display font-bold text-white">99.8<span className="text-2xl">%</span></span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Accuracy</h3>
                <p className="text-hallmark-neutral-gray">
                  Payroll accuracy rate for businesses using our solutions
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-hallmark-dark-green to-hallmark-green"></div>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-dark-green/20 rounded-full blur-lg transform scale-75 group-hover:scale-90 transition-all"></div>
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-hallmark-dark-green to-hallmark-green flex items-center justify-center transition-transform group-hover:scale-105">
                    <span className="text-4xl font-display font-bold text-white">3.5<span className="text-2xl">x</span></span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">ROI</h3>
                <p className="text-hallmark-neutral-gray">
                  Average return on investment within first year
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Enhanced data visualization section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-hallmark-off-white to-white rounded-xl shadow-premium border border-gray-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-hallmark-dark">Proven Business Impact</h3>
              <p className="text-hallmark-neutral-gray mb-8">
                These aren't just numbers – they represent real improvements in efficiency, accuracy, and 
                cost-effectiveness for our clients. Our solutions deliver measurable ROI across various 
                business metrics.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark flex items-center gap-2">
                      <DollarSign size={18} className="text-hallmark-green" />
                      Implementation Speed
                    </span>
                    <span className="text-hallmark-green font-medium">68% faster</span>
                  </div>
                  <div className="h-2 w-full bg-hallmark-off-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-hallmark-green to-hallmark-light-green rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark flex items-center gap-2">
                      <Database size={18} className="text-hallmark-blue" />
                      Reporting Efficiency
                    </span>
                    <span className="text-hallmark-blue font-medium">83% faster</span>
                  </div>
                  <div className="h-2 w-full bg-hallmark-off-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue rounded-full" style={{ width: "83%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark flex items-center gap-2">
                      <BarChart4 size={18} className="text-hallmark-dark-blue" />
                      Employee Self-Service Adoption
                    </span>
                    <span className="text-hallmark-dark-blue font-medium">92%</span>
                  </div>
                  <div className="h-2 w-full bg-hallmark-off-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100/50">
              <h4 className="text-xl font-medium mb-5 text-hallmark-dark flex items-center gap-2">
                <ChartBar size={20} className="text-hallmark-blue" />
                Client Satisfaction Growth
              </h4>
              
              <div className="h-64">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={metricsData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {metricsData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={`url(#colorGradient${index})`} 
                          />
                        ))}
                      </Bar>
                      <defs>
                        <linearGradient id="colorGradient0" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1A9971" stopOpacity={1} />
                          <stop offset="100%" stopColor="#66CAA6" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="colorGradient1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2E7BC4" stopOpacity={1} />
                          <stop offset="100%" stopColor="#7BADE0" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5362D5" stopOpacity={1} />
                          <stop offset="100%" stopColor="#98A2E8" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="colorGradient3" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#924FB5" stopOpacity={1} />
                          <stop offset="100%" stopColor="#C68FD6" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <ul className="mt-6 flex flex-wrap justify-center gap-4">
                {[
                  { year: "2021", value: "55%", color: "bg-gradient-to-r from-hallmark-green to-hallmark-light-green" },
                  { year: "2022", value: "72%", color: "bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue" },
                  { year: "2023", value: "89%", color: "bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue" },
                  { year: "2024", value: "95%", color: "bg-gradient-to-r from-hallmark-dark-green to-hallmark-green" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className={cn("h-3 w-3 rounded-sm", item.color)}></span>
                    <span className="text-sm">{item.year}: <span className="font-medium">{item.value}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Added feature benefits */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Reduced Risk",
                description: "Minimize compliance risks and penalties",
                icon: <div className="p-3 rounded-full bg-hallmark-light-green/20 text-hallmark-green">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              },
              {
                title: "Employee Satisfaction",
                description: "Improved experience and engagement",
                icon: <div className="p-3 rounded-full bg-hallmark-light-blue/20 text-hallmark-blue">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              },
              {
                title: "Data Visibility",
                description: "Enhanced insights for decision-making",
                icon: <div className="p-3 rounded-full bg-hallmark-blue/20 text-hallmark-dark-blue">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              },
              {
                title: "Faster Onboarding",
                description: "Accelerated time-to-productivity",
                icon: <div className="p-3 rounded-full bg-hallmark-green/20 text-hallmark-dark-green">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="font-medium text-hallmark-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-hallmark-neutral-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
