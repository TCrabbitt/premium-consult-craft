
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurPurpose from '@/components/OurPurpose';
import BriefIntro from '@/components/BriefIntro';
import Stats from '@/components/Stats';
import RecruiterSolutions from '@/components/RecruiterSolutions';
import BusinessSuites from '@/components/BusinessSuites';
import GlobalSolutions from '@/components/GlobalSolutions';
import CandidateSolutions from '@/components/CandidateSolutions';
import Testimonials from '@/components/Testimonials';
import OurApproach from '@/components/OurApproach';
import KeyMetrics from '@/components/KeyMetrics';
import USPs from '@/components/USPs';
import WhyHWS from '@/components/WhyHWS';
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
        {/* Hero Section */}
        <Hero />
        
        {/* 1. Our Purpose */}
        <div className="reveal">
          <OurPurpose />
        </div>
        
        {/* 2. Brief Introduction */}
        <div className="reveal">
          <BriefIntro />
        </div>
        
        {/* 3. Our Impact in Numbers */}
        <div className="reveal">
          <Stats />
        </div>
        
        {/* 4. Our Solutions */}
        <div className="reveal">
          <RecruiterSolutions />
        </div>
        
        <div className="reveal">
          <BusinessSuites />
        </div>
        
        <div className="reveal">
          <GlobalSolutions />
        </div>
        
        <div className="reveal">
          <CandidateSolutions />
        </div>
        
        {/* 5. Our Approach */}
        <div className="reveal">
          <OurApproach />
        </div>
        
        {/* 6. How We Deliver Excellence (Key Metrics) */}
        <div className="reveal">
          <KeyMetrics />
        </div>
        
        {/* 7. USPs */}
        <div className="reveal">
          <USPs />
        </div>
        
        {/* 8. Why Choose HWS */}
        <div className="reveal">
          <WhyHWS />
        </div>
        
        {/* 9. Testimonials */}
        <div className="reveal">
          <Testimonials />
        </div>
        
        {/* 10. Call to Action */}
        <div className="reveal">
          <CTA />
        </div>
        
        {/* 11. Contact Us Form */}
        <div className="reveal">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
