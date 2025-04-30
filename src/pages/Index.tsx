
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Stats from '@/components/Stats';
import RecruiterSolutions from '@/components/RecruiterSolutions';
import GlobalSolutions from '@/components/GlobalSolutions';
import CandidateSolutions from '@/components/CandidateSolutions';
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
      <main className="flex-grow">
        <Hero />
        
        <div className="reveal">
          <WhoWeAre />
        </div>
        
        <div className="reveal">
          <Stats />
        </div>
        
        <div className="reveal">
          <RecruiterSolutions />
        </div>
        
        <div className="reveal">
          <GlobalSolutions />
        </div>
        
        <div className="reveal">
          <CandidateSolutions />
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
