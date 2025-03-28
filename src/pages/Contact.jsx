
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, this would send the form data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Have questions or suggestions? We'd love to hear from you. Fill out the form below or reach out via email or phone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2 bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@affiliatehub.com" className="text-gray-600 hover:text-primary">
                        info@affiliatehub.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-primary">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 Review Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
