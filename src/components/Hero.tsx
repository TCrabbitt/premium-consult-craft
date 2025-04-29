
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Strategic Solutions for <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-hallmark-light-green to-hallmark-light-blue">Exceptional Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Partner with our expert consultants to transform challenges into opportunities and achieve sustainable business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90 flex items-center gap-2" size="lg">
                Get Started
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="border-white text-black hover:bg-white/10" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-hallmark-light-green/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-hallmark-light-blue/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80" 
                alt="Strategic business consulting meeting" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hallmark-dark-blue/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white rounded-lg p-4 shadow-premium">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-hallmark-green to-hallmark-dark-blue flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18468 2.99721 7.13443 4.39828 5.49379C5.79935 3.85315 7.69279 2.71422 9.79619 2.24005C11.8996 1.76588 14.1003 1.98545 16.07 2.86011" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-hallmark-dark">98% Client Satisfaction</h4>
                  <p className="text-xs text-hallmark-neutral-gray">Based on 1,200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
