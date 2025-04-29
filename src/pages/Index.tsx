
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    const revealRightElements = document.querySelectorAll('.reveal-right');
    
    revealElements.forEach(element => observer.observe(element));
    revealRightElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
      revealRightElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        
        <div className="reveal">
          <Services />
        </div>
        
        <div className="reveal">
          <Testimonials />
        </div>
        
        <div className="reveal">
          <CTA />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
