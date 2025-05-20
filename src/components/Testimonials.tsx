
import { Card } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The strategic insights provided by their team transformed our operations and helped us achieve a 40% increase in revenue.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
    company: "TechVision Inc.",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with this team was a game-changer. Their optimization strategies reduced our operational costs by 25%.",
    author: "Michael Chen",
    position: "COO, Global Solutions",
    company: "Global Solutions",
    rating: 5
  },
  {
    id: 3,
    quote: "Their leadership development program dramatically improved our decision-making process and team cohesion.",
    author: "Emma Rodriguez",
    position: "HR Director, Innovate Partners",
    company: "Innovate Partners",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-hallmark-off-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-hallmark-light-blue/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-hallmark-light-green/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-hallmark-light-green/10 text-hallmark-green font-medium mb-4">
            <UserCheck size={16} strokeWidth={2} />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-hallmark-dark-blue to-hallmark-green bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-hallmark-neutral-gray max-w-2xl mx-auto">
            Hear from organizations that have transformed with our expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-white border-none shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="italic text-hallmark-dark-blue font-medium">{testimonial.quote}</p>
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-hallmark-blue to-hallmark-green/80 flex items-center justify-center text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-hallmark-dark">{testimonial.author}</p>
                  <p className="text-hallmark-neutral-gray text-sm">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
