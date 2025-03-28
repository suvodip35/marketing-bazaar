
import { useState, useEffect } from "react";

// Sample product data
const products = [
  {
    id: "B09G9FPHY6",
    title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation with Dual Noise Sensor technology. Next-level music with Edge-AI and DSEE Extreme upscaling. Up to 30-hour battery life with quick charging.",
    price: "$348.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    badge: "Best Seller"
  },
  {
    id: "B08L5TNJHG",
    title: "Apple Watch Series 6 (GPS, 44mm)",
    description: "Measure your blood oxygen with an all-new sensor and app. Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone.",
    price: "$399.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: "B0CHX3QBCH",
    title: "SAMSUNG 65-Inch Class OLED 4K S90C Series Quantum HDR",
    description: "Catch all the details with Neural Quantum Processor with 4K Upscaling that enhances all your content to 4K resolution. Dolby Atmos & Object Tracking Sound Lite deliver immersive surround sound.",
    price: "$1,597.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    badge: "New"
  },
  {
    id: "B07ZPKBL9V",
    title: "Kindle Paperwhite (8 GB) – Now with a 6.8\" display",
    description: "The thinnest, lightest Kindle Paperwhite yet—with a flush-front design and 300 ppi glare-free display that reads like real paper even in bright sunlight.",
    price: "$139.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: "B08DFPV6S7",
    title: "COSORI Air Fryer 5.8QT",
    description: "13 convenient cooking functions with a temperature range of 170–400°F. Cook faster than a conventional oven and save electricity. The removable, dishwasher-safe baskets and nonstick surfaces make cleanup simple.",
    price: "$99.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612883597313-0e30409bb7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    badge: "Sale"
  },
  {
    id: "B07JW9H4J1",
    title: "Logitech MX Master 3 Advanced Wireless Mouse",
    description: "Ultra-fast and precise scrolling with electromagnetic MagSpeed Wheel. App-specific customizations for increased workflow efficiency. Ergonomic design with intuitive controls.",
    price: "$99.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1629429407756-57d4bcd0d0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "B081FPD65C",
    title: "LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms Monitor",
    description: "27 inch QHD (2560 x 1440) IPS display with 144Hz refresh rate. NVIDIA G-SYNC Compatible with AMD FreeSync Premium. Dynamic Action Sync optimized for gaming.",
    price: "$299.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "B07TD52664",
    title: "Anker PowerCore 26800 Portable Charger",
    description: "Enormous 26800mAh capacity able to charge most phones over 6 times. Charge 3 devices simultaneously with the PowerIQ technology. Safe design with surge protection and temperature control.",
    price: "$69.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  }
];

// Mock API hook for featured products
export function useFeaturedProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Return the first 4 products as featured
  return { products: products.slice(0, 4), loading, error };
}

// Mock API hook for product detail
export function useProductDetail(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [productId]);
  
  return { product, loading, error };
}

// Mock API hook for searching products
export function useProductSearch(query, category, sortBy) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    const timer = setTimeout(() => {
      try {
        let filtered = [...products];
        
        // Filter by search query
        if (query) {
          const searchTerm = query.toLowerCase();
          filtered = filtered.filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
          );
        }
        
        // Filter by category
        if (category && category !== 'all') {
          // This is a simplified category filter - in a real app you'd have category data
          filtered = filtered.filter(product => 
            product.title.toLowerCase().includes(category.toLowerCase())
          );
        }
        
        // Sort products
        if (sortBy) {
          switch(sortBy) {
            case 'price-low':
              filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
              break;
            case 'price-high':
              filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
              break;
            case 'rating':
              filtered.sort((a, b) => b.rating - a.rating);
              break;
            default:
              // Default sort by newest (using id as proxy)
              filtered.sort((a, b) => b.id.localeCompare(a.id));
          }
        }
        
        setResults(filtered);
        setLoading(false);
      } catch (err) {
        setError("Error searching products");
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [query, category, sortBy]);
  
  return { products: results, loading, error };
}

// Function to get comparable products
export function useCompareProducts(productIds) {
  const [compareProducts, setCompareProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    const timer = setTimeout(() => {
      try {
        if (productIds && productIds.length > 0) {
          const found = products.filter(p => productIds.includes(p.id));
          setCompareProducts(found);
        } else {
          setCompareProducts([]);
        }
        setLoading(false);
      } catch (err) {
        setError("Error fetching products to compare");
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [productIds]);

  return { products: compareProducts, loading, error };
}

// Mock deals data
export function useDeals() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      try {
        // Add discount info to some products
        const dealsData = products
          .slice(0, 6)
          .map(product => ({
            ...product,
            originalPrice: `$${(parseFloat(product.price.replace('$', '')) * 1.2).toFixed(2)}`,
            discount: '20% OFF',
            endsIn: '2 days'
          }));
          
        setDeals(dealsData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching deals");
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return { deals, loading, error };
}
