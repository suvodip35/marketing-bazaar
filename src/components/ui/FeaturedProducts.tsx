
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useFeaturedProducts } from "@/services/productService";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedProducts = () => {
  const { products, loading, error } = useFeaturedProducts();

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
        
        {error && (
          <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-md">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? renderSkeletons() : (
            products.map((product) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
