
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/ui/ProductGrid";
import { searchProducts } from "@/services/searchService";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Format category name for display (converts "home-kitchen" to "Home & Kitchen")
  const formatCategoryName = (slug) => {
    return slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" & ");
  };
  
  // Get display name for the current category
  const categoryDisplayName = formatCategoryName(category);
  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // In a real app, we would filter products by category
        // For now, we'll use the search service and filter client-side
        const allProducts = await searchProducts("");
        
        // Filter products that might belong to this category (just a simulation)
        const filteredProducts = allProducts.filter(product => 
          product.category === category || 
          Math.random() > 0.5 // Randomly show some products for demo purposes
        );
        
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Error fetching products by category:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [category]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{categoryDisplayName}</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{categoryDisplayName}</h1>
          <p className="text-gray-600 mb-8">
            Browse our selection of {categoryDisplayName.toLowerCase()} products
          </p>
          
          <ProductGrid 
            products={products}
            loading={loading}
            error={error}
            emptyMessage={`No ${categoryDisplayName.toLowerCase()} products found`}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
