
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Calendar } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: "001",
    productId: "B09G9FPHY6",
    title: "Apple AirPods Pro (2nd Generation) Review",
    excerpt: "With impressive noise cancellation, adaptive transparency mode, and improved sound quality, the AirPods Pro 2 are among the best wireless earbuds you can buy.",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
    date: "November 10, 2023",
    category: "Audio"
  },
  {
    id: "002",
    productId: "B0BSHF7LLT",
    title: "Dyson V12 Detect Slim Absolute Review",
    excerpt: "The Dyson V12 Detect Slim combines powerful suction with innovative features like the laser dust detection system, making it our top pick for cordless vacuums.",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61qDKmQJbJL._AC_SL1500_.jpg",
    date: "November 5, 2023",
    category: "Home"
  },
  {
    id: "003",
    productId: "B09KTSCQRW",
    title: "Samsung 65-Inch Class OLED TV Review",
    excerpt: "Samsung's OLED TV delivers stunning picture quality with perfect blacks, vibrant colors, and an impressive gaming performance that outshines the competition.",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/81RhYQJAA8L._AC_SL1500_.jpg",
    date: "October 28, 2023",
    category: "Electronics"
  }
];

const RecentReviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Reviews</h2>
            <p className="text-gray-600">In-depth analysis of top products</p>
          </div>
          <Link to="/reviews" className="flex items-center text-primary font-medium hover:underline">
            All reviews <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden h-full flex flex-col">
              <Link to={`/review/${review.id}`}>
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={review.image} 
                    alt={review.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105" 
                  />
                </div>
              </Link>
              
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">{review.category}</Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">{review.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  <Link to={`/review/${review.id}`} className="hover:text-primary">
                    {review.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {review.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{review.date}</span>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/review/${review.id}`}>
                    Read Full Review <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
