
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Percent, ArrowRight } from "lucide-react";
import { useDeals } from "@/services/productService";
import ProductGrid from "@/components/ui/ProductGrid";
import { Skeleton } from "@/components/ui/skeleton";

const formatTimeRemaining = (endTimeStr) => {
  const endTime = new Date(endTimeStr);
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();
  
  if (diff <= 0) return "Ended";
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) {
    return `${days}d ${hours}h left`;
  } else {
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m left`;
  }
};

const DealCard = ({ deal }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="relative">
        {deal.badge && (
          <Badge className="absolute top-2 right-2 z-10" variant="secondary">
            {deal.badge}
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 z-10 bg-red-500 hover:bg-red-600">
          <Percent className="h-3 w-3 mr-1" /> {deal.discount} OFF
        </Badge>
        <Link to={`/product/${deal.id}`}>
          <div className="overflow-hidden aspect-[4/3]">
            <img 
              src={deal.image} 
              alt={deal.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105" 
            />
          </div>
        </Link>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-1 mb-2">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < Math.floor(deal.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">{deal.rating.toFixed(1)}</span>
        </div>
        <CardTitle className="text-lg leading-tight line-clamp-2">
          <Link to={`/product/${deal.id}`} className="hover:text-primary">
            {deal.title}
          </Link>
        </CardTitle>
        <div className="flex items-end space-x-2 mt-1">
          <div className="text-lg font-bold text-primary">{deal.salePrice}</div>
          <div className="text-sm text-gray-500 line-through">{deal.originalPrice}</div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="flex items-center text-sm text-amber-600 mb-3">
          <Clock className="h-3 w-3 mr-1" />
          {formatTimeRemaining(deal.endTime)}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">
          {deal.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <a 
            href={`https://amazon.com/dp/${deal.id}?tag=YOUR-AFFILIATE-ID`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get this deal <ArrowRight size={16} className="ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const DealsPage = () => {
  const { deals, loading, error } = useDeals();

  // Function to render skeleton placeholders during loading
  const renderSkeletons = () => {
    return Array(4).fill(0).map((_, i) => (
      <div key={i} className="flex flex-col space-y-3">
        <Skeleton className="h-48 w-full rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Today's Best Deals</h1>
            <p className="text-gray-600">
              Limited-time offers on top-rated products
            </p>
          </div>
          
          {error && (
            <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-md">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? renderSkeletons() : (
              deals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))
            )}
          </div>
          
          {!loading && deals.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No active deals at this time. Please check back later.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;
