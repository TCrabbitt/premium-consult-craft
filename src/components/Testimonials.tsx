
import { useState } from "react";
import { MessageSquare, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const testimonials = [
  {
    id: 1,
    quote: "The strategic insights provided by their team transformed our operations and helped us achieve a 40% increase in revenue.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with this team was a game-changer. Their optimization strategies reduced our operational costs by 25%.",
    author: "Michael Chen",
    position: "COO",
    company: "Global Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 5
  },
  {
    id: 3,
    quote: "Their leadership development program dramatically improved our decision-making process and team cohesion.",
    author: "Emma Rodriguez",
    position: "HR Director",
    company: "Innovate Partners",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-hallmark-dark-blue to-hallmark-blue text-white">
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-hallmark-light-blue/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-hallmark-light-green/20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium mb-4">
            <MessageSquare size={16} strokeWidth={2} />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Transformative partnerships that deliver real results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
              <button 
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 -ml-5 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 -mr-5 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-none shadow-xl rounded-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="rounded-2xl overflow-hidden border-4 border-white/20">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].author} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-hallmark-green to-hallmark-light-green rounded-full p-2 shadow-lg">
                      <div className="bg-white rounded-full p-1.5">
                        <MessageSquare size={18} className="text-hallmark-green" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400" fill="#FACC15" strokeWidth={0} />
                    ))}
                  </div>
                  
                  <blockquote className="mb-6">
                    <p className="text-xl italic font-medium text-white">"{testimonials[activeIndex].quote}"</p>
                  </blockquote>
                  
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-xl">{testimonials[activeIndex].author}</span>
                    <span className="text-white/80">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
