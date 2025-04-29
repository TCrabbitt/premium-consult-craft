
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue"></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-white/90 mb-8 text-lg md:text-xl">
            Schedule a consultation with our experts and discover how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90 flex items-center gap-2" size="lg">
              Schedule a Consultation
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract design elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-hallmark-light-green/30 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-hallmark-light-blue/30 blur-3xl"></div>
    </section>
  );
};

export default CTA;
