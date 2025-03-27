
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">AffiliateHub</h2>
            <p className="text-gray-600 text-sm mb-4">
              We help you find the best products on Amazon with honest reviews and expert recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li><Link to="/category/tech" className="text-gray-600 hover:text-primary text-sm">Tech & Gadgets</Link></li>
              <li><Link to="/category/home" className="text-gray-600 hover:text-primary text-sm">Home & Kitchen</Link></li>
              <li><Link to="/category/beauty" className="text-gray-600 hover:text-primary text-sm">Beauty & Personal Care</Link></li>
              <li><Link to="/category/fitness" className="text-gray-600 hover:text-primary text-sm">Fitness Equipment</Link></li>
              <li><Link to="/category/books" className="text-gray-600 hover:text-primary text-sm">Books & Media</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary text-sm">Terms of Service</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-gray-600 hover:text-primary text-sm">Affiliate Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get notifications about product reviews and deals.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} AffiliateHub. All rights reserved.
            <span className="block mt-2 text-xs">
              As an Amazon Associate I earn from qualifying purchases.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
