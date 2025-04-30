
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Building, 
  Industry, 
  Users, 
  FileChart, 
  FileSearch, 
  TrendingUp,
  Handshake, 
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState("technology");
  
  const industries = {
    technology: {
      title: "Technology & IT",
      icon: <Database className="h-6 w-6 text-hallmark-blue" />,
      description: "Connecting top tech talent with innovative companies across software development, cybersecurity, data science, and IT infrastructure.",
      roles: [
        "Software Engineers", "Data Scientists", "Cloud Architects", "Cybersecurity Specialists", 
        "DevOps Engineers", "Product Managers", "UX/UI Designers"
      ],
      seniorRoles: [
        "CTO", "CIO", "VP of Engineering", "Director of IT", "Head of Product", "Principal Architect"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200"
    },
    healthcare: {
      title: "Healthcare & Life Sciences",
      icon: <FileChart className="h-6 w-6 text-hallmark-green" />,
      description: "Staffing solutions for healthcare providers, pharmaceutical companies, and research institutions to meet critical patient care and innovation needs.",
      roles: [
        "Registered Nurses", "Medical Technologists", "Clinical Research Associates", 
        "Healthcare Administrators", "Medical Coders", "Pharmacy Technicians"
      ],
      seniorRoles: [
        "Chief Medical Officer", "Director of Nursing", "VP of Clinical Operations", 
        "Medical Director", "Healthcare Compliance Director"
      ],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200"
    },
    finance: {
      title: "Finance & Banking",
      icon: <TrendingUp className="h-6 w-6 text-hallmark-dark-blue" />,
      description: "Specialized recruitment for financial institutions, investment firms, and insurance companies with a focus on compliance and high performance.",
      roles: [
        "Financial Analysts", "Investment Bankers", "Compliance Officers", 
        "Risk Managers", "Loan Officers", "Accountants", "Auditors"
      ],
      seniorRoles: [
        "CFO", "Chief Risk Officer", "VP of Finance", "Investment Director", 
        "Controller", "Director of Financial Planning"
      ],
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200"
    },
    manufacturing: {
      title: "Manufacturing & Engineering",
      icon: <Industry className="h-6 w-6 text-hallmark-dark-green" />,
      description: "Connecting skilled workers and engineers with leading manufacturers across automotive, aerospace, electronics, and industrial production.",
      roles: [
        "Process Engineers", "Quality Control Specialists", "Production Supervisors", 
        "Supply Chain Analysts", "Maintenance Technicians", "Manufacturing Associates"
      ],
      seniorRoles: [
        "VP of Operations", "Plant Manager", "Director of Supply Chain", 
        "Chief Manufacturing Officer", "Engineering Director"
      ],
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=1200"
    },
    agriculture: {
      title: "Agriculture & Food Production",
      icon: <FileSearch className="h-6 w-6 text-hallmark-light-green" />,
      description: "Specialized talent solutions for farming operations, food processing companies, and agricultural technology providers.",
      roles: [
        "Agronomists", "Food Safety Specialists", "Farm Managers", 
        "Agricultural Engineers", "Quality Assurance Technicians", "Plant Breeders"
      ],
      seniorRoles: [
        "Director of Agricultural Operations", "Head of Food Safety", 
        "Chief Sustainability Officer", "R&D Director", "VP of Supply Chain"
      ],
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1200"
    }
  };
  
  const faqs = [
    {
      question: "How do you ensure candidates understand our industry-specific needs?",
      answer: "We maintain specialized recruitment teams with direct industry experience who understand the nuances, terminology, and requirements of each sector. Our rigorous screening process evaluates both technical skills and industry knowledge."
    },
    {
      question: "What makes your industry staffing approach different from general recruiters?",
      answer: "Unlike general recruiters, we have dedicated industry practice groups led by professionals with backgrounds in those fields. We maintain industry-specific talent pools, actively participate in industry events, and track sector-specific trends to provide informed staffing solutions."
    },
    {
      question: "Do you offer staff training for industry-specific compliance requirements?",
      answer: "Yes, we provide pre-deployment training on industry-specific regulations and compliance requirements. For specialized roles, we can arrange additional certification or training programs to ensure all staff meet the necessary regulatory standards."
    },
    {
      question: "How quickly can you fill specialized industry roles?",
      answer: "Our time-to-fill for specialized roles typically ranges from 2-4 weeks depending on position seniority and technical requirements. Our extensive industry networks and pre-screened talent pools allow us to move quickly even for niche positions."
    },
    {
      question: "Can you handle multi-location staffing across different regional markets?",
      answer: "Absolutely. Our global reach and understanding of regional industry variations allow us to provide consistent staffing quality across multiple locations while accounting for local market conditions and requirements."
    }
  ];
  
  const blogPosts = [
    {
      title: "The Future of Tech Staffing: AI and Human Collaboration",
      excerpt: "Examining how artificial intelligence is reshaping technical roles while creating new opportunities for human talent.",
      author: "Anna Johnson",
      authorRole: "Technology Practice Lead",
      date: "April 25, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=600",
      category: "Technology"
    },
    {
      title: "Healthcare Staffing Crisis: Solutions for the Post-Pandemic Era",
      excerpt: "Strategies for healthcare organizations to overcome critical staffing shortages while maintaining quality patient care.",
      author: "Dr. Marcus Chen",
      authorRole: "Healthcare Consultant",
      date: "April 18, 2025",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=600",
      category: "Healthcare"
    },
    {
      title: "Manufacturing Talent: Bridging the Skills Gap",
      excerpt: "How modern manufacturing companies can develop workforce pipelines in a competitive labor market.",
      author: "Sophia Rodriguez",
      authorRole: "Manufacturing Practice Director",
      date: "April 10, 2025",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=600",
      category: "Manufacturing"
    }
  ];

  const activeIndustryData = industries[activeIndustry as keyof typeof industries];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-hallmark-dark-green to-hallmark-dark-blue text-white py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Industry Expertise
            </h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Specialized staffing solutions tailored to the unique challenges and requirements of your industry.
              Our deep sector knowledge ensures we deliver talent that understands your business context.
            </p>
          </div>
        </div>

        {/* Brief Introduction */}
        <section className="bg-hallmark-off-white py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4 text-hallmark-dark-green">
                  Industry-Specific Staffing Solutions
                </h2>
                <p className="text-hallmark-dark mb-4">
                  Every industry faces unique workforce challenges that require specialized knowledge and approach. 
                  At Hallmark, we understand that manufacturing has different staffing needs than healthcare, and 
                  technology companies require different talent acquisition strategies than financial institutions.
                </p>
                <p className="text-hallmark-dark">
                  Our industry-focused teams combine deep sector knowledge with staffing expertise to deliver 
                  talent solutions that address your specific operational context, compliance requirements, 
                  and business objectives. We don't just fill positions—we provide workforce partners who 
                  understand your industry's language, challenges, and opportunities.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-premium">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1200" 
                    alt="Industry expertise" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* Why HWS - Industries Tabs */}
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-8 text-center text-hallmark-dark-blue">
              Our Target Industries
            </h2>
            
            <Tabs defaultValue="technology" className="w-full" onValueChange={setActiveIndustry}>
              <div className="mb-6 overflow-x-auto">
                <TabsList className="w-full justify-start">
                  {Object.entries(industries).map(([key, industry]) => (
                    <TabsTrigger key={key} value={key} className="min-w-[150px] py-4">
                      <div className="flex flex-col items-center gap-2">
                        {industry.icon}
                        <span>{industry.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {Object.entries(industries).map(([key, industry]) => (
                <TabsContent key={key} value={key} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-premium">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={industry.image} 
                          alt={industry.title} 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-4 text-hallmark-dark-green">
                        {industry.title} Expertise
                      </h3>
                      <p className="text-hallmark-dark mb-6">{industry.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {industry.roles.map((role, index) => (
                          <Badge key={index} variant="outline" className="bg-hallmark-off-white">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* GPSA End-to-end Workforce Management */}
        <section className="py-12 px-6 bg-gradient-to-b from-hallmark-off-white to-white">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-semibold mb-4 text-hallmark-dark-blue">
                Our GPSA-like End-to-end Workforce Management
              </h2>
              <p className="text-hallmark-neutral-gray max-w-3xl mx-auto">
                Adapting our comprehensive staffing approach to meet the unique demands of each industry sector
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-premium border-0">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-hallmark-light-blue/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-hallmark-blue" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-hallmark-dark">
                    Custom talent acquisition strategies tailored to industry-specific requirements, compliance needs, and specialized skill sets.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-premium border-0">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-hallmark-light-green/20 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-hallmark-green" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-hallmark-dark">
                    Industry-compliant onboarding, specialized training, and sector-specific performance management systems.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-premium border-0">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-hallmark-dark-blue/20 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-hallmark-dark-blue" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Sustain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-hallmark-dark">
                    Retention programs designed for industry dynamics, including career pathing, specialized development, and competitive compensation analysis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-premium border-0">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-hallmark-dark-green/20 flex items-center justify-center mb-4">
                    <FileChart className="h-6 w-6 text-hallmark-dark-green" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Analyze</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-hallmark-dark">
                    Industry-specific workforce analytics, benchmarking against sector standards, and strategic workforce planning aligned with industry trends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* State the Roles & Diverse Roles */}
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-4 text-center text-hallmark-dark-blue">
              Roles We Fill in {activeIndustryData.title}
            </h2>
            <p className="text-hallmark-neutral-gray max-w-3xl mx-auto text-center mb-8">
              From entry-level positions to C-suite executives, we provide talent solutions across the entire organizational spectrum
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-hallmark-off-white to-white shadow-premium border-0">
                <CardHeader>
                  <CardTitle className="text-hallmark-dark-green">Specialist & Technical Roles</CardTitle>
                  <CardDescription>Core positions at various levels across the organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {activeIndustryData.roles.map((role, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-hallmark-blue"></div>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-hallmark-off-white to-white shadow-premium border-0">
                <CardHeader>
                  <CardTitle className="text-hallmark-dark-blue">Leadership & Executive Roles</CardTitle>
                  <CardDescription>Senior management and strategic leadership positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {activeIndustryData.seniorRoles.map((role, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-hallmark-dark-green"></div>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 px-6 bg-hallmark-off-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-8 text-center text-hallmark-dark-blue">
              Our Industry-Specific Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white shadow-premium border-0 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-hallmark-light-blue/20 flex items-center justify-center mb-4">
                    <Industry className="h-6 w-6 text-hallmark-blue" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Industry Immersion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-hallmark-dark">
                    Our recruiters immerse themselves in your industry, attending conferences, following trends, and building networks specifically within your sector to ensure we understand the nuanced requirements of your business.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-premium border-0 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-hallmark-light-green/20 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-hallmark-green" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Specialized Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-hallmark-dark">
                    We develop custom assessment protocols for each industry that evaluate not just technical skills but also industry knowledge, regulatory awareness, and sector-specific experience to ensure perfect-fit candidates.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-premium border-0 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-hallmark-dark-green/20 flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-hallmark-dark-green" />
                  </div>
                  <CardTitle className="text-xl text-hallmark-dark-green">Compliance Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-hallmark-dark">
                    We maintain dedicated compliance teams for regulated industries, ensuring all staffing solutions meet industry-specific requirements, certifications, and legal standards without compromise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Reports */}
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-4 text-hallmark-dark-blue">
                  Industry & Staffing Reports
                </h2>
                <p className="text-hallmark-dark mb-6">
                  Stay informed about the latest workforce trends and challenges affecting your industry with our 
                  comprehensive research reports. Our analysis provides actionable insights to help you make strategic 
                  staffing decisions and gain competitive advantage.
                </p>
                <div className="space-y-4">
                  <Alert className="border-l-4 border-l-hallmark-blue bg-hallmark-off-white">
                    <AlertTitle className="text-hallmark-dark-blue">2025 Technology Talent Outlook</AlertTitle>
                    <AlertDescription>
                      Examining emerging skills demand, salary trends, and recruitment strategies in the tech sector.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-l-4 border-l-hallmark-green bg-hallmark-off-white">
                    <AlertTitle className="text-hallmark-dark-blue">Healthcare Staffing Crisis Report</AlertTitle>
                    <AlertDescription>
                      Analysis of current healthcare staffing challenges and innovative solutions for retention.
                    </AlertDescription>
                  </Alert>
                  <Button variant="outline" className="mt-2 border-hallmark-dark-blue text-hallmark-dark-blue hover:bg-hallmark-dark-blue hover:text-white">
                    View All Reports
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-premium">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200" 
                    alt="Industry reports" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-6 bg-hallmark-off-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-8 text-center text-hallmark-dark-blue">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-medium text-hallmark-dark hover:text-hallmark-dark-green hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-hallmark-dark">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Blogs & Insights */}
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-display font-semibold text-hallmark-dark-blue">
                  Industry Insights
                </h2>
                <p className="text-hallmark-neutral-gray">
                  Expert perspectives on workforce trends across various industries
                </p>
              </div>
              <Link to="/blog" className="mt-4 md:mt-0">
                <Button variant="outline" className="border-hallmark-dark-blue text-hallmark-dark-blue hover:bg-hallmark-dark-blue hover:text-white">
                  View All Articles
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-white shadow-premium border-0 overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-hallmark-light-blue/20 text-hallmark-dark-blue hover:bg-hallmark-light-blue/30">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-hallmark-neutral-gray">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl text-hallmark-dark">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-hallmark-dark mb-4">{post.excerpt}</p>
                  </CardContent>
                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-hallmark-light-blue/20 text-hallmark-blue">
                          {post.author.split(' ').map(name => name[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-hallmark-neutral-gray">{post.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-hallmark-off-white">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustriesPage;
