
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/services/productService";
import { searchProducts } from "@/services/searchService";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // In a real app, this would be an API call to your backend
        // For now, we'll simulate by searching all products and finding this one
        const allProducts = await searchProducts("");
        const foundProduct = allProducts.find(p => p.id === id);
        
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Get related products - in real app this would be a recommendation API
          const related = allProducts
            .filter(p => p.id !== id)
            .slice(0, 4);
          setRelatedProducts(related);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="aspect-square rounded-md" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-6 w-1/3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <p className="text-gray-600 mb-6">{error || "The requested product could not be found."}</p>
              <Button asChild>
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:text-primary">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{product.title}</span>
            </div>
          </div>
          
          {/* Product Detail */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative">
                {product.badge && (
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {product.badge}
                  </Badge>
                )}
                <div className="overflow-hidden rounded-md aspect-square border">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
                
                <div className="flex items-center space-x-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">{product.rating.toFixed(1)}</span>
                </div>
                
                <div className="text-2xl font-bold text-primary mb-6">
                  {product.price}
                </div>
                
                <div className="prose mb-6">
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <a 
                      href={`https://amazon.com/dp/${product.id}?tag=YOUR-AFFILIATE-ID`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      View on Amazon
                    </a>
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    As an Amazon Associate, we earn from qualifying purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">You might also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.title}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 line-clamp-2 mb-1">
                          {relatedProduct.title}
                        </h3>
                        <div className="text-primary font-bold">
                          {relatedProduct.price}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
