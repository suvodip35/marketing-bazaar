
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, BookOpen, BarChart3, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    { name: "Electronics", path: "/category/electronics" },
    { name: "Home & Kitchen", path: "/category/home-kitchen" },
    { name: "Computer", path: "/category/computer" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Beauty", path: "/category/beauty" },
    { name: "Sports", path: "/category/sports" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Deals", path: "/deals" },
    { name: "Reviews", path: "/reviews" },
    { name: "Guides", path: "/guides", icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { name: "Compare", path: "/compare", icon: <BarChart3 className="h-4 w-4 mr-1" /> },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Shown on all screens */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center shrink-0 mr-4">
            <ShoppingCart className="mr-2 h-6 w-6" />
            <span className={isMobile ? "hidden" : "inline"}>AffiliateHub</span>
          </Link>
          
          {/* Desktop Navigation - Centered */}
          {!isMobile && (
            <div className="flex-grow flex justify-center">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors flex items-center"
                    >
                      {item.icon && item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <div className="relative group">
                    <button className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors flex items-center">
                      Categories
                    </button>
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50 border">
                      <div className="py-1">
                        {categories.map((category) => (
                          <Link
                            key={category.path}
                            to={category.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Right section - Search and Mobile Menu */}
          <div className="flex items-center ml-auto">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative mr-2">
              <Input 
                type="text" 
                placeholder="Search..." 
                className={`px-4 py-2 pr-10 rounded-full border-gray-200 focus:border-primary focus:ring-primary h-9 text-sm ${isMobile ? 'w-[120px]' : 'w-[180px]'}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-400 hover:text-primary">
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Mobile Menu - Only visible on smaller screens */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="ml-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <div className="py-6">
                    <Link to="/" className="text-2xl font-bold text-primary flex items-center mb-8">
                      <ShoppingCart className="mr-2 h-6 w-6" />
                      <span>AffiliateHub</span>
                    </Link>

                    <div className="flex flex-col space-y-1">
                      {navItems.map((item) => (
                        <Link 
                          key={item.path}
                          to={item.path} 
                          className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors flex items-center"
                        >
                          {item.icon && React.cloneElement(item.icon, { className: "h-4 w-4 mr-2" })}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full text-left font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors">
                          Categories
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[240px]">
                          <div className="grid grid-cols-1">
                            {categories.map((category) => (
                              <DropdownMenuItem key={category.path} asChild className="py-2.5">
                                <Link to={category.path}>{category.name}</Link>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
