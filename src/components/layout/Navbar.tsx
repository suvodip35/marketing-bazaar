
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            AffiliateHub
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-primary">
              Reviews
            </Link>
            <Link to="/deals" className="text-gray-700 hover:text-primary">
              Best Deals
            </Link>
            <Link to="/guides" className="text-gray-700 hover:text-primary">
              Buying Guides
            </Link>
          </div>

          <div className="relative w-full max-w-xs">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="px-4 py-2 pr-10"
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          <Button variant="outline" size="sm" className="ml-4 md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
