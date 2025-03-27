
import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  badge?: string;
}

const ProductCard = ({ 
  id, 
  title, 
  image, 
  rating, 
  price, 
  description, 
  badge 
}: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <div className="relative">
        {badge && (
          <Badge className="absolute top-2 right-2 z-10" variant="secondary">
            {badge}
          </Badge>
        )}
        <Link to={`/product/${id}`}>
          <div className="overflow-hidden aspect-[4/3]">
            <img 
              src={image} 
              alt={title} 
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
              className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
        </div>
        <CardTitle className="text-lg leading-tight line-clamp-2">
          <Link to={`/product/${id}`} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <div className="text-lg font-bold text-primary">{price}</div>
      </CardHeader>
      
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <a 
            href={`https://amazon.com/dp/${id}?tag=YOUR-AFFILIATE-ID`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on Amazon <ArrowRight size={16} className="ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
