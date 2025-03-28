
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFeaturedProducts } from "@/services/productService";
import ProductGrid from "./ProductGrid";

const FeaturedProducts = () => {
  const { products, loading, error } = useFeaturedProducts();

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
        
        <ProductGrid 
          products={products}
          loading={loading}
          error={error}
          emptyMessage="No featured products available at this time."
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
