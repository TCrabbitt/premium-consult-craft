
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Calendar, Users, Award, Heart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

// Team member type definition
interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
}

// Gallery image type definition
interface GalleryImage {
  src: string;
  alt: string;
  category: 'event' | 'celebration' | 'office';
}

const AboutPage = () => {
  // Sample team data - replace with your actual team
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years in HR consulting, Sarah founded Hallmark to revolutionize how businesses approach talent management.",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      bio: "Michael brings a decade of operational excellence to ensure our clients receive seamless service delivery.",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Priya Patel",
      position: "Lead HR Consultant",
      bio: "Priya's expertise in strategic HR planning has helped dozens of companies transform their talent acquisition processes.",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "James Wilson",
      position: "Technology Director",
      bio: "James leads our technical innovations, ensuring our solutions leverage the latest in HR technology.",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/",
    },
  ];

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImage[] = [
    { src: "/placeholder.svg", alt: "Annual Team Retreat", category: 'event' },
    { src: "/placeholder.svg", alt: "Office Celebration", category: 'celebration' },
    { src: "/placeholder.svg", alt: "Client Workshop", category: 'event' },
    { src: "/placeholder.svg", alt: "Team Building Day", category: 'celebration' },
    { src: "/placeholder.svg", alt: "Awards Ceremony", category: 'celebration' },
    { src: "/placeholder.svg", alt: "Office Environment", category: 'office' },
  ];

  // State for gallery filter
  const [activeFilter, setActiveFilter] = useState<'all' | 'event' | 'celebration' | 'office'>('all');

  // Filter gallery images based on category
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue text-white py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Hallmark</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                We're redefining HR consulting with innovative solutions that drive measurable results for businesses worldwide.
              </p>
              <Button className="bg-white text-hallmark-dark-blue hover:bg-white/90">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark">Who We Are</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2015, Hallmark Consulting has grown from a small team of HR specialists to a comprehensive consulting firm trusted by businesses across multiple industries. We combine deep industry expertise with innovative approaches to solve complex workforce challenges.
                </p>
                <p className="text-gray-700">
                  Our mission is to empower organizations with the strategies, tools, and insights needed to build and maintain exceptional teams that drive business success.
                </p>
              </div>
              <div className="bg-hallmark-off-white p-8 rounded-lg shadow-premium">
                <div className="flex items-center justify-center h-full">
                  <img src="/placeholder.svg" alt="Hallmark Team" className="rounded-lg max-h-80 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-hallmark-dark text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-premium">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
                  <Users size={24} className="text-hallmark-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Talent Acquisition</h3>
                <p className="text-gray-700">
                  We transform how companies attract, assess, and retain top talent with customized strategies that align with business objectives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-premium">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mb-4">
                  <Briefcase size={24} className="text-hallmark-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">HR Optimization</h3>
                <p className="text-gray-700">
                  Our consultants identify opportunities to streamline HR processes, enhance efficiency, and reduce operational costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-premium">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mb-4">
                  <Award size={24} className="text-hallmark-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
                <p className="text-gray-700">
                  We create and implement programs that cultivate strong leaders equipped to navigate challenges and drive innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why The Brand Exists Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue p-1 rounded-lg">
                  <div className="bg-white p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-hallmark-dark-blue">Our Purpose</h3>
                    <p className="text-gray-700 mb-6">
                      We exist to bridge the gap between traditional HR practices and the evolving needs of modern businesses.
                    </p>
                    <p className="text-gray-700">
                      Through our services, we aim to create workplaces where both businesses and their employees can thrive together, driving mutual growth and success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark">Why The Brand Exists</h2>
                <p className="text-gray-700 mb-6">
                  We recognized that many organizations struggle with outdated HR approaches that fail to address the realities of today's workplace dynamics and talent expectations. 
                </p>
                <p className="text-gray-700">
                  Hallmark was created to provide forward-thinking solutions that not only solve immediate HR challenges but position companies for sustainable future success in an increasingly competitive talent marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-hallmark-dark text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-premium text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mx-auto mb-4">
                  <Heart size={32} className="text-hallmark-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We maintain the highest ethical standards in all our interactions and recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-premium text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mx-auto mb-4">
                  <Users size={32} className="text-hallmark-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in working closely with our clients as partners in their success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-premium text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-hallmark-light-green/20 mx-auto mb-4">
                  <Award size={32} className="text-hallmark-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for exceptional results that exceed expectations in everything we do.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-premium text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-hallmark-light-blue/20 mx-auto mb-4">
                  <Calendar size={32} className="text-hallmark-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously explore new approaches to solve complex workforce challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-hallmark-dark text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-premium hover:shadow-xl transition-shadow duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-hallmark-blue mb-3">{member.position}</p>
                    <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-hallmark-dark-blue hover:text-hallmark-blue transition-colors"
                    >
                      <Linkedin size={18} className="mr-1" />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Gallery Section */}
        <section className="py-12 md:py-16 bg-hallmark-off-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Company Gallery</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              Take a glimpse into our company culture, events, and the passionate team behind Hallmark Consulting.
            </p>
            
            {/* Gallery Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'all' 
                    ? 'bg-hallmark-dark-blue text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'event' 
                    ? 'bg-hallmark-dark-blue text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveFilter('event')}
              >
                Events
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'celebration' 
                    ? 'bg-hallmark-dark-blue text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveFilter('celebration')}
              >
                Celebrations
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'office' 
                    ? 'bg-hallmark-dark-blue text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveFilter('office')}
              >
                Office
              </button>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-premium hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs & Insights Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark">Blogs & Insights</h2>
              <p className="text-gray-700 mb-8">
                Explore our latest thinking on HR trends, leadership development, and workplace innovation.
              </p>
              <Link to="/blog" className="inline-flex items-center px-6 py-3 bg-hallmark-dark-green text-white rounded hover:bg-hallmark-green transition-colors">
                <span className="mr-2">Visit Our Blog</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Us Form Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
