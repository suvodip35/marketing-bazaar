
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/ui/ProductGrid";
import { searchProducts } from "@/services/searchService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "@/components/ui/use-toast";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Load products on initial load and when search query changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Always fetch all products, filter by search query if provided
        const allProducts = await searchProducts("");
        
        if (searchQuery) {
          const filteredProducts = allProducts.filter(
            p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 p.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setProducts(filteredProducts);
          
          if (filteredProducts.length === 0) {
            toast({
              title: "No results",
              description: `No products found for "${searchQuery}"`,
              variant: "default"
            });
          } else {
            toast({
              title: "Search results",
              description: `Found ${filteredProducts.length} products for "${searchQuery}"`,
            });
          }
        } else {
          setProducts(allProducts);
        }
      } catch (err) {
        console.error("Error searching products:", err);
        setError("Failed to load products. Please try again.");
        toast({
          title: "Error",
          description: "Failed to load products",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
    setLocalSearchQuery(searchQuery);
    setCurrentPage(1);
  }, [searchQuery]);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchParams({ search: localSearchQuery });
    } else {
      // Clear search params if search box is empty
      setSearchParams({});
    }
  };

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.max(1, Math.ceil(products.length / productsPerPage));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Products</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for products..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
          
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-2">
                Search results for "{searchQuery}"
              </h2>
              <p className="text-gray-500">
                {loading ? "Searching..." : `Found ${products.length} products`}
              </p>
            </div>
          )}
          
          <ProductGrid
            products={currentProducts}
            loading={loading}
            error={error}
            emptyMessage={searchQuery ? `No products found for "${searchQuery}"` : "No products available"}
          />
          
          {!loading && products.length > productsPerPage && (
            <div className="mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                    let pageNum = index + 1;
                    
                    // Adjust page numbers for pagination with many pages
                    if (totalPages > 5 && currentPage > 3) {
                      if (index === 0) {
                        pageNum = 1;
                      } else if (index === 1) {
                        return (
                          <PaginationItem key="ellipsis-start">
                            <span className="px-3 py-2">...</span>
                          </PaginationItem>
                        );
                      } else {
                        pageNum = Math.min(
                          totalPages - (4 - index),
                          Math.max(currentPage - 1 + (index - 2), 1)
                        );
                      }
                    }
                    
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          isActive={currentPage === pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
