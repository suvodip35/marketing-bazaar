
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ArrowRight } from "lucide-react";

const ReviewsPage = () => {
  // In a real application, this would come from an API
  const reviews = [
    {
      id: "1",
      title: "The Best Noise-Canceling Headphones of 2023",
      excerpt: "After testing dozens of models, we've found the ultimate headphones for travelers, commuters, and anyone who wants to tune out the world.",
      category: "Audio",
      date: "November 10, 2023",
      image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
      rating: 4.8,
      featuredProduct: {
        name: "Sony WH-1000XM5",
        link: "/product/B0BSL1JPZW"
      }
    },
    {
      id: "2",
      title: "The 5 Best E-Readers for Every Budget",
      excerpt: "Whether you're looking for an affordable option or a premium device with all the bells and whistles, we've found the best e-readers for every need.",
      category: "Electronics",
      date: "October 28, 2023",
      image: "https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg",
      rating: 4.7,
      featuredProduct: {
        name: "Kindle Paperwhite",
        link: "/product/B07ZPML7NP"
      }
    },
    {
      id: "3",
      title: "Smart Home Devices That Actually Make Life Easier",
      excerpt: "We tested dozens of smart home devices to find the ones that are truly useful rather than just flashy gadgets that collect dust.",
      category: "Smart Home",
      date: "September 15, 2023",
      image: "https://m.media-amazon.com/images/I/51cYet1f5QL._AC_SL1000_.jpg",
      rating: 4.5,
      featuredProduct: {
        name: "Amazon Fire TV Stick 4K",
        link: "/product/B0CHX3QBCH"
      }
    },
    {
      id: "4",
      title: "The Ultimate Guide to Wireless Earbuds",
      excerpt: "With so many options on the market, finding the right wireless earbuds can be overwhelming. We've done the research to help you choose.",
      category: "Audio",
      date: "September 2, 2023",
      image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
      rating: 4.9,
      featuredProduct: {
        name: "Apple AirPods Pro",
        link: "/product/B09G9FPHY6"
      }
    },
    {
      id: "5",
      title: "The Best Kitchen Gadgets for Home Cooks",
      excerpt: "These innovative kitchen tools will help you cook faster, better, and with less effort.",
      category: "Kitchen",
      date: "August 12, 2023",
      image: "https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SL1500_.jpg",
      rating: 4.6,
      featuredProduct: {
        name: "Instant Pot Duo Plus",
        link: "/product/B07V4GCFP9"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Expert Product Reviews</h1>
            <p className="text-gray-600">
              In-depth analysis and honest opinions on the latest products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="overflow-hidden flex flex-col h-full">
                <Link to={`/review/${review.id}`} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={review.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{review.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{review.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    <Link to={`/review/${review.id}`} className="hover:text-primary">
                      {review.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pb-3 flex-grow">
                  <CardDescription className="text-gray-600">
                    {review.excerpt}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="pt-0 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {review.date}
                  </div>
                  <Link 
                    to={review.featuredProduct.link} 
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    {review.featuredProduct.name} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
