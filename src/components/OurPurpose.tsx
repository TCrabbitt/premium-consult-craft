
import { Info } from "lucide-react";

const OurPurpose = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hallmark-light-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-hallmark-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-green/20 text-hallmark-green font-medium mb-4">
            <Info size={16} />
            <span>Our Purpose</span>
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue bg-clip-text text-transparent">
            Empowering Business Success <br className="hidden md:block" /> Through People Solutions
          </h2>
          <p className="text-lg text-hallmark-neutral-gray max-w-3xl mx-auto">
            Our mission is to transform complex HR and payroll challenges into seamless, innovative solutions 
            that enable businesses to focus on what they do best.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-hallmark-off-white to-white p-8 rounded-2xl shadow-premium border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-hallmark-light-green/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-hallmark-blue/10 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-lg relative z-10 w-full max-w-md"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-display font-semibold mb-4 text-hallmark-dark">Why We Exist</h3>
              <p className="mb-5 text-hallmark-neutral-gray">
                Every business deserves access to world-class HR and payroll solutions that grow with them,
                regardless of their size or industry. We bridge the gap between complex workforce challenges 
                and elegant, efficient solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "Simplifying complex HR and payroll processes",
                  "Enabling data-driven workforce decisions",
                  "Supporting business growth through scalable solutions",
                  "Enhancing employee experiences through technology"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-hallmark-light-green/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-hallmark-green"></div>
                    </div>
                    <span className="text-hallmark-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
