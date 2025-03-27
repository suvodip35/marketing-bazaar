
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useSearchParams, Link } from "react-router-dom";
import { X, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { searchProducts } from "@/services/searchService";
import { Product } from "@/services/productService";
import ProductSearchModal from "@/components/ui/ProductSearchModal";
import ComparisonTable from "@/components/ui/ComparisonTable";

const CompareProducts = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  
  // Get product IDs from URL
  const productIdsParam = searchParams.get('ids');
  const productIds = productIdsParam ? productIdsParam.split(',') : [];
  
  useEffect(() => {
    const fetchProducts = async () => {
      if (productIds.length === 0) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // In a real implementation, this would fetch specific products by ID
        const allProducts = await searchProducts("");
        const foundProducts = allProducts.filter(p => productIds.includes(p.id));
        setProducts(foundProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products for comparison. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [productIds]);
  
  const addProductToComparison = (product: Product) => {
    if (products.length >= 4) {
      alert("You can compare up to 4 products at a time");
      return;
    }
    
    if (products.some(p => p.id === product.id)) {
      alert("This product is already in your comparison");
      return;
    }
    
    setProducts([...products, product]);
  };
  
  const removeProductFromComparison = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Compare Products</h1>
            <p className="text-gray-600">Compare features and specifications side by side</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
              {error}
            </div>
          )}
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product slots */}
              {loading ? (
                // Loading skeleton
                Array(productIds.length || 1).fill(0).map((_, i) => (
                  <div key={i} className="border rounded-md p-4 h-64">
                    <Skeleton className="h-full w-full" />
                  </div>
                ))
              ) : (
                // Render product cards + empty slots
                <>
                  {products.map(product => (
                    <div key={product.id} className="relative border rounded-md p-4 flex flex-col">
                      <button
                        onClick={() => removeProductFromComparison(product.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                        aria-label="Remove from comparison"
                      >
                        <X size={18} />
                      </button>
                      
                      <div className="flex justify-center mb-4 h-32">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full object-contain"
                        />
                      </div>
                      
                      <h3 className="font-medium line-clamp-2 mb-2">{product.title}</h3>
                      <div className="text-primary font-bold mt-auto">
                        {product.price}
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty slots */}
                  {Array(Math.max(0, 4 - products.length)).fill(0).map((_, i) => (
                    <div 
                      key={`empty-${i}`} 
                      className="border border-dashed rounded-md p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
                      onClick={() => setIsSearchModalOpen(true)}
                    >
                      <Plus size={24} className="text-gray-400 mb-2" />
                      <p className="text-gray-500 text-center">Add product to compare</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          
          {products.length >= 2 ? (
            <ComparisonTable products={products} />
          ) : (
            <div className="bg-white p-8 text-center rounded-lg shadow-sm">
              <h2 className="text-xl font-medium mb-4">Add at least 2 products to compare</h2>
              <p className="text-gray-600 mb-6">
                Select products to compare their features and specifications side by side.
              </p>
              <Button onClick={() => setIsSearchModalOpen(true)}>
                Add Products
              </Button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Link to="/products" className="inline-flex items-center text-primary hover:underline">
              Browse all products <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </main>
      
      <ProductSearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProduct={addProductToComparison}
        excludedIds={products.map(p => p.id)}
      />
      
      <Footer />
    </div>
  );
};

export default CompareProducts;
