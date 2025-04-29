import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Calendar, Users, Award, Heart, Briefcase, BookOpen, FileText, ImageIcon } from "lucide-react";
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

// Blog post type definition
interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const AboutPage = () => {
  // Sample team data - replace with your actual team
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years in HR consulting, Sarah founded Hallmark to revolutionize how businesses approach talent management.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      bio: "Michael brings a decade of operational excellence to ensure our clients receive seamless service delivery.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Priya Patel",
      position: "Lead HR Consultant",
      bio: "Priya's expertise in strategic HR planning has helped dozens of companies transform their talent acquisition processes.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "James Wilson",
      position: "Technology Director",
      bio: "James leads our technical innovations, ensuring our solutions leverage the latest in HR technology.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      linkedin: "https://linkedin.com/",
    },
  ];

  // Sample gallery images with real Unsplash images
  const galleryImages: GalleryImage[] = [
    { src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa", alt: "Annual Team Retreat", category: 'event' },
    { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786", alt: "Office Celebration", category: 'celebration' },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", alt: "Client Workshop", category: 'event' },
    { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad", alt: "Team Building Day", category: 'celebration' },
    { src: "https://images.unsplash.com/photo-1560439513-74b037a25d84", alt: "Awards Ceremony", category: 'celebration' },
    { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094", alt: "Office Environment", category: 'office' },
  ];
  
  // Sample blog posts
  const blogPosts: BlogPost[] = [
    {
      title: "The Evolution of HR Consulting in the Digital Age",
      excerpt: "How modern HR practices are leveraging technology to drive employee engagement and business performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Industry Trends",
      date: "April 10, 2023"
    },
    {
      title: "Building Resilient Teams in Uncertain Times",
      excerpt: "Strategies to help organizations develop adaptable workforces that thrive through change and disruption.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      category: "Leadership",
      date: "March 15, 2023"
    },
    {
      title: "The ROI of Employee Experience: Beyond Engagement",
      excerpt: "Measuring the business impact of investing in comprehensive employee experience initiatives.",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a",
      category: "Research & Analysis",
      date: "February 22, 2023"
    }
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
        <section className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="About Us Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
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
              <div className="bg-hallmark-off-white p-8 rounded-lg shadow-premium overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" alt="Hallmark Team" className="rounded-lg max-h-80 object-cover w-full transition-transform duration-500 hover:scale-105" />
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

        {/* Why The Brand Exists & Our Purpose Section - Enhanced */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-hallmark-light-green/30 z-0"></div>
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-hallmark-light-blue/20 z-0"></div>
                  
                  <div className="bg-white shadow-premium rounded-lg p-8 z-10 relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-hallmark-light-blue/20 flex items-center justify-center mr-4">
                        <Heart size={20} className="text-hallmark-blue" />
                      </div>
                      <h3 className="text-2xl font-semibold text-hallmark-dark-blue">Our Purpose</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        We exist to bridge the gap between traditional HR practices and the evolving needs of modern businesses.
                      </p>
                      <p className="text-gray-700">
                        Through our services, we aim to create workplaces where both businesses and their employees can thrive together, driving mutual growth and success.
                      </p>
                      <div className="pt-2">
                        <div className="h-1 w-20 bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue rounded-full"></div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <span className="bg-hallmark-light-green/20 text-hallmark-green px-3 py-1 rounded-full text-sm">Innovation</span>
                        <span className="bg-hallmark-light-blue/20 text-hallmark-blue px-3 py-1 rounded-full text-sm">Transformation</span>
                        <span className="bg-hallmark-light-green/20 text-hallmark-green px-3 py-1 rounded-full text-sm">Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark">Why The Brand Exists</h2>
                <p className="text-gray-700 mb-6">
                  We recognized that many organizations struggle with outdated HR approaches that fail to address the realities of today's workplace dynamics and talent expectations. 
                </p>
                <p className="text-gray-700 mb-6">
                  Hallmark was created to provide forward-thinking solutions that not only solve immediate HR challenges but position companies for sustainable future success in an increasingly competitive talent marketplace.
                </p>
                <div className="flex items-center p-4 bg-hallmark-light-blue/10 rounded-lg border-l-4 border-hallmark-blue">
                  <blockquote className="italic text-gray-700">
                    "We don't just solve today's HR problems—we build capabilities that prevent tomorrow's challenges from occurring."
                  </blockquote>
                </div>
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
                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-premium hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
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
                <div key={index} className="overflow-hidden rounded-lg shadow-premium hover:shadow-xl transition-all duration-300 group h-64">
                  <div className="relative h-full">
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

        {/* Blogs & Insights Section - New Implementation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 text-hallmark-dark text-center">Blogs & Insights</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
              Explore our latest thinking on HR trends, leadership development, and workplace innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-premium hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-hallmark-light-blue/20 text-hallmark-blue px-2 py-1 rounded-full text-xs">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-hallmark-dark">{post.title}</h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <Link to="/blog" className="inline-flex items-center text-hallmark-dark-blue font-medium hover:text-hallmark-blue transition-colors">
                      <span className="mr-2">Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
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
