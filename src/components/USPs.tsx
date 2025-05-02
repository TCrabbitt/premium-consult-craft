
import { Award } from "lucide-react";

const USPs = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-hallmark-off-white to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      <div className="absolute top-40 right-0 w-64 h-64 bg-hallmark-light-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-hallmark-light-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-green/20 text-hallmark-green font-medium mb-4">
            <Award size={16} />
            <span>Our Unique Selling Points</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-green bg-clip-text text-transparent">
            Why We Stand Apart
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto">
            Our unique advantages deliver exceptional value and results that other providers simply can't match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-premium border border-gray-50 p-8 relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-hallmark-green/5 to-hallmark-light-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="h-16 w-16 rounded-full bg-hallmark-light-green/10 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1E9971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12C7.5 15.18 9.32 17 12.5 17C15.68 17 17.5 15.18 17.5 12C17.5 8.82 15.68 7 12.5 7C9.32 7 7.5 8.82 7.5 12Z" stroke="#1E9971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12H17.5" stroke="#1E9971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Global Coverage, Local Expertise</h3>
              <p className="text-hallmark-neutral-gray mb-6">
                With operations in 32 countries and expert teams in each location, we provide 
                truly localized solutions while maintaining global consistency.
              </p>
              <ul className="space-y-2">
                {[
                  "Local compliance experts in each region",
                  "Multi-language support and localized interfaces",
                  "Global data standards with local customizations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-hallmark-light-green/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-hallmark-green"></div>
                    </div>
                    <span className="text-hallmark-neutral-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-premium border border-gray-50 p-8 relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-hallmark-blue/5 to-hallmark-light-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="h-16 w-16 rounded-full bg-hallmark-light-blue/10 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#2E7BC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="#2E7BC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="#2E7BC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-3 text-hallmark-dark">Unified Tech Ecosystem</h3>
              <p className="text-hallmark-neutral-gray mb-6">
                Our integrated technology platform eliminates silos and provides a seamless experience 
                across all HR and payroll functions.
              </p>
              <ul className="space-y-2">
                {[
                  "Single source of truth for all workforce data",
                  "Seamless integration with 200+ business applications",
                  "Unified experience across mobile and desktop"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-hallmark-light-blue/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-hallmark-blue"></div>
                    </div>
                    <span className="text-hallmark-neutral-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-premium border border-gray-50 p-8 relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-hallmark-dark-blue/5 to-hallmark-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="h-16 w-16 rounded-full bg-hallmark-dark-blue/10 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18L18 20L22 16" stroke="#1A5190" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21" stroke="#1A5190" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12C12.4853 12 14.5 9.98528 14.5 7.5C14.5 5.01472 12.4853 3 10 3C7.51472 3 5.5 5.01472 5.5 7.5C5.5 9.98528 7.51472 12 10 12Z" stroke="#1A5190" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-3 text-hallmark-dark">White-Glove Service</h3>
              <p className="text-hallmark-neutral-gray mb-6">
                Unlike competitors who prioritize technology over service, we provide dedicated support
                and consultative partnerships with every solution.
              </p>
              <ul className="space-y-2">
                {[
                  "Dedicated account management for every client",
                  "24/7 multilingual support with <1hr response",
                  "Regular proactive strategy sessions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-hallmark-dark-blue/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-hallmark-dark-blue"></div>
                    </div>
                    <span className="text-hallmark-neutral-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-dark-green rounded-xl overflow-hidden shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">Future-Proof Technology</h3>
              <p className="text-white/90 mb-6">
                Our solutions are built on cutting-edge technology that continuously evolves to meet changing business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 6H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 14H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 18H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">API-First Architecture</h4>
                    <p className="text-white/70 text-sm">Flexible integration with any technology stack</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 8V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9.5V14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.4 9.5V14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.6 8C3.9 6 4.2 5 5.5 4C5.8 3.8 6.1 3.6 6.4 3.4C7.2 2.9 8 2.6 9.5 2.4C10.4 2.3 11.5 2.2 12 2.2C12.5 2.2 13.4 2.3 14.5 2.4C16 2.6 16.8 2.9 17.6 3.4C17.9 3.6 18.2 3.8 18.5 4C19.8 5 20.1 6 20.4 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.4 16C20.1 18 19.8 19 18.5 20C18.2 20.2 17.9 20.4 17.6 20.6C16.8 21.1 16 21.4 14.5 21.6C13.6 21.7 12.5 21.8 12 21.8C11.5 21.8 10.6 21.7 9.5 21.6C8 21.4 7.2 21.1 6.4 20.6C6.1 20.4 5.8 20.2 5.5 20C4.2 19 3.9 18 3.6 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">AI-Powered Insights</h4>
                    <p className="text-white/70 text-sm">Predictive analytics and intelligent recommendations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 md:p-10 border-l border-white/10">
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">Industry Recognition</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <span className="text-xs text-white/60 uppercase">2024</span>
                  <h4 className="font-medium text-white text-lg">Leader in Global Payroll</h4>
                  <p className="text-white/70 text-sm">G2 Enterprise Grid Report</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <span className="text-xs text-white/60 uppercase">2023</span>
                  <h4 className="font-medium text-white text-lg">Innovation Award</h4>
                  <p className="text-white/70 text-sm">HR Tech Conference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPs;
