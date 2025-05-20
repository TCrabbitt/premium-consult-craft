
import { HelpCircle } from "lucide-react";

const FeatureCard = ({ title, icon, description }: { title: string, icon: React.ReactNode, description: string }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-premium border border-gray-50 group hover:shadow-xl hover:border-hallmark-light-green/30 transition-all duration-300">
      <div className="h-14 w-14 rounded-xl bg-hallmark-light-green/10 flex items-center justify-center mb-6 group-hover:bg-hallmark-green/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-4 text-hallmark-dark">{title}</h3>
      <p className="text-hallmark-neutral-gray">{description}</p>
    </div>
  );
};

const WhyHWS = () => {
  const features = [
    {
      title: "End-to-End Solutions",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 9H3.5" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12H3.5" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 15H3.5" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.5 9H22" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.5 12H22" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.5 15H22" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      description: "Comprehensive HR and payroll solutions that work together seamlessly, eliminating the need for multiple vendors."
    },
    {
      title: "Unmatched Expertise",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.43C22 16.43 20 18.43 17 18.43Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.9955 13.75H12.0045" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      description: "Our team includes certified professionals with deep industry experience across HR, payroll, compliance, and technology."
    },
    {
      title: "Global & Local",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.00001 3H9.00001C7.05001 8.84 7.05001 15.16 9.00001 21H8.00001" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      description: "Truly global capabilities with local expertise in 32 countries, ensuring compliance with regional regulations."
    },
    {
      title: "Scalable Solutions",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#1E9971"/></svg>,
      description: "Solutions that grow with your business, from startups to global enterprises, without disruption or re-implementation."
    },
    {
      title: "Superior Technology",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 7.5V12.5L14.5 14.5" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      description: "Cutting-edge platforms with regular updates that incorporate the latest innovations in HR and payroll technology."
    },
    {
      title: "Customer-Centric Approach",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#1E9971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      description: "We put client success first with dedicated account teams, proactive support, and regular consultative reviews."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-hallmark-light-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-hallmark-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-blue/20 text-hallmark-blue font-medium mb-4">
            <HelpCircle size={16} />
            <span>Why Choose HWS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue bg-clip-text text-transparent">
            The Clear Choice for <br className="hidden md:block" /> HR & Payroll Solutions
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto">
            We deliver value that goes beyond traditional HR and payroll services, with a unique approach that transforms 
            how businesses manage their most important asset—their people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              icon={feature.icon} 
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-r from-hallmark-dark-blue to-hallmark-dark-green rounded-xl overflow-hidden shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 p-8 md:p-10">
                <h3 className="text-3xl font-display font-semibold mb-6 text-white">
                  Our Client Promise
                </h3>
                <p className="text-white/90 text-lg mb-8">
                  We're committed to delivering exceptional value at every stage of our partnership. 
                  Here's what you can expect when working with us:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Transparent Partnership</h4>
                      <p className="text-white/80">Clear communication, honest assessment of challenges, and no hidden fees or surprise costs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Measurable Results</h4>
                      <p className="text-white/80">Clearly defined KPIs and regular reporting to track progress and demonstrate ROI.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Continuous Improvement</h4>
                      <p className="text-white/80">Ongoing optimization of your solutions to adapt to changing needs and capture new opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm flex items-center p-8 md:p-10">
                <div className="space-y-6 w-full">
                  <div className="text-center">
                    <h4 className="text-xl font-medium text-white mb-8">What Our Clients Say</h4>
                    <div className="relative mb-8">
                      <div className="absolute -left-2 -top-2 text-6xl text-white/20 font-serif">"</div>
                      <div className="absolute -right-2 -bottom-2 text-6xl text-white/20 font-serif">"</div>
                      <p className="text-white/90 italic relative z-10 px-6">
                        HWS transformed our HR and payroll operations from a headache to a strategic advantage. 
                        Their technology and support have been exceptional.
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full overflow-hidden mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" 
                          alt="Client portrait" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-white">Sarah Johnson</span>
                      <span className="text-white/70 text-sm">VP of HR, TechCorp Inc.</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Client Retention Rate</span>
                      <span className="text-hallmark-light-green font-semibold">96%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                      <div className="bg-hallmark-light-green h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
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

export default WhyHWS;
