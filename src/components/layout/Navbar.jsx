
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

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  return (
    <nav className="bg-white border-b sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <ShoppingCart className="mr-2 h-6 w-6" />
            <span>AffiliateHub</span>
          </Link>
          
          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-gray-700 hover:text-primary">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                      {categories.map((category) => (
                        <NavigationMenuLink asChild key={category.path}>
                          <Link 
                            to={category.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {category.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/products" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
                      Products
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/deals" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
                      Deals
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/reviews" className="px-4 py-2 text-gray-700 hover:text-primary font-medium">
                      Reviews
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/guides" className="px-4 py-2 text-gray-700 hover:text-primary font-medium flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>Guides</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/compare" className="px-4 py-2 text-gray-700 hover:text-primary font-medium flex items-center">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      <span>Compare</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative w-full max-w-xs ml-4">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="px-4 py-2 pr-10 rounded-full border-gray-300 focus:border-primary focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-primary">
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="ml-4 md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2">
                  Home
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full text-left font-medium py-2">
                    Categories
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.path} asChild>
                        <Link to={category.path}>{category.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Link to="/products" className="text-gray-700 hover:text-primary font-medium py-2">
                  Products
                </Link>
                <Link to="/reviews" className="text-gray-700 hover:text-primary font-medium py-2">
                  Reviews
                </Link>
                <Link to="/deals" className="text-gray-700 hover:text-primary font-medium py-2">
                  Best Deals
                </Link>
                <Link to="/guides" className="text-gray-700 hover:text-primary font-medium py-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>Buying Guides</span>
                </Link>
                <Link to="/compare" className="text-gray-700 hover:text-primary font-medium py-2 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  <span>Compare Products</span>
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
