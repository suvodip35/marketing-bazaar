
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  React.useEffect(() => {
    // In a real app, this would fetch product data
    console.log(`Fetching product with ID: ${id}`);
    
    // Show toast when product is loaded
    toast({
      title: "Product Loaded",
      description: `Viewing product #${id}`,
    });
  }, [id, toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Product Detail</h1>
          <p>Product ID: {id}</p>
          
          {/* Placeholder content */}
          <div className="mt-8">
            <p className="text-gray-600">
              This is a placeholder for product detail content. In a real application, this would display detailed product information fetched from an API.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
