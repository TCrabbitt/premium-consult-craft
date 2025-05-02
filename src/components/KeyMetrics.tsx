
import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const KeyMetrics = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-hallmark-light-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-hallmark-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-blue/20 text-hallmark-blue font-medium mb-4">
            <TrendingUp size={16} />
            <span>Key Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hallmark-dark-green to-hallmark-blue bg-clip-text text-transparent">
            Measurable Impact & ROI
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto">
            Our solutions deliver tangible business results. Here's what our clients typically experience after implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-hallmark-green to-hallmark-light-green"></div>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-light-green/20 rounded-full blur-lg transform scale-75"></div>
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-hallmark-green to-hallmark-light-green flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white">42%</span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Time Savings</h3>
                <p className="text-hallmark-neutral-gray">
                  Reduction in time spent on HR administrative tasks
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue"></div>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-light-blue/20 rounded-full blur-lg transform scale-75"></div>
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-hallmark-blue to-hallmark-light-blue flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white">31%</span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Cost Reduction</h3>
                <p className="text-hallmark-neutral-gray">
                  Average decrease in payroll processing costs
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue"></div>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-dark-blue/20 rounded-full blur-lg transform scale-75"></div>
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-hallmark-dark-blue to-hallmark-blue flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white">99.8%</span>
                  </div>
                </div>
                <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Accuracy</h3>
                <p className="text-hallmark-neutral-gray">
                  Payroll accuracy rate for businesses using our solutions
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-premium hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-hallmark-dark-green to-hallmark-green"></div>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-hallmark-dark-green/20 rounded-full blur-lg transform scale-75"></div>
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-hallmark-dark-green to-hallmark-green flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-white">3.5x</span>
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
        
        <div className="mt-12 p-8 bg-gradient-to-r from-hallmark-off-white to-white rounded-xl shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-hallmark-dark">Real Business Impact</h3>
              <p className="text-hallmark-neutral-gray mb-6">
                These aren't just numbers – they represent real improvements in efficiency, accuracy, and 
                cost-effectiveness for our clients. Our solutions deliver measurable ROI across various 
                business metrics.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduced compliance risks and penalties",
                  "Improved employee experience and satisfaction",
                  "Enhanced data visibility for strategic decision-making",
                  "Faster onboarding and time-to-productivity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-hallmark-green mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-hallmark-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark">Implementation Speed</span>
                    <span className="text-hallmark-green font-medium">68% faster</span>
                  </div>
                  <div className="w-full bg-hallmark-off-white rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-hallmark-green to-hallmark-light-green h-2.5 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark">Reporting Efficiency</span>
                    <span className="text-hallmark-blue font-medium">83% faster</span>
                  </div>
                  <div className="w-full bg-hallmark-off-white rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-hallmark-blue to-hallmark-light-blue h-2.5 rounded-full" style={{ width: "83%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-hallmark-dark">Employee Self-Service Adoption</span>
                    <span className="text-hallmark-dark-blue font-medium">92%</span>
                  </div>
                  <div className="w-full bg-hallmark-off-white rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-hallmark-dark-blue to-hallmark-blue h-2.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
