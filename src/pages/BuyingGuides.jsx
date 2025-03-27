
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GuideCard } from "@/components/ui/GuideCard";
import { useGuides } from "@/services/guideService";

const BuyingGuides = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { guides, loading, error } = useGuides();
  
  // Filter guides based on active category
  const filteredGuides = activeCategory === "all" 
    ? guides 
    : guides.filter(guide => guide.category === activeCategory);
  
  // Get unique categories from guides
  const categories = ["all", ...new Set(guides.map(guide => guide.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Buying Guides</h1>
            <p className="text-gray-600">Expert advice to help you make informed purchasing decisions</p>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="mb-4">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {error && (
            <div className="text-red-500 p-4 bg-red-50 rounded-md mb-6">
              {error}
            </div>
          )}
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-white rounded-lg p-4 h-64"></div>
              ))}
            </div>
          ) : filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map(guide => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No buying guides available in this category.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyingGuides;
