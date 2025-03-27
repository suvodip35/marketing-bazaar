
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0"></div>
      <div 
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find the <span className="text-primary">Best Products</span> at the Best Prices
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10">
            Expert reviews, honest recommendations, and exclusive deals on the products you actually want.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-6">
              Browse Top Picks <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-6">
              Read Latest Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
