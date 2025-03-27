
import React from "react";
import { Link } from "react-router-dom";
import { Clock, Percent, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deals = [
  {
    id: "B07V4GCFP9",
    title: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SL1500_.jpg",
    originalPrice: "$149.99",
    salePrice: "$99.95",
    discount: "33%",
    endTime: "2023-11-20T23:59:59",
  },
  {
    id: "B08N5LNQCX",
    title: "Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer",
    image: "https://m.media-amazon.com/images/I/61tgXQBeYkL._AC_SL1500_.jpg",
    originalPrice: "$99.99",
    salePrice: "$69.99",
    discount: "30%",
    endTime: "2023-11-18T23:59:59",
    badge: "Limited Time"
  },
  {
    id: "B07Q2M2YL5",
    title: "Shark Navigator Lift-Away Upright Vacuum",
    image: "https://m.media-amazon.com/images/I/61HWKs7sfVL._AC_SL1500_.jpg",
    originalPrice: "$199.99",
    salePrice: "$149.99",
    discount: "25%",
    endTime: "2023-11-22T23:59:59",
  },
];

const DealsSection = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
