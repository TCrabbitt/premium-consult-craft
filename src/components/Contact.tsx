
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We've received your inquiry and will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-consulting-neutral-gray mb-8 max-w-lg">
              Reach out to discuss how our consulting services can address your business challenges and drive growth.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-consulting-soft-gray rounded-full p-3 mt-1">
                  <Mail className="h-5 w-5 text-consulting-dark-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-consulting-neutral-gray">info@consultpro.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-consulting-soft-gray rounded-full p-3 mt-1">
                  <Phone className="h-5 w-5 text-consulting-dark-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us</h3>
                  <p className="text-consulting-neutral-gray">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-display font-medium mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="bg-consulting-soft-gray border-0 focus-visible:ring-1 focus-visible:ring-consulting-light-purple"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-consulting-soft-gray border-0 focus-visible:ring-1 focus-visible:ring-consulting-light-purple"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="bg-consulting-soft-gray border-0 focus-visible:ring-1 focus-visible:ring-consulting-light-purple"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="bg-consulting-soft-gray border-0 min-h-[120px] focus-visible:ring-1 focus-visible:ring-consulting-light-purple"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-consulting-dark-purple text-white hover:bg-consulting-dark-purple/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
