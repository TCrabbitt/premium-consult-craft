
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Hallmark transformed our talent acquisition process and helped us reduce hiring costs by 35% while improving quality of hire.",
    author: "Sarah Johnson",
    position: "HR Director",
    company: "TechCorp Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    content: "Their payroll solutions streamlined our operations across multiple countries, ensuring 100% compliance and saving us countless hours.",
    author: "Michael Chen",
    position: "CFO",
    company: "Global Logistics",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    content: "The implementation team was exceptional. They understood our unique challenges and delivered a tailored solution that exceeded expectations.",
    author: "Emma Rodriguez",
    position: "Operations Manager",
    company: "HealthPlus",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-hallmark-dark-blue to-hallmark-dark-green text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-lg mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 text-white/90 text-sm mb-3">
            <Star size={14} strokeWidth={1.5} />
            <span>Client Success</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mb-3">Success Stories</h2>
          <p className="text-white/80 text-sm">
            Real results from our valued partners
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative rounded-lg bg-white/5 backdrop-blur-sm p-10 min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col md:flex-row items-center gap-10 p-10 transition-all duration-500 ease-in-out ${
                  index === activeIndex ? "opacity-100 translate-x-0" : 
                  index < activeIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                }`}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-hallmark-light-green" fill="#68DA9E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-white/80">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? "bg-white w-6" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handlePrev} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
