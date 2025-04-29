
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 bg-gradient-to-br from-white to-consulting-soft-gray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Strategic Solutions for <br className="hidden md:block" />
              <span className="text-consulting-light-purple">Exceptional Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-consulting-neutral-gray max-w-xl">
              Partner with our expert consultants to transform challenges into opportunities and achieve sustainable business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary flex items-center gap-2" size="lg">
                Get Started
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="btn-secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-consulting-light-purple/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-consulting-light-purple/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80" 
                alt="Consulting team discussing strategy" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
