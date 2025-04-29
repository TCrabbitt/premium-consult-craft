
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-consulting-dark-blue py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 text-white">Ready to Transform Your Business?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Schedule a consultation with our experts and discover how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-consulting-green text-white hover:bg-consulting-green/90" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-consulting-dark-blue" size="lg">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
