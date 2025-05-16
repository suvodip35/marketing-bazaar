
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
    <nav className="bg-white border-b sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center shrink-0 mr-4">
            <ShoppingCart className="mr-2 h-6 w-6" />
            <span className="hidden sm:inline">AffiliateHub</span>
          </Link>
          
          {/* Main Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-1 overflow-hidden">
            <NavigationMenu className="max-w-full">
              <NavigationMenuList className="gap-0.5">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-primary text-sm bg-transparent hover:bg-gray-50 h-auto">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 p-3 w-[400px]">
                      {categories.map((category) => (
                        <NavigationMenuLink asChild key={category.path}>
                          <Link 
                            to={category.path}
                            className="block select-none rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                    <Link to="/products" className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors">
                      Products
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/deals" className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors">
                      Deals
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/reviews" className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors">
                      Reviews
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/guides" className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors flex items-center">
                      <BookOpen className="h-3.5 w-3.5 mr-1" />
                      <span>Guides</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/compare" className="px-3 py-2 text-gray-700 hover:text-primary font-medium text-sm rounded-md hover:bg-gray-50 transition-colors flex items-center">
                      <BarChart3 className="h-3.5 w-3.5 mr-1" />
                      <span>Compare</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative w-full max-w-xs mx-2">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="px-4 py-2 pr-10 rounded-full border-gray-200 focus:border-primary focus:ring-primary h-9 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2 text-gray-400 hover:text-primary">
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:max-w-sm">
              <div className="pt-6">
                <Link to="/" className="text-2xl font-bold text-primary flex items-center mb-6">
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  <span>AffiliateHub</span>
                </Link>
                <div className="flex flex-col space-y-1">
                  <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors">
                    Home
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full text-left font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors">
                      Categories
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[calc(75vw-2rem)] sm:w-72">
                      <div className="grid grid-cols-1">
                        {categories.map((category) => (
                          <DropdownMenuItem key={category.path} asChild className="py-2.5">
                            <Link to={category.path}>{category.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Link to="/products" className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors">
                    Products
                  </Link>
                  <Link to="/reviews" className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors">
                    Reviews
                  </Link>
                  <Link to="/deals" className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors">
                    Best Deals
                  </Link>
                  <Link to="/guides" className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>Buying Guides</span>
                  </Link>
                  <Link to="/compare" className="text-gray-700 hover:text-primary font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    <span>Compare Products</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
