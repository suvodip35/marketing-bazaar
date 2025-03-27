
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// Sample product data
const featuredProducts = [
  {
    id: "B09G9FPHY6",
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
    rating: 4.7,
    price: "$249.00",
    description: "Active Noise Cancellation reduces unwanted background noise. Adaptive Transparency lets outside sounds in while reducing loud environmental noise.",
    badge: "Best Seller"
  },
  {
    id: "B0CHX3QBCH",
    title: "Amazon Fire TV Stick 4K streaming device",
    image: "https://m.media-amazon.com/images/I/51cYet1f5QL._AC_SL1000_.jpg",
    rating: 4.6,
    price: "$49.99",
    description: "Our most powerful streaming stick - 30% more powerful than Fire TV Stick 4K Max (2021), with faster app starts and more fluid navigation."
  },
  {
    id: "B0BSL1JPZW",
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
    rating: 4.5,
    price: "$398.00",
    description: "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation."
  },
  {
    id: "B07ZPML7NP",
    title: "Kindle Paperwhite 16 GB – Now with a 6.8\" display",
    image: "https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg",
    rating: 4.8,
    price: "$149.99",
    description: "Kindle Paperwhite – Now with a 6.8\" display and thinner borders, adjustable warm light, up to 10 weeks of battery life."
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Our top picks this month</p>
          </div>
          <Link to="/products" className="flex items-center text-primary font-medium hover:underline">
            View all products <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              rating={product.rating}
              price={product.price}
              description={product.description}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
