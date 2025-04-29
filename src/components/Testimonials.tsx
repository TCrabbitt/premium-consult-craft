
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "The strategic insights provided by their team transformed our business operations and helped us achieve a 40% increase in revenue within just 8 months.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
    company: "TechVision Inc."
  },
  {
    id: 2,
    quote: "Working with this consulting team was a game-changer for our organization. Their process optimization strategies reduced our operational costs by 25%.",
    author: "Michael Chen",
    position: "COO, Global Solutions",
    company: "Global Solutions"
  },
  {
    id: 3,
    quote: "The leadership development program they designed for our executive team has dramatically improved our decision-making process and team cohesion.",
    author: "Emma Rodriguez",
    position: "HR Director, Innovate Partners",
    company: "Innovate Partners"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-consulting-soft-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Client Success Stories</h2>
          <p className="text-consulting-neutral-gray max-w-2xl mx-auto">
            Hear from organizations that have transformed their businesses with our consulting expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-white border-none shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="italic text-consulting-dark-purple">{testimonial.quote}</p>
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-consulting-neutral-gray text-sm">{testimonial.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
