
import React, { useState } from "react";
import { X, Search } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchProducts } from "@/services/searchService";

const ProductSearchModal = ({ 
  isOpen, 
  onClose, 
  onSelectProduct,
  excludedIds = [] 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const searchResults = await searchProducts(searchQuery);
      // Filter out already selected products
      const filteredResults = searchResults.filter(p => !excludedIds.includes(p.id));
      setResults(filteredResults);
    } catch (err) {
      console.error("Error searching products:", err);
      setError("Failed to search products. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleSelectProduct = (product) => {
    onSelectProduct(product);
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add product to comparison</DialogTitle>
          <DialogDescription>
            Search for products to add to your comparison.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSearch} className="flex gap-2 mt-4">
          <Input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-grow"
          />
          <Button type="submit" disabled={loading}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <div className="mt-4 max-h-[40vh] overflow-y-auto">
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          ) : results.length > 0 ? (
            <ul className="divide-y">
              {results.map(product => (
                <li key={product.id} className="py-2">
                  <button
                    className="w-full text-left hover:bg-gray-50 p-2 rounded flex items-center"
                    onClick={() => handleSelectProduct(product)}
                  >
                    <div className="w-12 h-12 flex-shrink-0 mr-3">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium line-clamp-1">{product.title}</h4>
                      <p className="text-primary text-sm">{product.price}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : searchQuery ? (
            <p className="text-center py-8 text-gray-500">No products found. Try a different search term.</p>
          ) : (
            <p className="text-center py-8 text-gray-500">Search for products to add to comparison</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductSearchModal;
