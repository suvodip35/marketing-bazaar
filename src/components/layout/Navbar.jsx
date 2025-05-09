
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, BookOpen, BarChart3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

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
            <Link to="/products" className="text-gray-700 hover:text-primary">
              Products
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-primary">
              Reviews
            </Link>
            <Link to="/deals" className="text-gray-700 hover:text-primary">
              Best Deals
            </Link>
            <Link to="/guides" className="text-gray-700 hover:text-primary">
              <span className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                Buying Guides
              </span>
            </Link>
            <Link to="/compare" className="text-gray-700 hover:text-primary">
              <span className="flex items-center">
                <BarChart3 className="h-4 w-4 mr-1" />
                Compare
              </span>
            </Link>
          </div>

          <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="px-4 py-2 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-primary">
              <Search className="h-4 w-4" />
            </button>
          </form>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="ml-4 md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-gray-700 hover:text-primary">
                  Home
                </Link>
                <Link to="/products" className="text-gray-700 hover:text-primary">
                  Products
                </Link>
                <Link to="/reviews" className="text-gray-700 hover:text-primary">
                  Reviews
                </Link>
                <Link to="/deals" className="text-gray-700 hover:text-primary">
                  Best Deals
                </Link>
                <Link to="/guides" className="text-gray-700 hover:text-primary">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Buying Guides
                  </span>
                </Link>
                <Link to="/compare" className="text-gray-700 hover:text-primary">
                  <span className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Compare Products
                  </span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
