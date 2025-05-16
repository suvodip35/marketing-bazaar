
import React from "react";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const ProductGrid = ({ products, loading, error, emptyMessage = "No products found" }) => {
  // Function to render skeleton placeholders during loading
  const renderSkeletons = () => {
    return Array(8).fill(0).map((_, i) => (
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
    <>
      {error && (
        <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-md w-full">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {loading ? renderSkeletons() : (
          products.length > 0 ? (
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
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              {emptyMessage}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProductGrid;
