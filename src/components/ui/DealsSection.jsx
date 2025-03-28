
import React from "react";
import { Link } from "react-router-dom";
import { Clock, Percent, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDeals } from "@/services/productService";

const DealsSection = () => {
  const { deals, loading, error } = useDeals();

  // Function to render skeleton placeholders during loading
  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, i) => (
      <Card key={i} className="overflow-hidden">
        <div className="p-4">
          <Skeleton className="h-48 w-full rounded-md" />
        </div>
        <CardHeader className="pb-2">
          <Skeleton className="h-6 w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-5 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
        <CardFooter className="pt-0">
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    ));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center mb-2">
              <Percent size={20} className="text-red-500 mr-2" />
              <h2 className="text-3xl font-bold">Today's Hot Deals</h2>
            </div>
            <p className="text-gray-600">Limited-time offers at amazing prices</p>
          </div>
          <Link to="/deals" className="flex items-center text-primary font-medium hover:underline">
            View all deals <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {error && (
          <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-md">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? renderSkeletons() : (
            deals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden">
                <div className="relative">
                  {deal.badge && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      {deal.badge}
                    </Badge>
                  )}
                  <Link to={`/product/${deal.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </Link>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500">{deal.discount} OFF</Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    <Link to={`/product/${deal.id}`} className="hover:text-primary">
                      {deal.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-bold text-red-500">{deal.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{deal.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span>Limited time deal</span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button asChild className="w-full">
                    <a 
                      href={`https://amazon.com/dp/${deal.id}?tag=YOUR-AFFILIATE-ID`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Deal
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
